package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DesktopMac32: ImageVector
  get() {
    if (_desktopMac32 != null) {
      return _desktopMac32!!
    }
    _desktopMac32 = fluentIcon(name = "Filled.DesktopMac32", 32f) {
      materialPath {
          moveTo(4.02F, 7.591F)
          curveTo(4.008F, 7.726F, 4.0F, 7.861F, 4.0F, 8.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(8.0F)
          curveTo(5.929F, 4.0F, 4.226F, 5.574F, 4.02F, 7.591F)
          close()
          moveTo(18.0F, 24.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.35F, 0.06F, 0.687F, 0.17F, 1.0F)
          horizontalLineToRelative(-4.34F)
          curveToRelative(0.11F, -0.313F, 0.17F, -0.65F, 0.17F, -1.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(6.0F, -2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          horizontalLineToRelative(20.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()        
      }
    }
    return _desktopMac32!!
  }

private var _desktopMac32: ImageVector? = null
