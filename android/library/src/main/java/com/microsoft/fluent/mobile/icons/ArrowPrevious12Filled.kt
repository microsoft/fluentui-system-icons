package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowPrevious12: ImageVector
  get() {
    if (_arrowPrevious12 != null) {
      return _arrowPrevious12!!
    }
    _arrowPrevious12 = fluentIcon(name = "Filled.ArrowPrevious12", 12f) {
      materialPath {
          moveTo(6.81F, 6.0F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(5.22F, 5.47F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.25F, 3.25F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(6.81F, 6.0F)
          close()
          moveTo(3.0F, 2.75F)
          curveTo(3.0F, 2.336F, 2.664F, 2.0F, 2.25F, 2.0F)
          reflectiveCurveTo(1.5F, 2.336F, 1.5F, 2.75F)
          verticalLineToRelative(6.5F)
          curveTo(1.5F, 9.664F, 1.836F, 10.0F, 2.25F, 10.0F)
          reflectiveCurveTo(3.0F, 9.664F, 3.0F, 9.25F)
          verticalLineToRelative(-6.5F)
          close()        
      }
    }
    return _arrowPrevious12!!
  }

private var _arrowPrevious12: ImageVector? = null
