import {GraphQLClient} from "graphql-request";
import {getUserQuery} from "@/graphql";
const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction ? process.env.GRAFBASE_URL : ' http://127.0.0.1:4000/graphql'
const apiKey = isProduction ? process.env.API_KEY : 'dev'
const serverURL = isProduction ? process.env.API_ENDPOINT : 'http://localhost:3000'
const client = new GraphQLClient('apiUrl')
const makeGraphQlRequest = async (query:string,variables={}) => {
    try{
        return await client.request(query,variables)
    }catch(err){
        console.log("error while making graphql request")
        throw err
    }
}

export const getUser = async (email:string) => {
    return await makeGraphQlRequest(getUserQuery,{email})
}