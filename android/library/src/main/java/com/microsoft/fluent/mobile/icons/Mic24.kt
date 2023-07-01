package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mic24: ImageVector
  get() {
    if (_mic24 != null) {
      return _mic24!!
    }
    _mic24 = fluentIcon(name = "Filled.Mic24", 24f) {
      materialPath {
          moveTo(18.25F, 11.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(19.0F, 11.75F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 3.56F, -2.755F, 6.475F, -6.249F, 6.732F)
          lineTo(12.75F, 21.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(11.25F, 21.25F)
          verticalLineToRelative(-2.268F)
          curveToRelative(-3.417F, -0.25F, -6.127F, -3.044F, -6.246F, -6.496F)
          lineTo(5.0F, 12.25F)
          verticalLineToRelative(-0.5F)
          curveTo(5.0F, 11.336F, 5.336F, 11.0F, 5.75F, 11.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(6.5F, 11.75F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 2.827F, 2.235F, 5.132F, 5.034F, 5.246F)
          lineTo(11.75F, 17.5F)
          horizontalLineToRelative(0.5F)
          curveToRelative(2.827F, 0.0F, 5.132F, -2.234F, 5.246F, -5.034F)
          lineTo(17.5F, 12.25F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(12.0F, 2.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          close()        
      }
    }
    return _mic24!!
  }

private var _mic24: ImageVector? = null
