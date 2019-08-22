import { Photo } from './photo';

console.log("user.ts");

export interface User {
    id: number;
    useranme: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}

console.log("user.ts");