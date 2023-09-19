package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Crop16: ImageVector
  get() {
    if (_crop16 != null) {
      return _crop16!!
    }
    _crop16 = fluentIcon(name = "Regular.Crop16", 16f) {
      materialPath {
          moveTo(5.0F, 1.5F)
          curveTo(5.0F, 1.224F, 4.776F, 1.0F, 4.5F, 1.0F)
          reflectiveCurveTo(4.0F, 1.224F, 4.0F, 1.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 4.0F, 1.0F, 4.224F, 1.0F, 4.5F)
          reflectiveCurveTo(1.224F, 5.0F, 1.5F, 5.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(4.5F)
          curveTo(4.0F, 10.88F, 5.12F, 12.0F, 6.5F, 12.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 11.0F, 14.5F, 11.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(5.672F, 11.0F, 5.0F, 10.328F, 5.0F, 9.5F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(6.0F, 5.0F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(6.5F)
          curveTo(12.0F, 5.12F, 10.88F, 4.0F, 9.5F, 4.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(3.5F)
          curveTo(10.328F, 5.0F, 11.0F, 5.672F, 11.0F, 6.5F)
          close()        
      }
    }
    return _crop16!!
  }

private var _crop16: ImageVector? = null
