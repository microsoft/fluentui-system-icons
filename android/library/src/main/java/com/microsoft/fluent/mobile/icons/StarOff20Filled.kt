package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOff20: ImageVector
  get() {
    if (_starOff20 != null) {
      return _starOff20!!
    }
    _starOff20 = fluentIcon(name = "Filled.StarOff20", 20f) {
      materialPath {
          moveTo(2.856F, 2.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(4.093F, 4.092F)
          lineToRelative(-3.384F, 0.492F)
          curveTo(2.037F, 7.557F, 1.71F, 8.565F, 2.303F, 9.143F)
          lineToRelative(3.124F, 3.045F)
          lineToRelative(-0.738F, 4.3F)
          curveToRelative(-0.14F, 0.816F, 0.718F, 1.44F, 1.451F, 1.053F)
          lineToRelative(3.861F, -2.03F)
          lineToRelative(3.86F, 2.03F)
          curveToRelative(0.735F, 0.386F, 1.592F, -0.237F, 1.452F, -1.054F)
          lineToRelative(-0.097F, -0.566F)
          lineToRelative(1.932F, 1.933F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(11.72F, 10.041F)
          lineToRelative(0.054F, 0.319F)
          lineToRelative(-6.875F, -6.875F)
          lineTo(9.105F, 2.9F)
          curveToRelative(0.366F, -0.743F, 1.426F, -0.743F, 1.793F, 0.0F)
          lineToRelative(1.93F, 3.912F)
          lineToRelative(4.317F, 0.627F)
          curveToRelative(0.82F, 0.119F, 1.148F, 1.127F, 0.554F, 1.705F)
          lineToRelative(-3.124F, 3.045F)
          close()        
      }
    }
    return _starOff20!!
  }

private var _starOff20: ImageVector? = null
