package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wallet28: ImageVector
  get() {
    if (_wallet28 != null) {
      return _wallet28!!
    }
    _wallet28 = fluentIcon(name = "Filled.Wallet28", 28f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.769F, 3.0F, 22.0F, 4.231F, 22.0F, 5.75F)
          verticalLineToRelative(1.258F)
          curveToRelative(1.954F, 0.129F, 3.5F, 1.755F, 3.5F, 3.742F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 2.071F, -1.68F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.754F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-10.5F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(0.011F)
          curveTo(3.004F, 5.918F, 3.0F, 5.834F, 3.0F, 5.75F)
          close()
          moveToRelative(17.5F, 0.0F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(5.75F)
          curveTo(5.06F, 4.5F, 4.5F, 5.06F, 4.5F, 5.75F)
          reflectiveCurveTo(5.06F, 7.0F, 5.75F, 7.0F)
          horizontalLineTo(20.5F)
          verticalLineTo(5.75F)
          close()
          moveTo(18.75F, 16.0F)
          curveTo(18.336F, 16.0F, 18.0F, 16.336F, 18.0F, 16.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(21.664F, 16.0F, 21.25F, 16.0F)
          horizontalLineToRelative(-2.5F)
          close()        
      }
    }
    return _wallet28!!
  }

private var _wallet28: ImageVector? = null
