import { Lang, GetCrazyMsgFn } from './type';
declare class Crazy {
    private rootSelector;
    private storageKey;
    private tagName;
    private langs;
    private getMsg;
    constructor(rootSelector?: string, getMsg?: GetCrazyMsgFn, storageKey?: string, tagName?: string, langs?: Lang[]);
    render(): Promise<void>;
    autoRender(): Promise<void>;
}
export default Crazy;
