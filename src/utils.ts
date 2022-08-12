import { GetCrazyMsgFn, CrazyMsg, Lang } from './type';

const defaultMsgs = [
  {
    lang: Lang.cn,
    content:
      '✨疯狂星期四✨\n❤️活力周四✨激四情射❤️\n❤️想不想搞大我的肚子❤️\n❤️转我100✨吃肯德基❤️',
  },
  {
    lang: Lang.cn,
    content:
      '今天是疯狂星期四，转发kfc宣传到5个群，肯爷爷会根据你绑定的微信号，给你送一个全家桶。\n我试过了，是假的。但上班摸鱼闲着也是闲着，不如挨顿骂。',
  },
  {
    lang: Lang.cn,
    content:
      '我都懂，我都明白，我是选项E，我是planB，是分叉的头发，洗衣机流出的泡沫，超市里被捏碎的饼干，是吃腻的奶油，是落寞的城市，是地上的草，我是被踩踏的，是西装的备用扣，是被雨淋湿的小狗，是腐烂的橘子，是过期的牛奶，是断线的风筝，是被随意丢弃的向日葵，是沉默寡言的小朋友，所以能v我52吗，今天肯德基疯狂星期四',
  },
  {
    lang: Lang.cn,
    content:
      '你好，我是奥特曼，我正在外星和敌人战斗!没有能量了!听说今天肯德基疯狂星期四，我现在需要有人给我带 29.9块钱4个的吮指原味鸡补充能量。恢复后我请你来外星做客。',
  },
  {
    lang: Lang.cn,
    content:
      '怎么又到了周四，我开始留头发，减重，换风格，开始往前冲，不好意思阿，这一次，肯德基疯狂星期四，我一定要吃。',
  },
  {
    lang: Lang.cn,
    content:
      '早上刚起床洗了个澡，看到外头的阳光真不错，我来不及穿上衣服就打开了窗帘，欣赏起了日光下的美景，我双手叉腰晒了会儿日光浴，时间一点点过去，身上差不多干了。看着大好风光，我拿起手机，想要拍下这令人心情舒适的景色，却不小心点开了肯德基APP，发现今天是疯狂星期四，谁请我吃？',
  },
  {
    lang: Lang.cn,
    content:
      '我本是显赫世家的少爷，却被诡计多端的奸人所害！家人弃我！师门逐我！甚至断我灵脉！重来一生，今天肯德基疯狂星期四！谁请我吃？',
  },
  {
    lang: Lang.cn,
    content:
      '我本是上市公司的老总，却被诡计多端的奸人所害！下属弃我！股东逐我！甚至清空我的股份！重来一生，我只想夺回我的公司！今天肯德基疯狂星期四，谁请我吃？',
  },
  {
    lang: Lang.cn,
    content:
      '后来不是报警了吗 那个男的隔了一个星期才找到 把他的父母和我朋友的父母喊到警察局里商量这件事到底怎么办 要不就结婚把这个孩子生下来 要么就打掉并赔偿我朋友30w 男方不想要这个孩子但是父母手头也没有这多钱 硬着头皮跟我朋友结婚了 彩礼才拿了八万 结婚后男的经常不归家在外面玩 我朋友挺着大肚子在家真的不容易 然后我实在看不下去了 就去照顾我朋友 我准备拿起手机给他打电话 又不小心点开肯德基 才想起来今天是肯德基Fucking Crazy Thursday 疯狂星期四 谁请我吃我继续说',
  },
  {
    lang: Lang.cn,
    content:
      '我本是夜上海的一名贫穷又自强的黄包车夫，看遍了这个城市的繁华和热闹，也体验了这个社会的冷漠与无情。直到那一天，我的车上坐上了一位穿着四季歌的千金小姐，我感到了我平静已久的内心再一次颤动，我知道不应该，但我却还是爱上了。我知道我的身份地位配不上她，只求有个好心人给我39.9，让我买一个疯狂星期四热辣鸡桶，带给她舔狗的关怀。',
  },
  {
    lang: Lang.cn,
    content:
      '我想问一下大家，之前朋友找我借钱，前后加起来有大概七万（够立案）但是没有借条也没有字据，微信也早已互删没有任何关于借的字眼，只有支付宝上还有转账记录，派出所刚让我把转账记录发给他看一下的时候，我点支付宝点歪了，不小心点开了肯德基，发现今天是疯狂星期四，谁请我吃？',
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
