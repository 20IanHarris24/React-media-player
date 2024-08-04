import { ReactElement } from "react";


import "../css/progressbar.css"

export function Progressbar (): ReactElement{


    return <div className="progress-container">
                <span className="time">0:40</span>
                <progress value={20} max={100} className="progress-bar"/>
                <span className="time">3:42</span>
            </div>
}