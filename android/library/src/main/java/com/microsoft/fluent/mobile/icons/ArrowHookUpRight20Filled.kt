package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookUpRight20: ImageVector
  get() {
    if (_arrowHookUpRight20 != null) {
      return _arrowHookUpRight20!!
    }
    _arrowHookUpRight20 = fluentIcon(name = "Filled.ArrowHookUpRight20", 20f) {
      materialPath {
          moveTo(9.0F, 6.0F)
          curveToRelative(0.06F, 0.0F, -0.06F, -0.002F, 0.0F, 0.0F)
          curveToRelative(0.023F, -0.002F, 0.226F, 0.0F, 0.25F, 0.0F)
          horizontalLineToRelative(4.393F)
          lineToRelative(-2.268F, -2.268F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.294F, 0.768F, -0.294F, 1.061F, 0.0F)
          lineToRelative(3.353F, 3.352F)
          curveToRelative(0.174F, 0.174F, 0.245F, 0.413F, 0.212F, 0.639F)
          curveToRelative(-0.019F, 0.162F, -0.09F, 0.32F, -0.215F, 0.443F)
          lineToRelative(-3.247F, 3.248F)
          curveToRelative(-0.293F, 0.293F, -0.768F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(13.27F, 7.5F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          reflectiveCurveToRelative(1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(13.664F, 16.0F, 13.25F, 16.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()        
      }
    }
    return _arrowHookUpRight20!!
  }

private var _arrowHookUpRight20: ImageVector? = null
