package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftContract16: ImageVector
  get() {
    if (_panelLeftContract16 != null) {
      return _panelLeftContract16!!
    }
    _panelLeftContract16 = fluentIcon(name = "Filled.PanelLeftContract16", 16f) {
      materialPath {
          moveTo(9.707F, 8.5F)
          lineToRelative(0.647F, 0.647F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(9.707F, 7.5F)
          horizontalLineToRelative(1.791F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-1.79F)
          close()
          moveTo(4.0F, 3.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          verticalLineToRelative(6.002F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(3.0F, 9.002F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(6.002F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _panelLeftContract16!!
  }

private var _panelLeftContract16: ImageVector? = null
