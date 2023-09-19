package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.NumberCircle124: ImageVector
  get() {
    if (_numberCircle124 != null) {
      return _numberCircle124!!
    }
    _numberCircle124 = fluentIcon(name = "Regular.NumberCircle124", 124f) {
      materialPath {
          moveTo(13.5F, 7.25F)
          curveToRelative(0.0F, -0.386F, -0.292F, -0.708F, -0.676F, -0.746F)
          curveToRelative(-0.384F, -0.038F, -0.734F, 0.22F, -0.81F, 0.599F)
          curveToRelative(-0.095F, 0.478F, -0.403F, 1.12F, -0.878F, 1.706F)
          curveToRelative(-0.474F, 0.586F, -1.051F, 1.039F, -1.623F, 1.23F)
          curveToRelative(-0.393F, 0.13F, -0.605F, 0.555F, -0.474F, 0.948F)
          curveToRelative(0.13F, 0.393F, 0.555F, 0.605F, 0.948F, 0.474F)
          curveToRelative(0.778F, -0.259F, 1.465F, -0.773F, 2.013F, -1.36F)
          verticalLineToRelative(6.149F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveTo(3.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, 3.806F, -8.5F, 8.5F, -8.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          close()        
      }
    }
    return _numberCircle124!!
  }

private var _numberCircle124: ImageVector? = null
