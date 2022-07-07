import scss from "./page.module.scss"
import Header from "../components/Header/Header"
import Heading from "../components/UI/Heading/Heading"
import Text from "../components/UI/Text/Text"
import Button from "../components/UI/Button/Button"
import {SERVER} from "../config"
import CardsList from "../components/Cards/CardsList"
import request from "../api/api.js"
import {useCallback, useEffect, useMemo, useState} from "react";
import Form from "../components/Form/Form";

const USERS_PER_PAGE = 6
const DEFAULT_PAGE = 1
const Page = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)


    const showMoreOnClickHandle = useCallback(() => {
        getUsers(USERS_PER_PAGE, page)
    }, [page, users])

    const onSignUpClick = useCallback((status) => {
        if (status) {
            getUsers(USERS_PER_PAGE, page)
        }
    }, [])

    const getUsers = async (usersPerPage, page) => {
        const res = await request.get.users(usersPerPage, page)
        setMaxPage(res?.total_pages)
        setUsers([...users, ...res.users])
        setPage(page + 1)
    }

    const showButtonHide = useMemo(() => page === maxPage, [page, maxPage])
    useEffect(() => {
        getUsers(USERS_PER_PAGE, DEFAULT_PAGE)
    }, [])

    return (
        <div className={scss.page}>
            <section className={scss.header}>
                <div className={scss.wrapper}>
                    <Header type="desktop"/>
                </div>
            </section>
            <section className={scss.banner}
                     style={{
                         background: `url(${SERVER}/images/banner.jpeg)`,
                         backgroundSize: "150%",
                         backgroundPosition: "center bottom",
                         backgroundRepeat: "no-repeat",
                     }}>

                <div className={scss.wrapper}>
                    <div className={scss.inner}>
                        <Heading parentClass={scss.heading}>Test assignment for front-end developer</Heading>
                        <Text parentClass={scss.text}>What defines a good front-end developer is one that has skilled
                            knowledge of HTML, CSS, JS
                            with a
                            vast understanding of User design thinking as they'll be building web interfaces with
                            accessibility
                            in mind. They should also be excited to learn, as the world of Front-End Development keeps
                            evolving.</Text>
                        <Button parentClass={scss.button}>Sign Up</Button>
                    </div>
                </div>

            </section>

            <section className={scss.users}>
                <div className={scss.wrapper}>
                    <div className={scss.usersInner}>
                        <Heading parentClass={scss.usersHeading}>Working with GET request</Heading>
                        <CardsList list={users}/>
                        <Button onClick={showMoreOnClickHandle}
                                disabled={showButtonHide}
                                parentClass={`${scss.buttonShow} ${showButtonHide ? scss.hide : ""}`}>Show
                            more</Button>
                    </div>
                </div>
            </section>
            <section className={scss.form}>
                <div className={scss.wrapper}>
                    <Form onSignUpClick={onSignUpClick}/>
                </div>
            </section>
        </div>
    )
}
export default Page