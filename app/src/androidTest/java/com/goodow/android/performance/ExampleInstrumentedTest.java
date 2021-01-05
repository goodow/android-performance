package com.goodow.android.performance;

import android.content.Context;
import android.content.Intent;
import android.support.test.InstrumentationRegistry;
import android.support.test.runner.AndroidJUnit4;
import android.support.test.uiautomator.By;
import android.support.test.uiautomator.UiDevice;
import android.support.test.uiautomator.UiObject;
import android.support.test.uiautomator.UiObjectNotFoundException;
import android.support.test.uiautomator.UiScrollable;
import android.support.test.uiautomator.UiSelector;
import android.support.test.uiautomator.Until;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.io.IOException;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.*;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class ExampleInstrumentedTest {
  private static final int LAUNCH_TIMEOUT = 5000;
  private UiDevice mDevice;

  @Before
  public void startMainActivityFromHomeScreen() {
    // Context of the app under test.
    Context appContext = InstrumentationRegistry.getTargetContext();
    String packageName = appContext.getPackageName();

    // Initialize UiDevice instance
    mDevice = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());

    // Start from the home screen
    mDevice.pressHome();

    // Wait for launcher
    final String launcherPackage = mDevice.getLauncherPackageName();
    mDevice.wait(Until.hasObject(By.pkg(launcherPackage).depth(0)), LAUNCH_TIMEOUT);
    // Launch the app
    Context context = InstrumentationRegistry.getContext();
    final Intent intent = context.getPackageManager().getLaunchIntentForPackage(packageName);
    // Clear out any previous instances
    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
    context.startActivity(intent);

    // 启动录屏功能
    new Thread(new Runnable() {
      final UiDevice device = mDevice;
      @Override
      public void run() {
        try {
//          device.executeShellCommand("su");
          String s = device.executeShellCommand("screenrecord --time-limit 30 /sdcard/screen_record.mp4");
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }).start();

    // Wait for the app to appear
    mDevice.wait(Until.hasObject(By.pkg(packageName).depth(0)), LAUNCH_TIMEOUT);
  }

  @Test
  public void testListAdvanced() throws UiObjectNotFoundException {
    mDevice.findObject(new UiSelector().text("List (Advanced)")).click();
    UiScrollable scrollable = new UiScrollable(new UiSelector().scrollable(true));
    scrollable.scrollToEnd(20);
  }

}
