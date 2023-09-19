package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SwipeRight20: ImageVector
  get() {
    if (_swipeRight20 != null) {
      return _swipeRight20!!
    }
    _swipeRight20 = fluentIcon(name = "Filled.SwipeRight20", 20f) {
      materialPath {
          moveTo(6.0F, 6.0F)
          curveToRelative(1.582F, 0.0F, 2.949F, 0.918F, 3.598F, 2.25F)
          horizontalLineTo(8.437F)
          curveTo(7.892F, 7.493F, 7.004F, 7.0F, 6.0F, 7.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(1.004F, 0.0F, 1.892F, -0.493F, 2.437F, -1.25F)
          horizontalLineToRelative(1.16F)
          curveTo(8.95F, 13.082F, 7.583F, 14.0F, 6.0F, 14.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          close()
          moveToRelative(9.28F, 7.03F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.22F, 1.22F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 9.25F, 5.0F, 9.586F, 5.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(9.69F)
          lineToRelative(-1.22F, 1.22F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _swipeRight20!!
  }

private var _swipeRight20: ImageVector? = null
