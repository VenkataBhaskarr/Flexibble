import Image from "next/image";
import FooterColumn from "@/components/FooterColumn";
import {footerLinks} from "@/constants";

const Footer = () => {
    return(
        <footer className={"flexStart footer"}>
            <div className={"flex flex-col gap-10 w-full"}>
                <div>
                    <Image src={"./logo-purple.svg"} alt={"Flexible"} height={38} width={117} />
                    <p className={"mt-2"}>
                        Flexible is a platform for sharing workspaces and meeting rooms.
                    </p>
                </div>
                <div className={"flex flex-wrap gap-12 pt-6"}>
                    <FooterColumn crumbs={footerLinks}/>
                </div>
            </div>
            <div className={"flexBetween"}>
                <p>@2023 Flexibble, All rights reserved</p>
                {/*<p>9878 projects submitted.</p>*/}
            </div>
        </footer>
    )
}
export default Footer