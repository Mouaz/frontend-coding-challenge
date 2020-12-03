export interface TheaterShowTime{
    id: string;
    name: string;
    showtimes: ShowTime[];
}

export interface ShowTime{
    [id:string] : ShowTimeData;
}

export interface ShowTimeData{
    times?: string[];
    title?: string;
    rating?: string;
    poster?: string;
}