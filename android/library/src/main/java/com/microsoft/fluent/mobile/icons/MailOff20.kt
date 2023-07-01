package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailOff20: ImageVector
  get() {
    if (_mailOff20 != null) {
      return _mailOff20!!
    }
    _mailOff20 = fluentIcon(name = "Filled.MailOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(1.355F, 1.354F)
          curveToRelative(-0.803F, 0.35F, -1.386F, 1.11F, -1.486F, 2.015F)
          lineTo(10.0F, 10.92F)
          lineToRelative(0.134F, -0.079F)
          lineToRelative(0.73F, 0.73F)
          lineToRelative(-0.61F, 0.36F)
          curveToRelative(-0.157F, 0.092F, -0.351F, 0.092F, -0.507F, 0.0F)
          lineTo(2.0F, 7.373F)
          verticalLineTo(14.5F)
          curveTo(2.0F, 15.88F, 3.12F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.241F, 0.0F, 0.474F, -0.034F, 0.695F, -0.098F)
          lineToRelative(0.951F, 0.952F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(9.792F, 8.377F)
          lineToRelative(5.093F, 5.092F)
          curveTo(17.906F, 15.28F, 18.0F, 14.901F, 18.0F, 14.5F)
          verticalLineTo(7.373F)
          lineToRelative(-5.355F, 3.15F)
          close()
          moveTo(6.121F, 4.0F)
          lineToRelative(5.794F, 5.793F)
          lineToRelative(6.07F, -3.57F)
          curveTo(17.847F, 4.973F, 16.787F, 4.0F, 15.5F, 4.0F)
          horizontalLineTo(6.121F)
          close()        
      }
    }
    return _mailOff20!!
  }

private var _mailOff20: ImageVector? = null
