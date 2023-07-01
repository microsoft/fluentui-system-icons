package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Frame16: ImageVector
  get() {
    if (_frame16 != null) {
      return _frame16!!
    }
    _frame16 = fluentIcon(name = "Filled.Frame16", 16f) {
      materialPath {
          moveTo(3.5F, 1.0F)
          curveTo(3.776F, 1.0F, 4.0F, 1.224F, 4.0F, 1.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(1.5F)
          curveTo(12.0F, 1.224F, 12.224F, 1.0F, 12.5F, 1.0F)
          reflectiveCurveTo(13.0F, 1.224F, 13.0F, 1.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(1.5F)
          curveTo(14.776F, 3.0F, 15.0F, 3.224F, 15.0F, 3.5F)
          reflectiveCurveTo(14.776F, 4.0F, 14.5F, 4.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 13.0F, 14.5F, 13.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(12.0F, 14.776F, 12.0F, 14.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 14.776F, 3.776F, 15.0F, 3.5F, 15.0F)
          reflectiveCurveTo(3.0F, 14.776F, 3.0F, 14.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 13.0F, 1.0F, 12.776F, 1.0F, 12.5F)
          reflectiveCurveTo(1.224F, 12.0F, 1.5F, 12.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 4.0F, 1.0F, 3.776F, 1.0F, 3.5F)
          reflectiveCurveTo(1.224F, 3.0F, 1.5F, 3.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(1.5F)
          curveTo(3.0F, 1.224F, 3.224F, 1.0F, 3.5F, 1.0F)
          close()        
      }
    }
    return _frame16!!
  }

private var _frame16: ImageVector? = null
