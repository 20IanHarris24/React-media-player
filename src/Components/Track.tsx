import { ReactElement } from "react";
import { ITrack, Playbuttonsmall } from ".";

import "../css/Track.css";


interface ITrackProps{
    track: ITrack;
}

export function Track({track}: ITrackProps): ReactElement {

return <div className="track container">
            <figure className = "figure container">
               <span><img src={track.image} className="trackimg col-sm"/></span>
            </figure>
            <div className="song col-sm">
               <h5 className="artist">{track.song.artist}</h5>         
               <p className="songtitle">{track.song.songtitle}</p>
            </div>
            <div className= "plybtn col-sm">
               <Playbuttonsmall/>
            </div>
         
        </div>;

}