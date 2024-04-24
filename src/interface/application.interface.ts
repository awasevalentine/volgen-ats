export interface IApplication {
    title: string;
    description: string;
    date_created?: Date;
    date_update?: Date;
    id: number;
    responses?: [];
}

export interface IcreateApplicationDto{
    title: string;
    description: string
}