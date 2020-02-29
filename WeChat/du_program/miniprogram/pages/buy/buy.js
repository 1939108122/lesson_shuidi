const app = getApp();
Page({
  data:{
    active:0, 
    slides:[],
    Newthings:[],
    Newthings2:[]
  
  },
  onLoad() {
    const slides = app.globalData.slides,
       Newthings = app.globalData.Newthings,
       Newthings2= app.globalData.Newthings2;
    this.setData({
      slides,
      Newthings,
      Newthings2,
    })
  },
})
