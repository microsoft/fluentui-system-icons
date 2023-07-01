package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftExpand20: ImageVector
  get() {
    if (_panelLeftExpand20 != null) {
      return _panelLeftExpand20!!
    }
    _panelLeftExpand20 = fluentIcon(name = "Filled.PanelLeftExpand20", 20f) {
      materialPath {
          moveTo(13.179F, 10.5F)
          lineToRelative(-0.998F, 0.874F)
          curveToRelative(-0.208F, 0.182F, -0.23F, 0.497F, -0.047F, 0.705F)
          curveToRelative(0.181F, 0.208F, 0.497F, 0.23F, 0.705F, 0.047F)
          lineToRelative(2.0F, -1.75F)
          curveToRelative(0.108F, -0.095F, 0.17F, -0.232F, 0.17F, -0.376F)
          reflectiveCurveToRelative(-0.062F, -0.281F, -0.17F, -0.376F)
          lineToRelative(-2.0F, -1.75F)
          curveToRelative(-0.208F, -0.182F, -0.524F, -0.161F, -0.706F, 0.047F)
          curveToRelative(-0.181F, 0.208F, -0.16F, 0.523F, 0.048F, 0.705F)
          lineTo(13.178F, 9.5F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 9.5F, 9.0F, 9.724F, 9.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.679F)
          close()
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(8.0F)
          close()
          moveToRelative(6.0F, 1.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _panelLeftExpand20!!
  }

private var _panelLeftExpand20: ImageVector? = null
