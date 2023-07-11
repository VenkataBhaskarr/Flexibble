# This is a clone of dribble in Nextjs

## Things i have learned while doing this project are......

### headlessui
1. headlessui divides the components into logic and design where it provides the neccessary logic and design is upto the developers 🌚.

### cloudinary 
1. The main usecase of the cloudinary in this project is to store our media in the cloud and use as we need them ☁️.

### graphql
1. Graphql is a query language and also a runtime for fulling those queries
2. every collection is assumed as a node and their types are considered as the node fingers now depending on the query the realtions between these nodes are formed on a whole this is visualized as a graph and hence the name is derived 

REST API is an architecture of how to perform CRUD for resources on the other hand graphql is a query language in itself.
Mutations and Query.

<img width="1134" alt="Screenshot 2023-07-10 at 9 38 13 PM" src="https://github.com/VenkataBhaskarr/Flexibble/assets/111889155/b92ae9aa-350c-4b97-9052-0dcc459eb491">

### grafbase


### working with graphql

1. before sending request to the server first we need to prepare the server such that it can identify the graphql queries and process them for that there is a library which we will use which will handle the requests and process the graphql queries and sends the result that is ApolloServer
2. Implementation is as follows...
```
import {ApolloServer} from "@apollo/server"
const server = new ApolloServer({
// takes two key values
// one is defTypes which is the graphql schema (not the database schema) which is used to process the incoming query
// other is reactors which is used to send the response to the client by using the processed query that is defType
})

```
