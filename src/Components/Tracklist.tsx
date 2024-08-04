
import { ReactElement } from "react";
import { ITrack } from ".";
import { Track } from ".";





import "../css/Tracklist.css";

interface ITrackProps{
    
    tracks: ITrack[];
}


export function Tracklist({tracks}: ITrackProps): ReactElement{

    /* console.log(tracks); */

    return (   
    <section className="tracklist container col-sm">
        
        <div className="row">
                {tracks.map((tracks) => ( 
                <Track key={tracks.id} track={tracks} /> 
            ))}
        </div>

    </section>
    );
}

 