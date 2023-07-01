package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelRightExpand20: ImageVector
  get() {
    if (_panelRightExpand20 != null) {
      return _panelRightExpand20!!
    }
    _panelRightExpand20 = fluentIcon(name = "Regular.PanelRightExpand20", 20f) {
      materialPath {
          moveTo(6.821F, 10.5F)
          lineToRelative(0.998F, 0.874F)
          curveToRelative(0.208F, 0.182F, 0.23F, 0.497F, 0.048F, 0.705F)
          curveToRelative(-0.182F, 0.208F, -0.498F, 0.23F, -0.706F, 0.047F)
          lineToRelative(-2.0F, -1.75F)
          curveToRelative(-0.108F, -0.095F, -0.17F, -0.232F, -0.17F, -0.376F)
          reflectiveCurveToRelative(0.062F, -0.281F, 0.17F, -0.376F)
          lineToRelative(2.0F, -1.75F)
          curveTo(7.369F, 7.692F, 7.685F, 7.713F, 7.867F, 7.92F)
          curveToRelative(0.181F, 0.208F, 0.16F, 0.523F, -0.048F, 0.705F)
          lineTo(6.821F, 9.5F)
          horizontalLineTo(10.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(6.821F)
          close()
          moveTo(18.0F, 14.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          close()
          moveToRelative(-2.0F, 1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(-4.0F, 0.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 5.0F, 3.0F, 5.448F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          close()        
      }
    }
    return _panelRightExpand20!!
  }

private var _panelRightExpand20: ImageVector? = null
