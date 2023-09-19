package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleEdit20: ImageVector
  get() {
    if (_circleEdit20 != null) {
      return _circleEdit20!!
    }
    _circleEdit20 = fluentIcon(name = "Regular.CircleEdit20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 3.606F, 2.727F, 6.575F, 6.23F, 6.958F)
          lineToRelative(-0.173F, 0.695F)
          curveToRelative(-0.024F, 0.096F, -0.04F, 0.192F, -0.05F, 0.286F)
          curveTo(5.058F, 17.45F, 2.0F, 14.082F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          curveToRelative(4.12F, 0.0F, 7.514F, 3.115F, 7.952F, 7.12F)
          curveToRelative(-0.332F, -0.1F, -0.679F, -0.137F, -1.022F, -0.113F)
          curveTo(16.448F, 5.611F, 13.53F, 3.0F, 10.0F, 3.0F)
          close()
          moveToRelative(0.98F, 12.377F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 1.914F, -0.73F, 2.644F, 0.0F)
          curveToRelative(0.73F, 0.731F, 0.73F, 1.915F, 0.0F, 2.646F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.281F, 0.282F, -0.634F, 0.481F, -1.02F, 0.578F)
          lineToRelative(-1.498F, 0.374F)
          curveToRelative(-0.651F, 0.163F, -1.242F, -0.427F, -1.079F, -1.078F)
          lineToRelative(0.375F, -1.498F)
          curveToRelative(0.096F, -0.386F, 0.296F, -0.74F, 0.578F, -1.02F)
          close()        
      }
    }
    return _circleEdit20!!
  }

private var _circleEdit20: ImageVector? = null
