export declare enum Lang {
    en = "en",
    cn = "cn"
}
export interface CrazyMsg {
    lang: Lang;
    content: string;
    tags?: string[];
}
export declare type GetCrazyMsgFn = (langs: Lang[], tags?: string[]) => Promise<CrazyMsg>;
