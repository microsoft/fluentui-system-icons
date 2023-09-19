package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReset20: ImageVector
  get() {
    if (_arrowReset20 != null) {
      return _arrowReset20!!
    }
    _arrowReset20 = fluentIcon(name = "Filled.ArrowReset20", 20f) {
      materialPath {
          moveTo(6.03F, 2.47F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(4.81F, 4.75F)
          horizontalLineTo(11.0F)
          curveToRelative(3.452F, 0.0F, 6.25F, 2.798F, 6.25F, 6.25F)
          reflectiveCurveToRelative(-2.798F, 6.25F, -6.25F, 6.25F)
          reflectiveCurveTo(4.75F, 14.452F, 4.75F, 11.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(6.25F, 10.586F, 6.25F, 11.0F)
          curveToRelative(0.0F, 2.623F, 2.127F, 4.75F, 4.75F, 4.75F)
          reflectiveCurveToRelative(4.75F, -2.127F, 4.75F, -4.75F)
          reflectiveCurveTo(13.623F, 6.25F, 11.0F, 6.25F)
          horizontalLineTo(4.81F)
          lineToRelative(1.22F, 1.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _arrowReset20!!
  }

private var _arrowReset20: ImageVector? = null
