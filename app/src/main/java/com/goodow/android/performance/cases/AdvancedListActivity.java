package com.goodow.android.performance.cases;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

import com.goodow.android.performance.R;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

public class AdvancedListActivity extends AppCompatActivity implements IWXRenderListener {
  WXSDKInstance mWXSDKInstance;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
//    setContentView(R.layout.activity_advanced_list);

    mWXSDKInstance = new WXSDKInstance(this);
    mWXSDKInstance.registerRenderListener(this);
    /**
     * WXSample 可以替换成自定义的字符串，针对埋点有效。
     * template 是.we transform 后的 js文件。
     * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
     * jsonInitData 可以为空。
     */
    mWXSDKInstance.render("图文列表", WXFileUtils.loadAsset("list-demo.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);

  }

  @Override
  public void onViewCreated(WXSDKInstance instance, View view) {
    setContentView(view);
  }

  @Override
  public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
  }

  @Override
  public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
  }

  @Override
  public void onException(WXSDKInstance instance, String errCode, String msg) {
  }

  @Override
  protected void onResume() {
    super.onResume();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityResume();
    }
  }

  @Override
  protected void onPause() {
    super.onPause();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityPause();
    }
  }

  @Override
  protected void onStop() {
    super.onStop();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityStop();
    }
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityDestroy();
    }
  }
}
