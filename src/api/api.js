const URL = "https://frontend-test-assignment-api.abz.agency"

const request = async (uri, options) => {
    const res = await fetch(`${URL}/${uri}`, options)
    return res.json()
}

request.get = (params) => request(`/api/v1${params}`)
request.post = (params, token, formData) => request(`/api/v1${params}`,
    {
        headers: {'Token': token},
        method: 'POST', body: formData

    }
)
request.get.token = () => request.get("/token")
request.get.users = (count, page) => request.get(`/users?page=${page}&count=${count}`)
request.get.userById = (id) => request.get(`/users/${id}`)
request.get.positions = () => request.get(`/positions`)
request.post.users = (token, user) => request.post("/users", token, user)

export default request