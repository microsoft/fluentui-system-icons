package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DesktopMac32: ImageVector
  get() {
    if (_desktopMac32 != null) {
      return _desktopMac32!!
    }
    _desktopMac32 = fluentIcon(name = "Regular.DesktopMac32", 32f) {
      materialPath {
          moveTo(4.0F, 8.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(14.17F, 18.0F)
          curveTo(18.06F, 25.687F, 18.0F, 25.35F, 18.0F, 25.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.35F, -0.06F, 0.687F, -0.17F, 1.0F)
          horizontalLineToRelative(4.34F)
          close()
          moveTo(24.0F, 22.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(16.0F)
          close()
          moveToRelative(2.0F, -14.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.0F)
          curveTo(6.895F, 6.0F, 6.0F, 6.895F, 6.0F, 8.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(20.0F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _desktopMac32!!
  }

private var _desktopMac32: ImageVector? = null
