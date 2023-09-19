package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Eye32: ImageVector
  get() {
    if (_eye32 != null) {
      return _eye32!!
    }
    _eye32 = fluentIcon(name = "Filled.Eye32", 32f) {
      materialPath {
          moveTo(28.034F, 17.29F)
          curveToRelative(0.13F, 0.43F, 0.53F, 0.71F, 0.96F, 0.71F)
          verticalLineToRelative(-0.01F)
          curveToRelative(0.1F, 0.0F, 0.19F, -0.01F, 0.29F, -0.04F)
          curveToRelative(0.53F, -0.16F, 0.829F, -0.71F, 0.67F, -1.24F)
          curveTo(29.923F, 16.61F, 26.613F, 6.0F, 15.995F, 6.0F)
          reflectiveCurveTo(2.07F, 16.61F, 2.04F, 16.72F)
          curveToRelative(-0.16F, 0.53F, 0.14F, 1.08F, 0.67F, 1.24F)
          curveToRelative(0.53F, 0.16F, 1.09F, -0.14F, 1.25F, -0.67F)
          curveTo(4.069F, 16.91F, 6.889F, 8.0F, 15.996F, 8.0F)
          curveToRelative(9.104F, 0.0F, 11.915F, 8.903F, 12.037F, 9.29F)
          close()
          moveTo(10.0F, 18.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()        
      }
    }
    return _eye32!!
  }

private var _eye32: ImageVector? = null
