// 定义天气返回值类型
interface IWeatherResponseProps {
  cityid: string
  // 时间
  date: string
  // 星期几
  week: string
  update_time: string
  city: string
  cityEn: string
  country: string
  countryEn: string
  wea: string
  wea_img: string
  // 当前温度
  tem: string
  // 最高温度
  tem1: string
  // 最低温度
  tem2: string
  win: string
  win_speed: string
  win_meter: string
  // 湿度
  humidity: string
  visibility: string
  pressure: string
  // 空气质量
  air: string
  // pm
  air_pm25: string
  // 空气质量
  air_level: string
  // 活动建议
  air_tips: string
  alarm: IAlarmProps | null
}

// 预警信息
interface IAlarmProps {
  /** 暴雨 */
  alarm_type: string
  /** 橙色 */
  alarm_level: string
  /** 内容 */
  alarm_content: string
}

interface IVerseProps {
  /** 长安白日照春空，绿杨结烟垂袅风。 */
  content: string
  /** 阳春歌 */
  origin: string
  /** 李白 */
  author: string
  /** 古诗文-天气-太阳 */
  category: string
  /** 天行数据接口 名称 */
  source: string
}

// 每日简报
interface DailyBriefing {
  mtime: string
  title: string
  digest: string
  source: string
  url: string
  imgsrc: string
}

// 今日头条
interface TodayHeadlines {
  ctime: string
  title: string
  description: string
  picUrl: string
  url: string
  source: string
}

// 最美宋词
interface IVerseProps {
  /** 长安白日照春空，绿杨结烟垂袅风。 */
  content: string
  /** 阳春歌 */
  origin: string
  /** 李白 */
  author: string
  /** 古诗文-天气-太阳 */
  category: string
  /** 天行数据接口 名称 */
  source: string
}

// 每日一句好英语
interface ResEnglishProps {
  content: string
  note: string
  imgurl: string
  date: string
}

// 韩寒主编的ONE一个杂志，本接口返回每日一句
interface OneMagazines {
  word: string
  wordfrom: string
  imgurl: string
  note: string
}

// 故事大全
interface StorybookProps {
  title: string
  content: string
}

// 网易云热评
interface NetEaseCloudProps {
  source: string
  content: string
}

// 获取农历信息
interface ResLunarDateProps {
  lunar_festival: string
  festival: string
  lubarmonth: string
  lunarday: string
  jieqi: string
}

// 土味情话
interface SayloveProps {
  content: string
}

// 励志古言
interface InspirationalWordProps {
  saying: string
  transl: string
  source: string
}

// 雷人笑话
interface JokeProps {
  title: string
  content: string
}

// 一言
interface OneWordProps {
  hitokoto: string
  from: string
  from_who: string
  creator: string
}

/**
 * 模板
 */
// goodMorning
type TextCardTemplateProps = IWeatherResponseProps & {
  lunarInfo: ResLunarDateProps
  oneWord?: OneWordProps | null
}

// goodEvening
type TextTemplateProps = {
  sayLove: SayloveProps | null
  caiHongpi: SayloveProps | null
  oneWord: OneWordProps | null
  songLyrics: IVerseProps | null
  oneMagazines: OneMagazines | null
  netEaseCloud: NetEaseCloudProps | null
  dayEnglish: ResEnglishProps | null
}
