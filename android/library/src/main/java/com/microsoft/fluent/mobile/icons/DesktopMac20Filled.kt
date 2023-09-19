package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DesktopMac20: ImageVector
  get() {
    if (_desktopMac20 != null) {
      return _desktopMac20!!
    }
    _desktopMac20 = fluentIcon(name = "Filled.DesktopMac20", 20f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 17.0F, 6.0F, 17.224F, 6.0F, 17.5F)
          reflectiveCurveTo(6.224F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 17.0F, 13.5F, 17.0F)
          horizontalLineTo(13.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveTo(3.0F, 13.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(14.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          close()
          moveToRelative(5.732F, 4.0F)
          curveTo(8.902F, 16.706F, 9.0F, 16.364F, 9.0F, 16.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.364F, 0.097F, 0.706F, 0.268F, 1.0F)
          horizontalLineTo(8.732F)
          close()        
      }
    }
    return _desktopMac20!!
  }

private var _desktopMac20: ImageVector? = null
