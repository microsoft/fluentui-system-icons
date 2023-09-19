package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Add20: ImageVector
  get() {
    if (_add20 != null) {
      return _add20!!
    }
    _add20 = fluentIcon(name = "Regular.Add20", 20f) {
      materialPath {
          moveTo(10.0F, 2.5F)
          curveTo(10.0F, 2.224F, 9.776F, 2.0F, 9.5F, 2.0F)
          reflectiveCurveTo(9.0F, 2.224F, 9.0F, 2.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 9.0F, 2.0F, 9.224F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(6.5F)
          curveTo(9.0F, 16.776F, 9.224F, 17.0F, 9.5F, 17.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 9.0F, 16.5F, 9.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _add20!!
  }

private var _add20: ImageVector? = null
