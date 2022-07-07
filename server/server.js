const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static'));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
