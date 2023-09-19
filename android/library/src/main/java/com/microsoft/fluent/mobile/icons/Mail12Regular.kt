package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mail12: ImageVector
  get() {
    if (_mail12 != null) {
      return _mail12!!
    }
    _mail12 = fluentIcon(name = "Regular.Mail12", 12f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          verticalLineToRelative(3.0F)
          curveTo(2.0F, 8.328F, 2.672F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.328F, 9.0F, 10.0F, 8.328F, 10.0F, 7.5F)
          verticalLineToRelative(-3.0F)
          curveTo(10.0F, 3.672F, 9.328F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 4.224F, 3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(5.0F)
          curveTo(8.776F, 4.0F, 9.0F, 4.224F, 9.0F, 4.5F)
          verticalLineToRelative(0.17F)
          lineTo(6.0F, 5.955F)
          lineTo(3.0F, 4.67F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(0.0F, 1.258F)
          lineToRelative(2.803F, 1.201F)
          curveToRelative(0.126F, 0.054F, 0.268F, 0.054F, 0.394F, 0.0F)
          lineTo(9.0F, 5.758F)
          verticalLineTo(7.5F)
          curveTo(9.0F, 7.776F, 8.776F, 8.0F, 8.5F, 8.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.224F, 8.0F, 3.0F, 7.776F, 3.0F, 7.5F)
          verticalLineTo(5.758F)
          close()        
      }
    }
    return _mail12!!
  }

private var _mail12: ImageVector? = null
