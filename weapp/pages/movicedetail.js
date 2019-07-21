"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {// Page 级别 hook, 只对当前 Page 的 setData 生效。
  },
  mixins: [],
  data: {
    movieid: "",
    moviedetail: {}
  },
  computed: {},
  methods: {
    getMovieDetail: function getMovieDetail(movieid) {
      var _this = this;

      wx.showLoading({
        title: '加载中'
      });
      wx.cloud.callFunction({
        name: "moviedetail",
        data: {
          movieid: movieid
        }
      }).then(function (res) {
        var jsonData = JSON.parse(res.result);
        console.log(jsonData);
        _this.moviedetail = jsonData;
        wx.setNavigationBarTitle({
          title: jsonData.title
        });
        wx.hideLoading();
      })["catch"](function (err) {
        console.log(err);
        wx.hideLoading();
      });
    }
  },
  onLoad: function onLoad(options) {
    console.log(options);
    this.movieid = options.movieid;
    this.moviedetail = null;
  },
  onReady: function onReady() {
    this.getMovieDetail(this.movieid);
  },
  created: function created() {
    wx.cloud.init();
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });