package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AutoFitWidth20: ImageVector
  get() {
    if (_autoFitWidth20 != null) {
      return _autoFitWidth20!!
    }
    _autoFitWidth20 = fluentIcon(name = "Filled.AutoFitWidth20", 20f) {
      materialPath {
          moveTo(18.0F, 4.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(16.5F, 3.836F, 16.5F, 4.25F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(18.0F, 15.664F, 18.0F, 15.25F)
          verticalLineToRelative(-11.0F)
          close()
          moveToRelative(-14.5F, 0.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(2.0F, 3.836F, 2.0F, 4.25F)
          verticalLineToRelative(11.0F)
          curveTo(2.0F, 15.664F, 2.336F, 16.0F, 2.75F, 16.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-11.0F)
          close()
          moveToRelative(1.72F, 6.03F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(7.56F, 10.5F)
          horizontalLineToRelative(4.88F)
          lineToRelative(-0.72F, 0.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(12.44F, 9.0F)
          horizontalLineTo(7.56F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _autoFitWidth20!!
  }

private var _autoFitWidth20: ImageVector? = null
