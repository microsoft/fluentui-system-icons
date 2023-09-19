package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SwipeDown20: ImageVector
  get() {
    if (_swipeDown20 != null) {
      return _swipeDown20!!
    }
    _swipeDown20 = fluentIcon(name = "Filled.SwipeDown20", 20f) {
      materialPath {
          moveTo(14.0F, 6.0F)
          curveToRelative(0.0F, 1.582F, -0.918F, 2.949F, -2.25F, 3.598F)
          verticalLineTo(8.437F)
          curveTo(12.507F, 7.892F, 13.0F, 7.004F, 13.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveTo(7.0F, 4.343F, 7.0F, 6.0F)
          curveToRelative(0.0F, 1.004F, 0.493F, 1.892F, 1.25F, 2.437F)
          verticalLineToRelative(1.16F)
          curveTo(6.918F, 8.95F, 6.0F, 7.583F, 6.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()
          moveTo(9.47F, 17.78F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.22F, 1.22F)
          verticalLineTo(5.75F)
          curveTo(10.75F, 5.336F, 10.414F, 5.0F, 10.0F, 5.0F)
          reflectiveCurveTo(9.25F, 5.336F, 9.25F, 5.75F)
          verticalLineToRelative(9.69F)
          lineToRelative(-1.22F, -1.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.292F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.5F, 2.5F)
          close()        
      }
    }
    return _swipeDown20!!
  }

private var _swipeDown20: ImageVector? = null
