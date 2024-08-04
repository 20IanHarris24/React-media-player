import { Navbutton } from ".";
import { Vertbutton } from ".";
import { ReactElement } from "react";
import "../css/Header.css";

export function Header (): ReactElement {

    return <header className="header container col-sm">
                <Navbutton/>
                    <h1 className="playlist-name">playlist - moody</h1>
                <Vertbutton/>
            </header>
    }