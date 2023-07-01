package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Timer12: ImageVector
  get() {
    if (_timer12 != null) {
      return _timer12!!
    }
    _timer12 = fluentIcon(name = "Regular.Timer12", 12f) {
      materialPath {
          moveTo(3.0F, 0.5F)
          curveTo(3.0F, 0.224F, 3.224F, 0.0F, 3.5F, 0.0F)
          horizontalLineToRelative(4.0F)
          curveTo(7.776F, 0.0F, 8.0F, 0.224F, 8.0F, 0.5F)
          reflectiveCurveTo(7.776F, 1.0F, 7.5F, 1.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(3.224F, 1.0F, 3.0F, 0.776F, 3.0F, 0.5F)
          close()
          moveToRelative(2.0F, 7.0F)
          curveTo(5.0F, 7.776F, 5.224F, 8.0F, 5.5F, 8.0F)
          reflectiveCurveTo(6.0F, 7.776F, 6.0F, 7.5F)
          verticalLineToRelative(-3.0F)
          curveTo(6.0F, 4.224F, 5.776F, 4.0F, 5.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.224F, 5.0F, 4.5F)
          verticalLineToRelative(3.0F)
          close()
          moveTo(5.5F, 2.0F)
          curveTo(3.015F, 2.0F, 1.0F, 4.015F, 1.0F, 6.5F)
          reflectiveCurveTo(3.015F, 11.0F, 5.5F, 11.0F)
          reflectiveCurveTo(10.0F, 8.985F, 10.0F, 6.5F)
          reflectiveCurveTo(7.985F, 2.0F, 5.5F, 2.0F)
          close()
          moveTo(2.0F, 6.5F)
          curveTo(2.0F, 4.567F, 3.567F, 3.0F, 5.5F, 3.0F)
          reflectiveCurveTo(9.0F, 4.567F, 9.0F, 6.5F)
          reflectiveCurveTo(7.433F, 10.0F, 5.5F, 10.0F)
          reflectiveCurveTo(2.0F, 8.433F, 2.0F, 6.5F)
          close()
          moveToRelative(8.148F, -2.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.197F, 0.194F, -0.513F, -0.001F, -0.708F)
          lineTo(9.852F, 2.147F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveTo(8.95F, 2.344F, 8.951F, 2.66F, 9.146F, 2.856F)
          lineToRelative(1.002F, 0.998F)
          close()        
      }
    }
    return _timer12!!
  }

private var _timer12: ImageVector? = null
