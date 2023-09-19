package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DesktopMac16: ImageVector
  get() {
    if (_desktopMac16 != null) {
      return _desktopMac16!!
    }
    _desktopMac16 = fluentIcon(name = "Filled.DesktopMac16", 16f) {
      materialPath {
          moveTo(2.01F, 3.796F)
          curveTo(2.004F, 3.863F, 2.0F, 3.93F, 2.0F, 4.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(0.5F)
          curveTo(6.0F, 12.776F, 5.776F, 13.0F, 5.5F, 13.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(4.724F, 14.0F, 5.0F, 14.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.276F, 13.0F, 11.0F, 13.0F)
          horizontalLineToRelative(-0.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          curveTo(2.965F, 2.0F, 2.113F, 2.787F, 2.01F, 3.796F)
          close()
          moveTo(9.0F, 12.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.175F, 0.03F, 0.344F, 0.085F, 0.5F)
          horizontalLineToRelative(-2.17F)
          curveTo(6.97F, 12.844F, 7.0F, 12.675F, 7.0F, 12.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(2.0F)
          close()
          moveToRelative(3.0F, -1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          close()        
      }
    }
    return _desktopMac16!!
  }

private var _desktopMac16: ImageVector? = null
