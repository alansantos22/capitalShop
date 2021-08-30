export class Places {
    name: string;
    group: string;
    className: string;
    description: {
        faction: string;
        level: number;
        price:number;
        treasure: number;
        population: number;
        power: {
            value: number,
            soldiers: number;
        };
        coordinates: {
            top: number;
            left: number;
        };
        production: Array<object>;
    };
}
