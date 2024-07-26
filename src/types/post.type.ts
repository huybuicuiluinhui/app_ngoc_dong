export interface IPost{
        id: number;
        title: string;
        description: string;
        imgage_home: string;
        time: string;
}
export interface IDetailPost{
        id: number;
        title: string;
        description: string;
        time: string;
        link_event: null;
        price_promotional: string;
        imgage_home: string;
        banner: string;
        note: string;
        status: number;
        type: number;
        created_at: string;
        updated_at: string;
}