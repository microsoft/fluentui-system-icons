package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelTopExpand20: ImageVector
  get() {
    if (_panelTopExpand20 != null) {
      return _panelTopExpand20!!
    }
    _panelTopExpand20 = fluentIcon(name = "Filled.PanelTopExpand20", 20f) {
      materialPath {
          moveTo(10.5F, 11.174F)
          lineToRelative(0.874F, -0.998F)
          curveToRelative(0.182F, -0.208F, 0.497F, -0.23F, 0.705F, -0.047F)
          curveToRelative(0.208F, 0.181F, 0.23F, 0.497F, 0.047F, 0.705F)
          lineToRelative(-1.75F, 2.0F)
          curveToRelative(-0.095F, 0.109F, -0.232F, 0.17F, -0.376F, 0.17F)
          reflectiveCurveToRelative(-0.281F, -0.061F, -0.376F, -0.17F)
          lineToRelative(-1.75F, -2.0F)
          curveTo(7.692F, 10.626F, 7.713F, 10.31F, 7.92F, 10.13F)
          curveToRelative(0.208F, -0.182F, 0.523F, -0.161F, 0.705F, 0.047F)
          lineTo(9.5F, 11.174F)
          verticalLineTo(7.495F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.68F)
          close()
          moveTo(4.0F, 16.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(-1.0F, -2.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(7.495F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(5.0F)
          close()        
      }
    }
    return _panelTopExpand20!!
  }

private var _panelTopExpand20: ImageVector? = null
