package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenStatusBar20: ImageVector
  get() {
    if (_dualScreenStatusBar20 != null) {
      return _dualScreenStatusBar20!!
    }
    _dualScreenStatusBar20 = fluentIcon(name = "Filled.DualScreenStatusBar20", 20f) {
      materialPath {
          moveTo(16.0F, 16.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveTo(4.0F, 4.0F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(8.5F, 2.0F)
          curveTo(12.224F, 6.0F, 12.0F, 6.224F, 12.0F, 6.5F)
          reflectiveCurveTo(12.224F, 7.0F, 12.5F, 7.0F)
          horizontalLineTo(16.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.276F, 6.0F, 16.0F, 6.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _dualScreenStatusBar20!!
  }

private var _dualScreenStatusBar20: ImageVector? = null
