package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookDownRight20: ImageVector
  get() {
    if (_arrowHookDownRight20 != null) {
      return _arrowHookDownRight20!!
    }
    _arrowHookDownRight20 = fluentIcon(name = "Filled.ArrowHookDownRight20", 20f) {
      materialPath {
          moveTo(9.0F, 14.0F)
          curveToRelative(0.06F, 0.0F, -0.06F, 0.002F, 0.0F, 0.0F)
          curveToRelative(0.023F, 0.002F, 0.226F, 0.0F, 0.25F, 0.0F)
          horizontalLineToRelative(4.393F)
          lineToRelative(-2.268F, 2.268F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.294F, 0.768F, 0.294F, 1.061F, 0.0F)
          lineToRelative(3.353F, -3.352F)
          curveToRelative(0.174F, -0.174F, 0.245F, -0.413F, 0.212F, -0.639F)
          curveToRelative(-0.019F, -0.162F, -0.09F, -0.32F, -0.215F, -0.444F)
          lineTo(12.54F, 9.646F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.061F)
          lineToRelative(1.79F, 1.793F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveTo(7.067F, 5.5F, 9.0F, 5.5F)
          horizontalLineToRelative(4.25F)
          curveTo(13.664F, 5.5F, 14.0F, 5.164F, 14.0F, 4.75F)
          reflectiveCurveTo(13.664F, 4.0F, 13.25F, 4.0F)
          horizontalLineTo(9.0F)
          curveTo(6.239F, 4.0F, 4.0F, 6.239F, 4.0F, 9.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()        
      }
    }
    return _arrowHookDownRight20!!
  }

private var _arrowHookDownRight20: ImageVector? = null
