import { cacheExchange, createClient, fetchExchange } from "urql";

const API_BASE_URL = "http://localhost:3001/graphql";

const client = createClient({url : API_BASE_URL, exchanges : [cacheExchange, fetchExchange]});

export default client