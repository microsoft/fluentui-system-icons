package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleDownRight16: ImageVector
  get() {
    if (_arrowCircleDownRight16 != null) {
      return _arrowCircleDownRight16!!
    }
    _arrowCircleDownRight16 = fluentIcon(name = "Regular.ArrowCircleDownRight16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveToRelative(1.41F, 3.007F)
          lineTo(9.5F, 6.0F)
          curveToRelative(0.246F, 0.0F, 0.45F, 0.177F, 0.493F, 0.41F)
          lineTo(10.0F, 6.5F)
          verticalLineToRelative(3.025F)
          lineTo(9.988F, 9.61F)
          lineTo(9.97F, 9.673F)
          lineTo(9.935F, 9.75F)
          lineTo(9.884F, 9.822F)
          lineTo(9.838F, 9.87F)
          lineTo(9.771F, 9.92F)
          lineToRelative(-0.06F, 0.034F)
          lineTo(9.673F, 9.97F)
          lineTo(9.61F, 9.99F)
          lineTo(9.523F, 10.0F)
          horizontalLineTo(6.501F)
          curveTo(6.225F, 10.0F, 6.0F, 9.778F, 6.0F, 9.5F)
          curveToRelative(0.0F, -0.244F, 0.178F, -0.448F, 0.41F, -0.49F)
          lineTo(6.5F, 9.0F)
          horizontalLineToRelative(1.794F)
          lineTo(6.147F, 6.853F)
          curveTo(5.974F, 6.679F, 5.954F, 6.41F, 6.09F, 6.215F)
          lineToRelative(0.058F, -0.07F)
          curveTo(6.321F, 5.973F, 6.59F, 5.954F, 6.785F, 6.089F)
          lineToRelative(0.07F, 0.058F)
          lineTo(9.0F, 8.292F)
          verticalLineTo(6.499F)
          curveToRelative(0.0F, -0.245F, 0.178F, -0.45F, 0.41F, -0.492F)
          lineTo(9.5F, 6.0F)
          lineTo(9.41F, 6.007F)
          close()        
      }
    }
    return _arrowCircleDownRight16!!
  }

private var _arrowCircleDownRight16: ImageVector? = null
