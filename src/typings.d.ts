declare module '*.handlebars' {
    const content: string;
    export default content
}

//TODO: Описать типы Handlebars, Nock
declare const Handlebars: any

declare module 'nock'