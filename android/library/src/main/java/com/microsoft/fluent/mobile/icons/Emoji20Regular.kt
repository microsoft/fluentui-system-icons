package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Emoji20: ImageVector
  get() {
    if (_emoji20 != null) {
      return _emoji20!!
    }
    _emoji20 = fluentIcon(name = "Regular.Emoji20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveToRelative(-2.845F, 9.427F)
          curveToRelative(1.51F, 1.52F, 3.933F, 1.578F, 5.512F, 0.17F)
          lineToRelative(0.178F, -0.17F)
          curveToRelative(0.195F, -0.196F, 0.512F, -0.197F, 0.707F, -0.002F)
          curveToRelative(0.175F, 0.173F, 0.195F, 0.442F, 0.06F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          lineToRelative(-0.023F, 0.022F)
          curveToRelative(-1.963F, 1.95F, -5.136F, 1.94F, -7.087F, -0.023F)
          curveToRelative(-0.194F, -0.196F, -0.193F, -0.512F, 0.003F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.194F, 0.707F, 0.002F)
          close()
          moveTo(12.5F, 7.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _emoji20!!
  }

private var _emoji20: ImageVector? = null
