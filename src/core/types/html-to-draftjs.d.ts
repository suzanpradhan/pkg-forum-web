declare module 'html-to-draftjs' {
    export function convertFromHTML(html: string): {
        contentBlocks: any;
        entityMap: any;
    };
}
