export interface IProject {
    id: string,
    code: string,
    preview: string,
    createdAt: string,
    description: string,
    title: string,
    thumb: {
        url: string;
        width?: number;
        height?: number;
    },
    languages: string[] | string,
    video: {
        providerUid: string
    } | null
}