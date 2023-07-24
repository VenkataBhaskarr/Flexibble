
import Link from "next/link";
import Image from "next/image";
import {NavLinks} from "@/constants";
import {useState} from "react";
import AuthProviders from "@/components/AuthProviders";

const Navbar = () => {
    // const [session , setSession] = useState(null)
    const session = null
    return (
        <nav className={"flexBetween navbar"}>
            <div className={"flex-1 flexStart gap-10"}>
                <Link href={"/"}>
                    <Image src={"./logo.svg"} alt={"logo"} width={115} height={43}/>
                </Link>
                <ul className={"xl:flex hidden text-small gap-7"}>
                    {
                        NavLinks.map((link, index) => (
                                <Link href={link.href} key={link.key}>
                                    {link.text}
                                </Link>
                        ))
                    }
                </ul>
            </div>
            <div className={"flexCenter gap-4"}>
                {
                    session ? (
                        <>
                            userPhoto
                            <Link href={"/create-project"}>
                                Sharework
                            </Link>
                        </>
                    ) : (
                        <AuthProviders />
                    )
                }
            </div>
        </nav>
    )
}
export default Navbar