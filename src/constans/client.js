import { ApolloClient, InMemoryCache } from "@apollo/client"
export const client = new ApolloClient({
    uri: "https://hakaton-backend.onrender.com/graphql",
    cache: new InMemoryCache(),
})
