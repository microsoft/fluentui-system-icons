package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatEmpty24: ImageVector
  get() {
    if (_chatEmpty24 != null) {
      return _chatEmpty24!!
    }
    _chatEmpty24 = fluentIcon(name = "Regular.ChatEmpty24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          curveToRelative(-1.618F, 0.0F, -3.182F, -0.385F, -4.587F, -1.112F)
          lineToRelative(-3.826F, 1.067F)
          curveToRelative(-0.665F, 0.186F, -1.354F, -0.202F, -1.54F, -0.867F)
          curveToRelative(-0.062F, -0.22F, -0.062F, -0.453F, 0.0F, -0.673F)
          lineToRelative(1.068F, -3.823F)
          curveTo(2.386F, 15.186F, 2.0F, 13.62F, 2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          curveToRelative(0.0F, 1.47F, 0.373F, 2.883F, 1.073F, 4.137F)
          lineToRelative(0.15F, 0.27F)
          lineToRelative(-1.112F, 3.984F)
          lineToRelative(3.986F, -1.112F)
          lineToRelative(0.27F, 0.15F)
          curveTo(9.12F, 20.13F, 10.532F, 20.5F, 12.0F, 20.5F)
          curveToRelative(4.694F, 0.0F, 8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveTo(16.694F, 3.5F, 12.0F, 3.5F)
          close()        
      }
    }
    return _chatEmpty24!!
  }

private var _chatEmpty24: ImageVector? = null
