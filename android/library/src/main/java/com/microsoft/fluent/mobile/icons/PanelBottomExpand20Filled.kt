package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelBottomExpand20: ImageVector
  get() {
    if (_panelBottomExpand20 != null) {
      return _panelBottomExpand20!!
    }
    _panelBottomExpand20 = fluentIcon(name = "Filled.PanelBottomExpand20", 20f) {
      materialPath {
          moveTo(10.5F, 8.826F)
          lineToRelative(0.874F, 0.998F)
          curveToRelative(0.182F, 0.208F, 0.497F, 0.23F, 0.705F, 0.047F)
          curveToRelative(0.208F, -0.181F, 0.23F, -0.497F, 0.047F, -0.705F)
          lineToRelative(-1.75F, -2.0F)
          curveToRelative(-0.095F, -0.109F, -0.232F, -0.17F, -0.376F, -0.17F)
          reflectiveCurveToRelative(-0.281F, 0.061F, -0.376F, 0.17F)
          lineToRelative(-1.75F, 2.0F)
          curveTo(7.692F, 9.374F, 7.713F, 9.69F, 7.92F, 9.87F)
          curveToRelative(0.208F, 0.182F, 0.523F, 0.161F, 0.705F, -0.047F)
          lineTo(9.5F, 8.826F)
          verticalLineToRelative(3.679F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.68F)
          close()
          moveTo(4.0F, 4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(1.505F)
          curveToRelative(0.0F, 0.828F, -0.671F, 1.5F, -1.5F, 1.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _panelBottomExpand20!!
  }

private var _panelBottomExpand20: ImageVector? = null
