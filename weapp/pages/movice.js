"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_core["default"].page({
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {// Page 级别 hook, 只对当前 Page 的 setData 生效。
  },
  mixins: [],
  data: {
    movieList: []
  },
  computed: {},
  methods: {
    //查看详情
    handleTapItem: function handleTapItem(item) {
      console.log(item);
      wx.navigateTo({
        url: "./movicedetail?movieid=".concat(item.id)
      });
    },
    getMovieList: function getMovieList() {
      var _this = this;

      wx.showLoading({
        title: '加载中'
      });
      wx.cloud.callFunction({
        name: "movielist",
        data: {
          start: this.movieList.length,
          count: 10
        }
      }).then(function (res) {
        var _this$movieList;

        var jsonData = JSON.parse(res.result);
        console.log(jsonData);

        (_this$movieList = _this.movieList).push.apply(_this$movieList, _toConsumableArray(jsonData.subjects));

        wx.hideLoading();
      })["catch"](function (err) {
        wx.hideLoading();
      });
    }
  },
  //滚动到底部加载更多
  onReachBottom: function onReachBottom() {
    this.getMovieList();
  },
  created: function created() {
    wx.cloud.init();
    this.getMovieList();
  }
}, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleTapItem(item)
      })();
    
  }}}, models: {} });