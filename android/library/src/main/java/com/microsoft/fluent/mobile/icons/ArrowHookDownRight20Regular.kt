package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookDownRight20: ImageVector
  get() {
    if (_arrowHookDownRight20 != null) {
      return _arrowHookDownRight20!!
    }
    _arrowHookDownRight20 = fluentIcon(name = "Regular.ArrowHookDownRight20", 20f) {
      materialPath {
          moveTo(4.0F, 9.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          horizontalLineToRelative(4.5F)
          curveTo(13.776F, 4.0F, 14.0F, 4.224F, 14.0F, 4.5F)
          reflectiveCurveTo(13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineTo(9.0F)
          curveTo(6.79F, 5.0F, 5.0F, 6.79F, 5.0F, 9.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(5.293F)
          lineToRelative(-2.7F, -2.7F)
          curveToRelative(-0.194F, -0.194F, -0.194F, -0.511F, 0.0F, -0.706F)
          curveToRelative(0.196F, -0.196F, 0.513F, -0.196F, 0.708F, 0.0F)
          lineToRelative(3.539F, 3.539F)
          curveToRelative(0.134F, 0.134F, 0.176F, 0.326F, 0.125F, 0.497F)
          curveToRelative(-0.02F, 0.09F, -0.064F, 0.176F, -0.135F, 0.247F)
          lineToRelative(-3.533F, 3.533F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(14.293F, 14.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          close()        
      }
    }
    return _arrowHookDownRight20!!
  }

private var _arrowHookDownRight20: ImageVector? = null
