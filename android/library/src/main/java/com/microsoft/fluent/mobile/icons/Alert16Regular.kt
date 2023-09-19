package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Alert16: ImageVector
  get() {
    if (_alert16 != null) {
      return _alert16!!
    }
    _alert16 = fluentIcon(name = "Regular.Alert16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(5.515F, 2.0F, 3.5F, 4.015F, 3.5F, 6.5F)
          verticalLineToRelative(2.401F)
          lineToRelative(-0.964F, 2.414F)
          curveToRelative(-0.062F, 0.154F, -0.043F, 0.328F, 0.05F, 0.465F)
          curveTo(2.679F, 11.918F, 2.834F, 12.0F, 3.0F, 12.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.108F, 0.892F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.892F, 2.0F, -2.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.166F, 0.0F, 0.321F, -0.082F, 0.414F, -0.22F)
          curveToRelative(0.093F, -0.137F, 0.112F, -0.311F, 0.05F, -0.465F)
          lineTo(12.5F, 8.9F)
          verticalLineTo(6.5F)
          curveTo(12.5F, 4.015F, 10.485F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(1.0F, 10.0F)
          curveToRelative(0.0F, 0.556F, -0.444F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.444F, -1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          close()
          moveTo(4.5F, 6.5F)
          curveTo(4.5F, 4.567F, 6.067F, 3.0F, 8.0F, 3.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(2.498F)
          curveToRelative(0.0F, 0.063F, 0.012F, 0.126F, 0.036F, 0.185F)
          lineTo(12.262F, 11.0F)
          horizontalLineTo(3.738F)
          lineToRelative(0.726F, -1.817F)
          curveTo(4.488F, 9.124F, 4.5F, 9.061F, 4.5F, 8.998F)
          verticalLineTo(6.5F)
          close()        
      }
    }
    return _alert16!!
  }

private var _alert16: ImageVector? = null
