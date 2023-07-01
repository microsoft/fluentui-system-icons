package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ErrorCircle12: ImageVector
  get() {
    if (_errorCircle12 != null) {
      return _errorCircle12!!
    }
    _errorCircle12 = fluentIcon(name = "Filled.ErrorCircle12", 12f) {
      materialPath {
          moveTo(6.0F, 11.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(8.761F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveTo(1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveTo(5.25F, 8.25F)
          curveTo(5.25F, 7.836F, 5.586F, 7.5F, 6.0F, 7.5F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(6.414F, 9.0F, 6.0F, 9.0F)
          reflectiveCurveTo(5.25F, 8.664F, 5.25F, 8.25F)
          close()
          moveToRelative(0.258F, -4.84F)
          curveTo(5.55F, 3.177F, 5.755F, 3.0F, 6.0F, 3.0F)
          reflectiveCurveToRelative(0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(6.5F, 3.5F)
          verticalLineTo(6.0F)
          lineTo(6.492F, 6.09F)
          curveTo(6.45F, 6.323F, 6.245F, 6.5F, 6.0F, 6.5F)
          reflectiveCurveTo(5.55F, 6.323F, 5.508F, 6.09F)
          lineTo(5.5F, 6.0F)
          verticalLineTo(3.5F)
          lineToRelative(0.008F, -0.09F)
          close()        
      }
    }
    return _errorCircle12!!
  }

private var _errorCircle12: ImageVector? = null
