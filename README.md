# android-performance

![React-Native VS VideoNative VS Weex](_gifs/React-Native_VS_VideoNative_VS_Weex.gif)

### Git 分支说明
- [master](https://github.com/goodow/android-performance) 使用 Android Studio 模版新建一个 Android 项目, 增加公共代码, 如指标计算和收集/UI 自动化测试等
- [native](https://github.com/goodow/android-performance/tree/native) 基于 master, 使用原生代码实现各种测试场景
- [react-native](https://github.com/goodow/android-performance/tree/react-native) 基于 master, 将 React Native 集成进来, 并使用 React Native 实现各种测试场景
- [weex](https://github.com/goodow/android-performance/tree/weex) 基于 master, 将 Weex 集成进来, 并使用 Weex 实现各种测试场景
    
### 源码目录结构

- [Android代码根目录](https://github.com/goodow/android-performance/tree/master/app/src/main/java/com/goodow/android/performance) 
使用原生代码实现的首页, 用于列出所有的测试场景
  - [cases](https://github.com/goodow/android-performance/tree/master/app/src/main/java/com/goodow/android/performance/cases) 包含各种测试场景
  - [metrics](https://github.com/goodow/android-performance/tree/master/app/src/main/java/com/goodow/android/performance/metrics) 包含各种指标计算方法

- [UI 自动化测试](https://github.com/goodow/android-performance/tree/master/app/src/androidTest/java/com/goodow/android/performance) 使用 UI Automator 编写自动化测试用例, 实现点击, 滚动和录屏等功能


### 测试方法
- 对比 native/react-native/weex 三个分支打包出来的 apk 安装包大小
- 针对每种测试场景, 编写 UI 测试用例:
  - 使用 Android Studio 的 Profiler 系列工具, 可收集 CPU/内存/网络等使用数据
  - 使用 adb 命令可导出电池使用数据
  - 在运行前打开手机"设置"->"开发者选项"->在"监控"一栏下, 点击"GPU 显示配置文件"->选择"以条的形式显示于屏幕". <br>
  每个用例运行完成后, 使用 iMovie 等视频编辑工具将不同分支录制的视频合成到一个视频中, 方便对比
    - 观察转场时的慢速回放, 可分析出转场的流畅性, 页面初始化耗时和渲染的时机等情况
    - 屏幕上每条柱状信息代表一帧的渲染耗时, 柱子越长代表这一帧的渲染时间越长, 不同颜色代表每一帧渲染各个阶段所占时长. 为确保画面流畅, 系统每秒钟需要渲染60帧(60fps), 即平均每帧渲染时间约为16.7ms. <br>
    视频中的绿色横线即为16ms"警戒线", 超过这个警戒线的柱子数越多, 说明界面卡顿越严重
