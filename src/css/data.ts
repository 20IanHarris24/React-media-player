import { ITrack } from "./interfaces";
import { INowplaying } from "./interfaces";
import  { trackimg }  from "./trackimg";



export const tracks: ITrack[] = [
    {
        id: "1",
        image: trackimg.likeweusedto,
        song: {
            artist: "a rocket to the moon", 
            songtitle: "like we used to",
            },
        },
        
        {
        id: "2",
        image: trackimg.savetheroom,
        song: {
            artist: "john legend", 
            songtitle: "save the room",
            },
        },
    
        { 
        id: "3",
        image: trackimg.wejustdontcare,
        song: {
            artist: "john legend", 
            songtitle: "we just don't care",
            },
        },
    
        {
        id: "4",
        image: trackimg.dakota,
        song: {
            artist: "a rocket to the moon", 
            songtitle: "dakota",
            },
        },
    
        {
        id: "5",
        image: trackimg.candyman,
        song: {
            artist: "zedd & aloe blacc", 
            songtitle: "candyman",
            },
        },
    
        {
        id: "6",
        image: trackimg.human,
        song: {
            artist: "rag'n'bone man", 
            songtitle: "human",
            },
        },
    
        {
        id: "7",
        image: trackimg.shots,
        song: {
            artist: "imagine dragons",
            songtitle: "shots (brolier remix)",
            },
        },



];



export const nowplaying: INowplaying = 
    {
        id: "1",
        image:trackimg.likeweusedto,
        song: {
            artist: "a rocket to the moon", 
            songtitle: "like we used to",
        },
    };
