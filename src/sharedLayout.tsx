import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function SharedLayOut(){
    return <>
        <Header />
        <main className="tw-flex tw-flex-col tw-flex-1">
            <Outlet />
        </main>
    </>
}