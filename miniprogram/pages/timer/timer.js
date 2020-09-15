// pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    preview_color: "#000",
    preview_background: "#fff",
    colors: [
      { id: 1, val: "#fff" },
      { id: 2, val: "#000" },
      { id: 3, val: "#0332FE" },
      { id: 4, val: "#00F700" },
      { id: 5, val: "#FEFE01" },
      { id: 6, val: "#FE2500" },
      { id: 7, val: "#922092" }
    ]
  },
  changColor(e) {
    // console.log(e);
    this.setData({
      preview_color: e.target.dataset.val
    })
  },
  changBackground(e) {
    this.setData({
      preview_background: e.target.dataset.val
    })
  },
  goTocolok() {
    var color = this.data.preview_color
    var background = this.data.preview_background
    wx.navigateTo({
      url: './FS_time?color=' + color + "&background=" + background,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    return {
      title: "全屏倒计时",
      imageUrl: "../../images/share.png"
    }
  }
})