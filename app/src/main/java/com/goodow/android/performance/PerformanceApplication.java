package com.goodow.android.performance;

import android.app.Application;

import com.goodow.android.performance.metrics.PerformanceContentProvider;
import com.goodow.android.performance.weex.ImageAdapter;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;

/**
 * Created by larry on 2017/12/15.
 */

public class PerformanceApplication extends Application {
  public PerformanceApplication() {
    super();
    PerformanceContentProvider.init(this);
  }

  @Override
  public void onCreate() {
    super.onCreate();

    InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
    WXSDKEngine.initialize(this, config);
  }
}
