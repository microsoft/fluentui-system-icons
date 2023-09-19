package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowForward28: ImageVector
  get() {
    if (_arrowForward28 != null) {
      return _arrowForward28!!
    }
    _arrowForward28 = fluentIcon(name = "Filled.ArrowForward28", 28f) {
      materialPath {
          moveTo(17.543F, 6.957F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineToRelative(5.75F, 5.75F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-5.75F, 5.75F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(21.586F, 13.0F)
          horizontalLineTo(13.75F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -6.075F, 4.925F, -11.0F, 11.0F, -11.0F)
          horizontalLineToRelative(7.836F)
          lineToRelative(-4.043F, -4.043F)
          close()        
      }
    }
    return _arrowForward28!!
  }

private var _arrowForward28: ImageVector? = null
