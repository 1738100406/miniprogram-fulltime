// miniprogram/pages/clock/FS_clock.js
var tiemr
Page({
  data: {
    color: "#000",
    background: "#fff",
    minsecond: "000",
    minute: "00",
    second: "00",
    paused: false,
    total_minsecond: 0,
    laps: []
  },  //6006 0 =1
  showTotalSecond(total_minsecond) {
    var minute = Math.floor(total_minsecond / (60 * 1000))
    var second = Math.floor((total_minsecond - minute * (60 * 1000)) / 1000)
    var minsecond = total_minsecond - minute * (60 * 1000) - second * 1000

    this.setData({
      minute: ("0" + minute).slice(-2),
      second: ("0" + second).slice(-2),
      minsecond: ("00" + minsecond).slice(-3),
    })
  },
  updateTime(time_lapse_ms) {
    var new_timet = this.data.total_minsecond + time_lapse_ms
    this.showTotalSecond(new_timet)

    this.setData({
      total_minsecond: new_timet
    })
  },
  resertBtn() {
    clearInterval(tiemr)
    tiemr = null
    this.setData({
      laps: [],
      minsecond: "000",
      minute: "00",
      second: "00",
      total_minsecond: 0
    })
  },
  startBtn() {
    var that = this
    let time_lapse = 155
    tiemr = setInterval(function () { that.updateTime(time_lapse) }, time_lapse)
    this.setData({
      paused: true
    })

  },
  recodeBtn() {
    var laps = this.data.minute + ":" + this.data.second + "." + this.data.minsecond
    var list = this.data.laps
    list.push(laps)
    this.setData({
      laps: list
    })
  },
  pauseBtn() {
    clearInterval(tiemr)
    this.setData({
      paused: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      color: options.color,
      background: options.background
    })
    var text_color = options.background == '#ffffff' ? "#000000" : "#ffffff"
    wx.setNavigationBarColor({
      backgroundColor: options.background,
      frontColor: text_color,
    })
    wx.setNavigationBarTitle({
      title: '计时器',
    })
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(tiemr)
    wx.setKeepScreenOn({
      keepScreenOn: false,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})