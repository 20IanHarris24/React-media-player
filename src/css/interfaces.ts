export interface INowplaying
{
    id: string;
    image: string;
    song: ISong;
}


export interface ISong
{

    artist: string; 
    songtitle: string;
}


export interface ITrack
{

    id: string;
    image: string;
    song: ISong;
 }

