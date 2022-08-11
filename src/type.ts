export enum Lang {
  en = 'en',
  cn = 'cn',
}

export interface CrazyMsg {
  lang: Lang;
  content: string;
  tags?: string[];
}

export type GetCrazyMsgFn = (
  langs: Lang[],
  tags?: string[]
) => Promise<CrazyMsg>;