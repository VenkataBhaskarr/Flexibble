export const getUserQuery = `
     query getUser($email : String!){
        user(by: {email : &email}) {
        email
        name
        avatarUrl
        description
        githubUrl
        id
        updatedAt
        createdAt
       }
     }
`
