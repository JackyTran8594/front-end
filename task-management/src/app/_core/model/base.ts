export class BaseEntity {
    createdBy: any;
    createdDate: Date;
    lastModifiedBy:any;
    lastModifiedDate: Date;

    constructor() {
        this.createdBy = '';
        this.createdDate = new Date();
        this.lastModifiedBy = '';
        this.lastModifiedDate = new Date();
    }
}