"use client"
import {useEffect, useState} from "react";
import {getProviders, signIn} from "next-auth/react";

type Provider = {
    id : string,
    name : string,
    type : string,
    signinUrl : string,
    callbackUrl : string,
    signinUrlParams : Record<string,string>,
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
   const [providers , setProviders] = useState<Providers | null>(null)
   useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders()
            console.log(res)
            setProviders(res)
        }
        fetchProviders()
   },[])
       if(providers){
           return (
               <div>
                   {Object.values(providers).map((provider : Provider) => (
                       <div key={provider.id}>
                           <button className={"bg-neutral-800 text-cyan-50 rounded-lg p-2"} onClick={() => signIn(provider.id)}>
                               Sign in with {provider.id}
                           </button>
                       </div>
                   ))}
               </div>
           )
       }
}
export default AuthProviders