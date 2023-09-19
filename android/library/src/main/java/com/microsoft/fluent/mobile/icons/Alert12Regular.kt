package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Alert12: ImageVector
  get() {
    if (_alert12 != null) {
      return _alert12!!
    }
    _alert12 = fluentIcon(name = "Regular.Alert12", 12f) {
      materialPath {
          moveTo(3.0F, 5.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.078F, -0.018F, 0.154F, -0.053F, 0.224F)
          lineTo(2.31F, 8.0F)
          horizontalLineToRelative(7.382F)
          lineTo(9.053F, 6.724F)
          curveTo(9.018F, 6.654F, 9.0F, 6.578F, 9.0F, 6.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveTo(3.0F, 3.343F, 3.0F, 5.0F)
          close()
          moveToRelative(1.0F, 4.0F)
          horizontalLineTo(1.5F)
          curveTo(1.327F, 9.0F, 1.166F, 8.91F, 1.075F, 8.763F)
          curveToRelative(-0.091F, -0.147F, -0.1F, -0.332F, -0.022F, -0.487F)
          lineTo(2.0F, 6.382F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(1.382F)
          lineToRelative(0.947F, 1.894F)
          curveToRelative(0.078F, 0.155F, 0.07F, 0.34F, -0.022F, 0.487F)
          curveTo(10.835F, 8.91F, 10.673F, 9.0F, 10.5F, 9.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          horizontalLineTo(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _alert12!!
  }

private var _alert12: ImageVector? = null
