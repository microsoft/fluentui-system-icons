package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideText16: ImageVector
  get() {
    if (_slideText16 != null) {
      return _slideText16!!
    }
    _slideText16 = fluentIcon(name = "Filled.SlideText16", 16f) {
      materialPath {
          moveTo(1.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(3.5F, 0.0F)
          curveTo(4.224F, 5.0F, 4.0F, 5.224F, 4.0F, 5.5F)
          reflectiveCurveTo(4.224F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(3.0F)
          curveTo(7.776F, 6.0F, 8.0F, 5.776F, 8.0F, 5.5F)
          reflectiveCurveTo(7.776F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveTo(4.0F, 7.5F)
          curveTo(4.0F, 7.776F, 4.224F, 8.0F, 4.5F, 8.0F)
          horizontalLineToRelative(6.0F)
          curveTo(10.776F, 8.0F, 11.0F, 7.776F, 11.0F, 7.5F)
          reflectiveCurveTo(10.776F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(4.224F, 7.0F, 4.0F, 7.224F, 4.0F, 7.5F)
          close()
          moveTo(4.5F, 9.0F)
          curveTo(4.224F, 9.0F, 4.0F, 9.224F, 4.0F, 9.5F)
          reflectiveCurveTo(4.224F, 10.0F, 4.5F, 10.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.776F, 10.0F, 9.0F, 9.776F, 9.0F, 9.5F)
          reflectiveCurveTo(8.776F, 9.0F, 8.5F, 9.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _slideText16!!
  }

private var _slideText16: ImageVector? = null
