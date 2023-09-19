package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCurveDownLeft20: ImageVector
  get() {
    if (_arrowCurveDownLeft20 != null) {
      return _arrowCurveDownLeft20!!
    }
    _arrowCurveDownLeft20 = fluentIcon(name = "Regular.ArrowCurveDownLeft20", 20f) {
      materialPath {
          moveTo(13.257F, 2.929F)
          curveToRelative(0.237F, -0.142F, 0.314F, -0.45F, 0.172F, -0.686F)
          curveToRelative(-0.142F, -0.237F, -0.45F, -0.314F, -0.686F, -0.172F)
          curveToRelative(-1.315F, 0.79F, -2.269F, 1.732F, -2.882F, 3.027F)
          curveTo(9.253F, 6.381F, 9.0F, 7.965F, 9.0F, 10.0F)
          verticalLineToRelative(6.293F)
          lineToRelative(-3.146F, -3.146F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          lineTo(10.0F, 16.293F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.965F, 0.247F, -3.38F, 0.764F, -4.473F)
          curveToRelative(0.512F, -1.08F, 1.308F, -1.887F, 2.493F, -2.598F)
          close()        
      }
    }
    return _arrowCurveDownLeft20!!
  }

private var _arrowCurveDownLeft20: ImageVector? = null
