module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      unitToConvert: "px",
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [
        // '.van'
      ],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: "vw", // 横屏时使用的单位
      landscapeWidth: 812 // 横屏时使用的视窗宽度
    }
  }
};
