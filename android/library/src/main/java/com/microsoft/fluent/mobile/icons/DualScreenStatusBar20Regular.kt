package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DualScreenStatusBar20: ImageVector
  get() {
    if (_dualScreenStatusBar20 != null) {
      return _dualScreenStatusBar20!!
    }
    _dualScreenStatusBar20 = fluentIcon(name = "Regular.DualScreenStatusBar20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(3.448F, 5.0F, 3.0F, 5.448F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(12.0F, 10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(16.0F)
          close()
          moveToRelative(-4.0F, -9.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(11.724F, 7.0F, 12.0F, 7.0F)
          horizontalLineToRelative(3.5F)
          curveTo(15.776F, 7.0F, 16.0F, 6.776F, 16.0F, 6.5F)
          reflectiveCurveTo(15.776F, 6.0F, 15.5F, 6.0F)
          horizontalLineTo(12.0F)
          close()        
      }
    }
    return _dualScreenStatusBar20!!
  }

private var _dualScreenStatusBar20: ImageVector? = null
