/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data

  let text = '早安，记得吃早饭😆\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  if (!['星期六', '星期日'].includes(week)) {
    text += `
小tips：今天可是${week}哦，上班别迟到了！！！\n`
  }
  else {
    text += `
既然今天是${week}，就让你再睡会懒觉，下次可不能啦~😝\n`
  }

  // 彩虹屁
  if (caiHongpi) {
    text += `
『彩虹屁』${caiHongpi.content}\n`
  }

  // 土味情话
  //   if (sayLove) {
  //     text += `
  // 『土味情话』${sayLove.content}\n`
  //   }

  // 诗句
  //   if (songLyrics) {
  //     text += `
  // 『${songLyrics.source}』${songLyrics.content}\n`
  //   }
  //
  //   if (oneMagazines) {
  //     text += `
  // 『ONE杂志』${oneMagazines.word}\n`
  //   }
  //
  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }
  //
  //   if (oneWord) {
  //     text += `
  // 『一言』${oneWord.hitokoto}\n`
  //   }

  // 每日英语
  if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
