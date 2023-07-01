package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleEdit20: ImageVector
  get() {
    if (_circleEdit20 != null) {
      return _circleEdit20!!
    }
    _circleEdit20 = fluentIcon(name = "Filled.CircleEdit20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          curveToRelative(0.0F, 4.082F, 3.058F, 7.45F, 7.008F, 7.94F)
          curveToRelative(0.009F, -0.095F, 0.025F, -0.19F, 0.05F, -0.287F)
          lineToRelative(0.374F, -1.498F)
          curveToRelative(0.14F, -0.562F, 0.43F, -1.075F, 0.84F, -1.485F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.771F, -0.77F, 1.873F, -1.011F, 2.85F, -0.72F)
          curveTo(17.514F, 5.114F, 14.121F, 2.0F, 10.0F, 2.0F)
          close()
          moveToRelative(0.98F, 13.377F)
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
