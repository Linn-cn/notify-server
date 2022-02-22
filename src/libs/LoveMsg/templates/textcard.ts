/**
 * @description 文本卡片模板 title + description
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

/**
 * 卡片类型模板定义
 * 模板内容配置
 * 微信通知 textcard类型的description内容限制512个字节
 */

import dayjs from '../../../utils/dayjs'

// 相识的日子
const start_stamp = '2022-01-24'

// const highlightText = (text: string) => {
//   return `<div class='highlight'>${text}</div>`
// }

export const textCardTemplate = (data: TextCardTemplateProps) => {
  const {
    pcpn,
    pop,
    sunrise,
    sunset,
    real,
    lowest,
    highest,
    windspeed,
    weather,
    windsc,
    wind,
    week,
    area,
    date,
    lunarInfo,
    oneLove,
    nextHoliday,
  } = data

  // 今日、恋爱天数
  const today = `${date.replace('-', '年').replace('-', '月')}日`
  const dateLength = dayjs(date).diff(start_stamp, 'day')

  // 公历节日、农历节日和二十四节气
  const { festival, lunar_festival, jieqi, lubarmonth, lunarday } = lunarInfo
  const festival_info = festival ? `| ${festival}` : ''
  const lunar_festival_info = lunar_festival ? `| ${lunar_festival}` : ''
  const jieqi_info = jieqi ? `| ${jieqi}` : ''

  // 拼接内容
  let description = `${area} | ${today} | ${week} ${festival_info}
农历 | ${lubarmonth}${lunarday} ${lunar_festival_info} ${jieqi_info} | 距离 ${nextHoliday.name} 还有 ${nextHoliday.rest} 天

天气：${weather}
温度：${real}，范围：${lowest} ~ ${highest}
日出-日落：${sunrise} - ${sunset}
降雨概率：${pop}%，降雨量：${pcpn}mm
风向：${wind}，等级：${windsc}，风速：${windspeed}km/h\n`

  // 最高温度
  if (+highest.replace('℃', '') <= 5) {
    description += `
哈喽，这里是专属你的爱心提醒：
- 今日最高温度仅为${highest}，🥶可冷可冷了！
- 要注意保暖哦~\n`
  }

  if (oneLove) {
    description += `
『${oneLove}』`
  }

  // 内容末尾，自定义
  description += `
『点开有惊喜』❤️ 🧡 💛 💚 💖`

  // const title = `这是我们相识的第 ${dateLength} 天🧡`
  const title = `这是我们相识的第 xx 天🧡`

  return {
    msgtype: 'textcard',
    textcard: {
      title,
      description,
      url: 'https://api.vvhan.com/api/moyu', // 摸鱼日历
      btntxt: 'By林',
    },
  }
}
