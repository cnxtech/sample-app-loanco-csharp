// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/49b1ac6a384fab428e0bad052b47f47ff8306193/express-handlebars/index.d.ts
interface PartialTemplateOptions {
    cache?: boolean;
    precompiled?: boolean;
}

interface RenderOptions {
    cache?: boolean;
    data?: Object;
    helpers?: any;
    partials?: any;
}

interface ExphbsOptions {
    handlebars?: any;
    extname?: string;
    layoutsDir?: string;
    partialsDir?: any;
    defaultLayout?: string;
    helpers?: any;
    compilerOptions?: any;
}

interface Exphbs {
    engine: Function;
    extname: string;
    compiled: Object;
    precompiled: Object;
    create(options?: ExphbsOptions): Exphbs;
    getPartials(options?: PartialTemplateOptions): Promise<Object>;
    getTemplate(filePath: string, options?: PartialTemplateOptions): Promise<Function>;
    getTemplates(dirPath: string, options?: PartialTemplateOptions): Promise<Object>;
    render(filePath: string, context: Object, options?: RenderOptions): Promise<string>;
    renderView(viewPath: string, optionsOrCallback: any, callback?: () => string): void;
}

interface ExpressHandlebars {
  (options?: ExphbsOptions): Function;
  create (options?: ExphbsOptions): Exphbs;
}

declare module "express-handlebars" {
    var exphbs: ExpressHandlebars;
    export = exphbs;
}
