declare module 'sanitize-html' {
    interface IOptions {
        allowedTags?: string[];
        allowedAttributes?: Record<string, string[]>;
        allowedSchemes?: string[];
        allowedSchemesByTag?: Record<string, string[]>;
        allowedSchemesAppliedToAttributes?: string[];
        allowProtocolRelative?: boolean;
        enforceHtmlBoundary?: boolean;
        selfClosing?: string[];
        nonTextTags?: string[];
        textFilter?: (text: string) => string;
        transformTags?: Record<
            string,
            string | { tagName?: string; attribs?: Record<string, string> } | ((tagName: string, attribs: Record<string, string>) => { tagName?: string; attribs?: Record<string, string> })
        >;
    }

    function sanitizeHtml(dirty: string, options?: IOptions): string;

    export = sanitizeHtml;
}
