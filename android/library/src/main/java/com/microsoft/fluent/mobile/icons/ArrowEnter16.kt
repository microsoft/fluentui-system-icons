package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowEnter16: ImageVector
  get() {
    if (_arrowEnter16 != null) {
      return _arrowEnter16!!
    }
    _arrowEnter16 = fluentIcon(name = "Filled.ArrowEnter16", 16f) {
      materialPath {
          moveTo(6.75F, 1.5F)
          curveTo(6.336F, 1.5F, 6.0F, 1.836F, 6.0F, 2.25F)
          reflectiveCurveTo(6.336F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(4.75F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 13.0F, 6.0F, 13.336F, 6.0F, 13.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(4.75F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.75F)
          close()
          moveToRelative(3.03F, 5.97F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.22F, 1.22F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 7.25F, 1.0F, 7.586F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.69F)
          lineTo(6.22F, 9.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.5F, -2.5F)
          curveTo(9.921F, 8.39F, 10.0F, 8.2F, 10.0F, 8.0F)
          reflectiveCurveTo(9.921F, 7.61F, 9.78F, 7.47F)
          close()        
      }
    }
    return _arrowEnter16!!
  }

private var _arrowEnter16: ImageVector? = null
