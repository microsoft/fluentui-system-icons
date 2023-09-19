package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShieldKeyhole24: ImageVector
  get() {
    if (_shieldKeyhole24 != null) {
      return _shieldKeyhole24!!
    }
    _shieldKeyhole24 = fluentIcon(name = "Filled.ShieldKeyhole24", 24f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 5.001F, 2.958F, 8.676F, 8.725F, 10.948F)
          curveToRelative(0.177F, 0.07F, 0.373F, 0.07F, 0.55F, 0.0F)
          curveTo(18.042F, 19.676F, 21.0F, 16.0F, 21.0F, 11.0F)
          verticalLineTo(5.75F)
          curveTo(21.0F, 5.336F, 20.664F, 5.0F, 20.25F, 5.0F)
          curveToRelative(-2.663F, 0.0F, -5.258F, -0.944F, -7.8F, -2.85F)
          curveToRelative(-0.267F, -0.2F, -0.633F, -0.2F, -0.9F, 0.0F)
          curveTo(9.008F, 4.056F, 6.413F, 5.0F, 3.75F, 5.0F)
          curveTo(3.336F, 5.0F, 3.0F, 5.336F, 3.0F, 5.75F)
          close()
          moveTo(13.995F, 11.0F)
          curveToRelative(0.0F, 0.837F, -0.515F, 1.555F, -1.245F, 1.852F)
          verticalLineToRelative(2.398F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-2.394F)
          curveTo(10.515F, 12.56F, 9.996F, 11.84F, 9.996F, 11.0F)
          curveToRelative(0.0F, -1.104F, 0.895F, -2.0F, 2.0F, -2.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, 0.896F, 2.0F, 2.0F)
          close()        
      }
    }
    return _shieldKeyhole24!!
  }

private var _shieldKeyhole24: ImageVector? = null
