package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wallet16: ImageVector
  get() {
    if (_wallet16 != null) {
      return _wallet16!!
    }
    _wallet16 = fluentIcon(name = "Filled.Wallet16", 16f) {
      materialPath {
          moveTo(2.0F, 3.5F)
          curveTo(2.0F, 2.672F, 2.672F, 2.0F, 3.5F, 2.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(0.268F)
          curveTo(13.598F, 4.613F, 14.0F, 5.26F, 14.0F, 6.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveTo(3.0F, 3.776F, 3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          close()
          moveTo(10.5F, 8.0F)
          curveTo(10.224F, 8.0F, 10.0F, 8.224F, 10.0F, 8.5F)
          reflectiveCurveTo(10.224F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(1.0F)
          curveTo(11.776F, 9.0F, 12.0F, 8.776F, 12.0F, 8.5F)
          reflectiveCurveTo(11.776F, 8.0F, 11.5F, 8.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _wallet16!!
  }

private var _wallet16: ImageVector? = null
