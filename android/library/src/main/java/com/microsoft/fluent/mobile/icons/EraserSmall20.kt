package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EraserSmall20: ImageVector
  get() {
    if (_eraserSmall20 != null) {
      return _eraserSmall20!!
    }
    _eraserSmall20 = fluentIcon(name = "Regular.EraserSmall20", 20f) {
      materialPath {
          moveTo(2.44F, 11.2F)
          curveToRelative(-0.587F, 0.586F, -0.587F, 1.536F, 0.0F, 2.122F)
          lineToRelative(4.242F, 4.242F)
          curveToRelative(0.586F, 0.586F, 1.535F, 0.586F, 2.121F, 0.0F)
          lineToRelative(2.212F, -2.212F)
          curveTo(11.005F, 15.236F, 11.0F, 15.12F, 11.0F, 15.0F)
          curveToRelative(0.0F, -0.434F, 0.07F, -0.852F, 0.197F, -1.244F)
          lineToRelative(-0.704F, 0.704F)
          lineToRelative(-4.95F, -4.95F)
          lineToRelative(6.365F, -6.364F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(4.242F, 4.243F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-3.1F, 3.101F)
          curveTo(14.146F, 11.07F, 14.565F, 11.0F, 15.0F, 11.0F)
          curveToRelative(0.119F, 0.0F, 0.236F, 0.005F, 0.352F, 0.015F)
          lineToRelative(2.212F, -2.212F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.535F, 0.0F, -2.121F)
          lineToRelative(-4.242F, -4.243F)
          curveToRelative(-0.586F, -0.586F, -1.536F, -0.586F, -2.122F, 0.0F)
          lineTo(2.44F, 11.2F)
          close()
          moveToRelative(0.707F, 1.415F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.69F, -1.69F)
          lineToRelative(4.95F, 4.95F)
          lineToRelative(-1.69F, 1.69F)
          curveToRelative(-0.196F, 0.194F, -0.513F, 0.194F, -0.708F, 0.0F)
          lineToRelative(-4.242F, -4.243F)
          close()
          moveTo(15.0F, 18.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()        
      }
    }
    return _eraserSmall20!!
  }

private var _eraserSmall20: ImageVector? = null
