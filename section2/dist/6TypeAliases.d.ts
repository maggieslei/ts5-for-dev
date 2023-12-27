type Position = 'Programmer' | 'HR';
declare const myPosition: Position;
type Colleague = {
    name: string;
    age: number;
    position: Position;
    greetBack?: Function;
};
declare const myColleague: Colleague;
declare const myOtherColleague: {
    name: string;
    age: number;
    position: Position;
    tasks: string[];
};
declare const myTalkyColleague: Colleague;
declare function greetColleague(colleague: Colleague): void;
