export interface IProject {
    id: string,
    code: string,
    preview: string,
    createdAt: string,
    description: string,
    title: string,
    thumb: {
        url: string
    },
    languages: string[],
    video: string | null
}