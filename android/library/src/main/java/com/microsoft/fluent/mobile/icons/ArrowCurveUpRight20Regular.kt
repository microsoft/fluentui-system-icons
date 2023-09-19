package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCurveUpRight20: ImageVector
  get() {
    if (_arrowCurveUpRight20 != null) {
      return _arrowCurveUpRight20!!
    }
    _arrowCurveUpRight20 = fluentIcon(name = "Regular.ArrowCurveUpRight20", 20f) {
      materialPath {
          moveTo(14.146F, 6.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(10.0F, 3.707F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.965F, -0.247F, 3.38F, -0.764F, 4.473F)
          curveToRelative(-0.512F, 1.08F, -1.308F, 1.887F, -2.493F, 2.598F)
          curveToRelative(-0.237F, 0.142F, -0.314F, 0.45F, -0.172F, 0.686F)
          curveToRelative(0.142F, 0.237F, 0.45F, 0.314F, 0.686F, 0.172F)
          curveToRelative(1.315F, -0.79F, 2.269F, -1.732F, 2.882F, -3.027F)
          curveTo(10.747F, 13.619F, 11.0F, 12.035F, 11.0F, 10.0F)
          verticalLineTo(3.707F)
          lineToRelative(3.146F, 3.147F)
          close()        
      }
    }
    return _arrowCurveUpRight20!!
  }

private var _arrowCurveUpRight20: ImageVector? = null
