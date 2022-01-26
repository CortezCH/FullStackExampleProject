import { StringLiteralLike } from "typescript";

export interface Movie{
    movieID : number;
    title : string;
    genre : string;
    releaseDate : number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMovie(json: string): Movie {
        return JSON.parse(json);
    }

    public static movieToJson(value: Movie): string {
        return JSON.stringify(value);
    }
}
