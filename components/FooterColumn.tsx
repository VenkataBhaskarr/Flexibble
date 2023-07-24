type Crumb = {
    title: string,
    links: Array<string>
}

type Columntype = {
    crumbs: Array<Crumb>
}

const FooterColumn = ({crumbs} : Columntype) => {
    return (
        <div className={"flex gap-7 flex-wrap"}>
            {
                crumbs.map((crumb, index) => (
                    <div key={index}>
                        <h2 className={"font-black"}>{crumb.title}</h2>
                        <ul className={"flex flex-col gap-1"}>
                            {
                                crumb.links.map((link, index) => (
                                    <li key={index}>
                                        {link}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
export default FooterColumn