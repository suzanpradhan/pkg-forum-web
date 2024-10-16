declare module 'draft-js' {
  export class EditorState {
    [x: string]: any;
    static createEmpty(): EditorState;
  }

  // Include the convertToRaw function definition
  export function convertToRaw(contentState: any): any;

  // Optionally, define ContentState if needed for type safety
  export class ContentState {
    [x: string]: any;
  }


}
