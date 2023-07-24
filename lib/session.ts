import {getServerSession} from "next-auth/next";
import {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })],
    // jwt : {
    //     encode : ({secret , token}) => {
    //
    //     },
    //     decode : async ({secret, token}) => {
    //
    //     }
    // },
    callbacks : {
        async session({session}){
            return session
        },
        async signIn({user}){
            try{

                return true
            }catch(error){
                console.log("error which checking user existence")
            }
        }
    }
}

export async function getCurrentSession(){
    return await getServerSession(authOptions)
}