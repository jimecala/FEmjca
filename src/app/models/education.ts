export class Education {
    id?: any;
    institution: string;
    endDate: Date;

    constructor(institution: string, endDate: Date) {
        this.institution = institution;
        this.endDate = endDate;
    }
}


