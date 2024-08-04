import { ReactElement } from "react";
import { Addbutton, Conbuttons, Favbutton, INowplaying, Progressbar} from ".";
import { trackimg } from "../css/trackimg";

import "../css/Nowplaying.css";

interface INowplayingProps{
    
    playing: INowplaying;
}




export function Nowplaying ({playing}: INowplayingProps) : ReactElement {

    return      <section className = "nowplaying container col-sm">
                        <figure className="figure">
                            <img className="image" src= {trackimg.likeweusedto} />
                        </figure>

                        <div className = "div title">
                        
                            <Addbutton/>
                                <div className= "text col-sm">
                                    <h3 className="artist">{playing.song.artist}</h3>         
                                    <p className="songtitle">{playing.song.songtitle}</p>
                                </div>
                            <Favbutton/>
                        </div>
                        {/* <figure className="figure">
                            <img className="image" src= {trackimg.timeline} />
                        </figure> */}
                            
                            <Progressbar/>

                            <Conbuttons/>
        
       


                </section>
            
}

    
    

    
    
           


