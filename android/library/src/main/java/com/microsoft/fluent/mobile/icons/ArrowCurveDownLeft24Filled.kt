package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCurveDownLeft24: ImageVector
  get() {
    if (_arrowCurveDownLeft24 != null) {
      return _arrowCurveDownLeft24!!
    }
    _arrowCurveDownLeft24 = fluentIcon(name = "Filled.ArrowCurveDownLeft24", 24f) {
      materialPath {
          moveTo(16.868F, 3.254F)
          curveToRelative(0.274F, 0.48F, 0.108F, 1.09F, -0.372F, 1.364F)
          curveToRelative(-1.875F, 1.072F, -2.711F, 2.363F, -3.114F, 3.696F)
          curveToRelative(-0.388F, 1.289F, -0.386F, 2.643F, -0.383F, 4.062F)
          lineTo(13.0F, 12.75F)
          verticalLineToRelative(5.086F)
          lineToRelative(3.293F, -3.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-5.0F, -5.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(11.0F, 17.836F)
          verticalLineTo(12.75F)
          lineToRelative(-0.001F, -0.4F)
          curveToRelative(-0.005F, -1.373F, -0.011F, -3.024F, 0.469F, -4.614F)
          curveToRelative(0.547F, -1.816F, 1.71F, -3.525F, 4.036F, -4.854F)
          curveToRelative(0.48F, -0.274F, 1.09F, -0.107F, 1.364F, 0.372F)
          close()        
      }
    }
    return _arrowCurveDownLeft24!!
  }

private var _arrowCurveDownLeft24: ImageVector? = null
