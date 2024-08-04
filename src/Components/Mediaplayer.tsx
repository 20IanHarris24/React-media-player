import { ReactElement } from "react";
import { Header, Nowplaying, nowplaying, Tracklist, tracks } from ".";

import "../css/Mediaplayer.css";




export function Mediaplayer (): ReactElement{

    return <section className = "mediaplayer container-fluid row">

                    <Header/>
                    <section className="mediaplayer-sub row">
                        <Tracklist tracks={tracks}/>
                        <Nowplaying playing={nowplaying}/>
                    </section> 
        
           </section>
}