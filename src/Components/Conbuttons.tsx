import { ReactElement } from "react";

import "../css/Nowplaying.css"

export function Conbuttons (): ReactElement{

    return <div className = "div controlbtns">
            <span className="material-symbols-outlined col-sm icon_btn repeat">repeat</span>
            <span className="material-symbols-outlined col-sm icon_btn fr">fast_rewind</span>
            <span className="material-symbols-outlined col-sm icon_btn play">play_circle</span>
            <span className="material-symbols-outlined col-sm icon_btn ff">fast_forward</span>
            <span className="material-symbols-outlined col-sm icon_btn shuffle">shuffle</span>
           </div>
  
}