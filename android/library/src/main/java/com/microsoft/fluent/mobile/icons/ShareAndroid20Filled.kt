package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareAndroid20: ImageVector
  get() {
    if (_shareAndroid20 != null) {
      return _shareAndroid20!!
    }
    _shareAndroid20 = fluentIcon(name = "Filled.ShareAndroid20", 20f) {
      materialPath {
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 6.88F, 15.88F, 8.0F, 14.5F, 8.0F)
          curveToRelative(-0.799F, 0.0F, -1.51F, -0.374F, -1.967F, -0.957F)
          lineTo(7.915F, 9.35F)
          curveTo(7.971F, 9.559F, 8.0F, 9.777F, 8.0F, 10.0F)
          curveToRelative(0.0F, 0.224F, -0.03F, 0.442F, -0.085F, 0.649F)
          lineToRelative(4.618F, 2.308F)
          curveTo(12.99F, 12.374F, 13.7F, 12.0F, 14.5F, 12.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveTo(15.88F, 17.0F, 14.5F, 17.0F)
          reflectiveCurveTo(12.0F, 15.88F, 12.0F, 14.5F)
          curveToRelative(0.0F, -0.224F, 0.03F, -0.442F, 0.085F, -0.649F)
          lineToRelative(-4.618F, -2.308F)
          curveTo(7.01F, 12.126F, 6.3F, 12.5F, 5.5F, 12.5F)
          curveTo(4.12F, 12.5F, 3.0F, 11.38F, 3.0F, 10.0F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          curveToRelative(0.799F, 0.0F, 1.51F, 0.374F, 1.967F, 0.957F)
          lineToRelative(4.618F, -2.308F)
          curveTo(12.029F, 5.942F, 12.0F, 5.724F, 12.0F, 5.5F)
          curveTo(12.0F, 4.12F, 13.12F, 3.0F, 14.5F, 3.0F)
          reflectiveCurveTo(17.0F, 4.12F, 17.0F, 5.5F)
          close()        
      }
    }
    return _shareAndroid20!!
  }

private var _shareAndroid20: ImageVector? = null
