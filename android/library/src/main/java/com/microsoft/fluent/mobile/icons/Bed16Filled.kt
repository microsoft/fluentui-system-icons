package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Bed16: ImageVector
  get() {
    if (_bed16 != null) {
      return _bed16!!
    }
    _bed16 = fluentIcon(name = "Filled.Bed16", 16f) {
      materialPath {
          moveTo(7.5F, 6.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.5F)
          curveTo(8.5F, 5.224F, 8.724F, 5.0F, 9.0F, 5.0F)
          horizontalLineToRelative(1.5F)
          curveTo(10.776F, 5.0F, 11.0F, 5.224F, 11.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 2.0F, 3.0F, 2.895F, 3.0F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(5.5F)
          curveTo(5.0F, 5.224F, 5.224F, 5.0F, 5.5F, 5.0F)
          horizontalLineTo(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(-4.0F, 1.0F)
          curveTo(2.12F, 7.0F, 1.0F, 8.12F, 1.0F, 9.5F)
          verticalLineToRelative(4.0F)
          curveTo(1.0F, 13.776F, 1.224F, 14.0F, 1.5F, 14.0F)
          reflectiveCurveTo(2.0F, 13.776F, 2.0F, 13.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-4.0F)
          curveTo(15.0F, 8.12F, 13.88F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _bed16!!
  }

private var _bed16: ImageVector? = null
