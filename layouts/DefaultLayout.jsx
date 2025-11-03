/* Import di outlet */
import { Outlet } from "react-router-dom"

import Header from "../src/components/Header"

/* creazione compopnente di default layout */
const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <Outlet/>
            </main>

        </>
    )
}

export default DefaultLayout