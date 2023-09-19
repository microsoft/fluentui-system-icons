package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FixedWidth20: ImageVector
  get() {
    if (_fixedWidth20 != null) {
      return _fixedWidth20!!
    }
    _fixedWidth20 = fluentIcon(name = "Filled.FixedWidth20", 20f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(3.776F, 3.0F, 4.0F, 3.224F, 4.0F, 3.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(3.5F)
          curveTo(9.5F, 3.224F, 9.724F, 3.0F, 10.0F, 3.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(16.0F)
          verticalLineTo(3.5F)
          curveTo(16.0F, 3.224F, 16.224F, 3.0F, 16.5F, 3.0F)
          reflectiveCurveTo(17.0F, 3.224F, 17.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(17.0F, 7.776F, 16.776F, 8.0F, 16.5F, 8.0F)
          reflectiveCurveTo(16.0F, 7.776F, 16.0F, 7.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(1.5F)
          curveTo(10.5F, 7.776F, 10.276F, 8.0F, 10.0F, 8.0F)
          reflectiveCurveTo(9.5F, 7.776F, 9.5F, 7.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 7.776F, 3.776F, 8.0F, 3.5F, 8.0F)
          reflectiveCurveTo(3.0F, 7.776F, 3.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveTo(3.0F, 3.224F, 3.224F, 3.0F, 3.5F, 3.0F)
          close()
          moveToRelative(6.0F, 6.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.5F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(1.0F, 8.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-4.5F)
          verticalLineToRelative(8.0F)
          close()        
      }
    }
    return _fixedWidth20!!
  }

private var _fixedWidth20: ImageVector? = null
