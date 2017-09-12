import timeago from '../libs/timeago'
// import Print from '../fn/print'

export default {
  format(timeStr) {
    const date = new Date()
    const gmtTimes = date.getTimezoneOffset() * 60 * 1000
    const utcTime = new Date(timeStr.replace(/-/g, '/'))

    return timeago().format(utcTime.getTime() - gmtTimes)
  },
}