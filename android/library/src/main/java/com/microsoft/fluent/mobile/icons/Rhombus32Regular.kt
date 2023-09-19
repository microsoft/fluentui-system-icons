package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rhombus32: ImageVector
  get() {
    if (_rhombus32 != null) {
      return _rhombus32!!
    }
    _rhombus32 = fluentIcon(name = "Regular.Rhombus32", 32f) {
      materialPath {
          moveTo(7.506F, 7.043F)
          curveTo(8.0F, 5.809F, 9.195F, 5.0F, 10.524F, 5.0F)
          horizontalLineToRelative(17.153F)
          curveToRelative(2.3F, 0.0F, 3.871F, 2.322F, 3.017F, 4.457F)
          lineToRelative(-6.2F, 15.5F)
          curveTo(24.001F, 26.191F, 22.806F, 27.0F, 21.477F, 27.0F)
          horizontalLineTo(4.323F)
          curveToRelative(-2.299F, 0.0F, -3.871F, -2.322F, -3.017F, -4.457F)
          lineToRelative(6.2F, -15.5F)
          close()
          moveTo(10.524F, 7.0F)
          curveToRelative(-0.512F, 0.0F, -0.971F, 0.311F, -1.161F, 0.786F)
          lineToRelative(-6.2F, 15.5F)
          curveTo(2.834F, 24.106F, 3.439F, 25.0F, 4.323F, 25.0F)
          horizontalLineToRelative(17.154F)
          curveToRelative(0.511F, 0.0F, 0.97F, -0.311F, 1.16F, -0.786F)
          lineToRelative(6.2F, -15.5F)
          curveTo(29.166F, 7.894F, 28.561F, 7.0F, 27.677F, 7.0F)
          horizontalLineTo(10.524F)
          close()        
      }
    }
    return _rhombus32!!
  }

private var _rhombus32: ImageVector? = null
