package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NumberCircle124: ImageVector
  get() {
    if (_numberCircle124 != null) {
      return _numberCircle124!!
    }
    _numberCircle124 = fluentIcon(name = "Filled.NumberCircle124", 124f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(1.5F, -14.75F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(12.0F, 16.664F, 12.0F, 16.25F)
          verticalLineTo(10.1F)
          curveToRelative(-0.548F, 0.588F, -1.235F, 1.102F, -2.013F, 1.361F)
          curveToRelative(-0.393F, 0.131F, -0.817F, -0.08F, -0.948F, -0.474F)
          curveToRelative(-0.131F, -0.393F, 0.081F, -0.818F, 0.474F, -0.948F)
          curveToRelative(0.572F, -0.191F, 1.149F, -0.644F, 1.623F, -1.23F)
          curveToRelative(0.475F, -0.586F, 0.783F, -1.228F, 0.879F, -1.706F)
          curveToRelative(0.075F, -0.378F, 0.425F, -0.637F, 0.81F, -0.6F)
          curveToRelative(0.382F, 0.04F, 0.675F, 0.362F, 0.675F, 0.747F)
          close()        
      }
    }
    return _numberCircle124!!
  }

private var _numberCircle124: ImageVector? = null
