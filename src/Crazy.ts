import { Lang, GetCrazyMsgFn } from './type';
import CrazyModel from './CrazyModel';
import { getCrazyMsg } from './utils';

class Crazy {
  private rootSelector: string = 'body';
  private storageKey: string = 'CRAZY_THUR_AUTO_LAST_DATE';
  private tagName = 'crazy-model';
  private langs: Lang[] = [Lang.cn];
  private getMsg: GetCrazyMsgFn = getCrazyMsg;

  constructor(
    rootSelector: string = 'body',
    getMsg: GetCrazyMsgFn = getCrazyMsg,
    storageKey = 'CRAZY_THUR_AUTO_LAST_DATE',
    tagName: string = 'crazy-model',
    langs: Lang[] = [Lang.cn],
  ) {
    this.rootSelector = rootSelector;
    this.getMsg = getMsg;
    this.storageKey = storageKey;
    this.tagName = tagName;
    this.langs = langs;
    customElements.define(this.tagName, CrazyModel);
  }

  public async render() {
    const msg = await this.getMsg(this.langs);

    const crazyModel = document.createElement(this.tagName);
    crazyModel.setAttribute('content', msg.content);

    const root = document.querySelector(this.rootSelector);
    root?.appendChild(crazyModel);
  }

  public async autoRender() {
    const isThur = new Date().getDay() === 4;
    if (!isThur) {
      return;
    }

    const toLocaleDateString = new Date().toLocaleDateString();
    const isCrazyDone =
      localStorage.getItem(this.storageKey) === toLocaleDateString;
    if (isCrazyDone) {
      return;
    }

    localStorage.setItem(this.storageKey, toLocaleDateString);
    await this.render();
  }
}

export default Crazy;
