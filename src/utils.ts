import { GetCrazyMsgFn, CrazyMsg, Lang } from './type';

const defaultMsgs = [
  {
    lang: Lang.cn,
    content:
      '✨疯狂星期四✨\n❤️活力周四✨激四情射❤️\n❤️想不想搞大我的肚子❤️\n❤️转我100✨吃肯德基❤️',
  },
  {
    lang: Lang.en,
    content:
      '✨Crazy Thursday✨\n❤️Active Thursday✨\n❤️Do you want to make my belly bigger❤️\n❤️Transfer me 100 bucks✨\n❤️I want to eat kfc❤️',
  },
];

const chooseOne = <T>(list: T[]): T | undefined => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

export const getCrazyMsg: GetCrazyMsgFn = async (langs) => {
  const msgs = defaultMsgs.filter((msg) => langs.includes(msg.lang));
  return chooseOne(msgs) || defaultMsgs[0];
};
