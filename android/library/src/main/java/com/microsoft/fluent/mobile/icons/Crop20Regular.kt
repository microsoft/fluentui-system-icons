package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Crop20: ImageVector
  get() {
    if (_crop20 != null) {
      return _crop20!!
    }
    _crop20 = fluentIcon(name = "Regular.Crop20", 20f) {
      materialPath {
          moveTo(6.0F, 2.5F)
          curveTo(6.0F, 2.224F, 5.776F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(5.0F, 2.224F, 5.0F, 2.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 5.0F, 2.0F, 5.224F, 2.0F, 5.5F)
          reflectiveCurveTo(2.224F, 6.0F, 2.5F, 6.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(6.5F)
          curveTo(5.0F, 13.88F, 6.12F, 15.0F, 7.5F, 15.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 14.0F, 17.5F, 14.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(6.672F, 14.0F, 6.0F, 13.328F, 6.0F, 12.5F)
          verticalLineToRelative(-10.0F)
          close()
          moveToRelative(8.0F, 5.0F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(7.5F)
          curveTo(15.0F, 6.12F, 13.88F, 5.0F, 12.5F, 5.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(5.5F)
          curveTo(13.328F, 6.0F, 14.0F, 6.672F, 14.0F, 7.5F)
          close()        
      }
    }
    return _crop20!!
  }

private var _crop20: ImageVector? = null
