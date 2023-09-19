package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AutoFitHeight20: ImageVector
  get() {
    if (_autoFitHeight20 != null) {
      return _autoFitHeight20!!
    }
    _autoFitHeight20 = fluentIcon(name = "Filled.AutoFitHeight20", 20f) {
      materialPath {
          moveTo(4.25F, 2.0F)
          curveTo(3.836F, 2.0F, 3.5F, 2.336F, 3.5F, 2.75F)
          reflectiveCurveTo(3.836F, 3.5F, 4.25F, 3.5F)
          horizontalLineToRelative(11.0F)
          curveTo(15.664F, 3.5F, 16.0F, 3.164F, 16.0F, 2.75F)
          reflectiveCurveTo(15.664F, 2.0F, 15.25F, 2.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(0.0F, 14.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(3.836F, 18.0F, 4.25F, 18.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(6.03F, -1.72F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-0.72F, 0.72F)
          verticalLineTo(7.56F)
          lineToRelative(0.72F, 0.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 7.56F)
          verticalLineToRelative(4.88F)
          lineToRelative(-0.72F, -0.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _autoFitHeight20!!
  }

private var _autoFitHeight20: ImageVector? = null
