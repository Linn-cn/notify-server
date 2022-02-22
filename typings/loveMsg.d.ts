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

// 天行天气预报
interface IWeatherResponseProps {
  /**
   * 地区
   */
  area: string
  /**
   * 日期
   */
  date: string
  /**
   * 星期
   */
  week: string
  /**
   * 早晚天气变化
   */
  weather: string
  /**
   * 天气图标
   */
  weatherimg: string
  /**
   * 实时天气
   */
  real: string
  /**
   * 最低温
   */
  lowest: string
  /**
   * 最高温
   */
  highest: string
  /**
   * 风向
   */
  wind: string
  /**
   * 风向360°角度
   */
  winddeg: string
  /**
   * 风速，km/h
   */
  windspeed: string
  /**
   * 风力
   */
  windsc: string
  /**
   * 日出时间
   */
  sunrise: string
  /**
   * 日落时间
   */
  sunset: string
  /**
   * 月升时间
   */
  moonrise: string
  /**
   * 月落时间
   */
  moondown: string
  /**
   * 降雨量
   */
  pcpn: string
  /**
   * 降雨概率
   */
  pop: string
  /**
   * 紫外线强度指数
   */
  uv_index: string
  /**
   * 能见度，单位：公里
   */
  vis: string
  /**
   * 相对湿度
   */
  humidity: string
  /**
   * 生活指数提示
   */
  tips: string
}

/**
 * 模板
 */
// goodMorning
type TextCardTemplateProps = IWeatherResponseProps & {
  lunarInfo: ResLunarDateProps
  oneLove?: OneWordProps | null
  nextHoliday?: any
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
