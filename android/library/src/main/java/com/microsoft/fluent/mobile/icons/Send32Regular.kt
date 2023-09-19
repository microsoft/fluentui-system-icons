package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Send32: ImageVector
  get() {
    if (_send32 != null) {
      return _send32!!
    }
    _send32 = fluentIcon(name = "Regular.Send32", 32f) {
      materialPath {
          moveTo(2.078F, 3.965F)
          curveTo(1.672F, 2.7F, 2.988F, 1.57F, 4.177F, 2.164F)
          lineToRelative(24.994F, 12.495F)
          curveToRelative(1.106F, 0.553F, 1.106F, 2.13F, 0.0F, 2.684F)
          lineTo(4.177F, 29.838F)
          curveToRelative(-1.188F, 0.594F, -2.505F, -0.536F, -2.099F, -1.801F)
          lineTo(5.95F, 16.001F)
          lineTo(2.078F, 3.965F)
          close()
          moveToRelative(5.65F, 13.036F)
          lineTo(4.347F, 27.517F)
          lineToRelative(23.037F, -11.516F)
          lineTo(4.346F, 4.485F)
          lineTo(7.73F, 15.0F)
          horizontalLineTo(19.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.73F)
          close()        
      }
    }
    return _send32!!
  }

private var _send32: ImageVector? = null
