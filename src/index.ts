import dotenv from 'dotenv'
import schedule from 'node-schedule'
import LoveMsg from './libs/LoveMsg'
dotenv.config()

// 定时任务
const scheduleTask = () => {
  const { TASK_TIME = '0 30 7 * * ?' } = process.env
  console.log(`启动定时任务：${TASK_TIME}`)
  schedule.scheduleJob(TASK_TIME, async() => {
    // 早安、午安、晚安 => 由环境变量控制
    LoveMsg()
  })
}

scheduleTask()
