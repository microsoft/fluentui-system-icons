package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Timer12: ImageVector
  get() {
    if (_timer12 != null) {
      return _timer12!!
    }
    _timer12 = fluentIcon(name = "Filled.Timer12", 12f) {
      materialPath {
          moveTo(3.5F, 0.0F)
          curveTo(3.224F, 0.0F, 3.0F, 0.224F, 3.0F, 0.5F)
          reflectiveCurveTo(3.224F, 1.0F, 3.5F, 1.0F)
          horizontalLineToRelative(4.0F)
          curveTo(7.776F, 1.0F, 8.0F, 0.776F, 8.0F, 0.5F)
          reflectiveCurveTo(7.776F, 0.0F, 7.5F, 0.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveTo(1.0F, 6.5F)
          curveTo(1.0F, 4.015F, 3.015F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(10.0F, 4.015F, 10.0F, 6.5F)
          reflectiveCurveTo(7.985F, 11.0F, 5.5F, 11.0F)
          reflectiveCurveTo(1.0F, 8.985F, 1.0F, 6.5F)
          close()
          moveToRelative(4.0F, 1.0F)
          curveTo(5.0F, 7.776F, 5.224F, 8.0F, 5.5F, 8.0F)
          reflectiveCurveTo(6.0F, 7.776F, 6.0F, 7.5F)
          verticalLineToRelative(-3.0F)
          curveTo(6.0F, 4.224F, 5.776F, 4.0F, 5.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.224F, 5.0F, 4.5F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(5.854F, -3.647F)
          curveToRelative(-0.195F, 0.196F, -0.511F, 0.196F, -0.707F, 0.001F)
          lineTo(9.145F, 2.856F)
          curveToRelative(-0.195F, -0.195F, -0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.194F, -0.196F, 0.51F, -0.196F, 0.706F, -0.002F)
          lineToRelative(1.002F, 0.999F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.001F, 0.707F)
          close()        
      }
    }
    return _timer12!!
  }

private var _timer12: ImageVector? = null
