export interface IPackageData {
    _id: string;
    name: string;
    amount: number;
    time_duration: number;
    date: Date;
    entryBy: {
        firstName: string;
        lastName: string;
    }
}