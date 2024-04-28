export interface IApplication {
    title: string;
    description: string;
    date_created?: Date;
    date_update?: Date;
    id: number;
    submissions?: [];
}

export interface IcreateApplicationDto{
    title: string;
    description: string
}