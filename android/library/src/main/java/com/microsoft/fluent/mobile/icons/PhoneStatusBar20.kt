package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneStatusBar20: ImageVector
  get() {
    if (_phoneStatusBar20 != null) {
      return _phoneStatusBar20!!
    }
    _phoneStatusBar20 = fluentIcon(name = "Filled.PhoneStatusBar20", 20f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.5F, 0.0F)
          curveTo(7.224F, 4.0F, 7.0F, 4.224F, 7.0F, 4.5F)
          reflectiveCurveTo(7.224F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.776F, 5.0F, 13.0F, 4.776F, 13.0F, 4.5F)
          reflectiveCurveTo(12.776F, 4.0F, 12.5F, 4.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _phoneStatusBar20!!
  }

private var _phoneStatusBar20: ImageVector? = null
