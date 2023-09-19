package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited12: ImageVector
  get() {
    if (_prohibited12 != null) {
      return _prohibited12!!
    }
    _prohibited12 = fluentIcon(name = "Filled.Prohibited12", 12f) {
      materialPath {
          moveTo(11.0F, 6.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(1.0F, 8.761F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveTo(9.5F, 6.0F)
          curveToRelative(0.0F, -0.695F, -0.203F, -1.343F, -0.552F, -1.887F)
          lineTo(4.113F, 8.948F)
          curveTo(4.657F, 9.298F, 5.305F, 9.5F, 6.0F, 9.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          close()
          moveTo(7.888F, 3.052F)
          curveTo(7.343F, 2.702F, 6.695F, 2.5F, 6.0F, 2.5F)
          curveTo(4.067F, 2.5F, 2.5F, 4.067F, 2.5F, 6.0F)
          curveToRelative(0.0F, 0.695F, 0.203F, 1.343F, 0.552F, 1.888F)
          lineToRelative(4.836F, -4.836F)
          close()        
      }
    }
    return _prohibited12!!
  }

private var _prohibited12: ImageVector? = null
