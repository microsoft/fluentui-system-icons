package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SwipeUp20: ImageVector
  get() {
    if (_swipeUp20 != null) {
      return _swipeUp20!!
    }
    _swipeUp20 = fluentIcon(name = "Filled.SwipeUp20", 20f) {
      materialPath {
          moveTo(10.53F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(1.22F, -1.22F)
          verticalLineToRelative(9.69F)
          curveTo(9.25F, 14.664F, 9.586F, 15.0F, 10.0F, 15.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.56F)
          lineToRelative(1.22F, 1.22F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.5F, -2.5F)
          close()
          moveTo(6.0F, 14.0F)
          curveToRelative(0.0F, -1.582F, 0.918F, -2.949F, 2.25F, -3.598F)
          verticalLineToRelative(1.161F)
          curveTo(7.493F, 12.108F, 7.0F, 12.996F, 7.0F, 14.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          curveToRelative(0.0F, -1.004F, -0.493F, -1.892F, -1.25F, -2.437F)
          verticalLineToRelative(-1.16F)
          curveTo(13.082F, 11.05F, 14.0F, 12.417F, 14.0F, 14.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          close()        
      }
    }
    return _swipeUp20!!
  }

private var _swipeUp20: ImageVector? = null
