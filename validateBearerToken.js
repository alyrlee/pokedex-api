const app = express()

app.use(morgan('dev'))

app.use(validateBearerToken)

app.get('/types', handleGetTypes);

app.get('/pokemon', handleGetPokemon);

app.listen(PORT, cb)
