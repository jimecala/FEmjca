export class Experience {
    id?: number;
    employer: string;
    position: string;
    startDate: Date;
    endDate: Date;



    constructor(employer: string, position: string, startDate: Date, endDate: Date) {
        this.employer = employer;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
