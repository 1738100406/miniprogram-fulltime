// miniprogram/pages/clock/FS_clock.js
var tiemr
Page({
  data: {
    color:"#000",
    background:"#fff",
    minute:"00",
    second:"00",
    minsecond:"00"
  },
  upadatetime(){
    var currentTime=new Date()
    this.setData({
      hour:('0'+currentTime.getHours()).slice(-2),
      minute:('0'+currentTime.getMinutes()).slice(-2),
      second:('0'+currentTime.getSeconds()).slice(-2),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      color:options.color,
      background:options.background
    })
    var text_color=options.background=='#ffffff'?"#000000":"#ffffff"
   wx.setNavigationBarColor({
     backgroundColor: options.background,
     frontColor: text_color,
   })
   wx.setNavigationBarTitle({
     title: '当前时间',
   })
   wx.setKeepScreenOn({
     keepScreenOn: true,
   })
  this.upadatetime()
  const that=this
  tiemr= setInterval(function(){
    that.upadatetime()
  },1000)
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