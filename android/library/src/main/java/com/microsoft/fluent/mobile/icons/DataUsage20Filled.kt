package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataUsage20: ImageVector
  get() {
    if (_dataUsage20 != null) {
      return _dataUsage20!!
    }
    _dataUsage20 = fluentIcon(name = "Filled.DataUsage20", 20f) {
      materialPath {
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(5.0F, 7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()
          moveTo(6.0F, 8.5F)
          curveTo(6.0F, 8.224F, 6.224F, 8.0F, 6.5F, 8.0F)
          reflectiveCurveTo(7.0F, 8.224F, 7.0F, 8.5F)
          verticalLineToRelative(5.0F)
          curveTo(7.0F, 13.776F, 6.776F, 14.0F, 6.5F, 14.0F)
          reflectiveCurveTo(6.0F, 13.776F, 6.0F, 13.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(13.5F, 6.0F)
          curveTo(13.776F, 6.0F, 14.0F, 6.224F, 14.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 13.776F, 13.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          curveTo(13.0F, 6.224F, 13.224F, 6.0F, 13.5F, 6.0F)
          close()        
      }
    }
    return _dataUsage20!!
  }

private var _dataUsage20: ImageVector? = null
