package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cone16: ImageVector
  get() {
    if (_cone16 != null) {
      return _cone16!!
    }
    _cone16 = fluentIcon(name = "Regular.Cone16", 16f) {
      materialPath {
          moveTo(8.0F, 15.0F)
          curveToRelative(-2.229F, 0.0F, -6.0F, -0.421F, -6.0F, -2.0F)
          curveToRelative(0.0F, -0.04F, 0.004F, -0.079F, 0.014F, -0.117F)
          lineToRelative(0.047F, -0.2F)
          curveToRelative(0.009F, -0.035F, 0.02F, -0.068F, 0.036F, -0.1F)
          lineToRelative(5.453F, -11.3F)
          curveToRelative(0.046F, -0.079F, 0.111F, -0.144F, 0.19F, -0.19F)
          curveToRelative(0.08F, -0.046F, 0.17F, -0.07F, 0.26F, -0.07F)
          reflectiveCurveToRelative(0.18F, 0.024F, 0.26F, 0.07F)
          curveToRelative(0.079F, 0.046F, 0.144F, 0.111F, 0.19F, 0.19F)
          lineToRelative(5.453F, 11.3F)
          curveToRelative(0.015F, 0.032F, 0.028F, 0.065F, 0.036F, 0.1F)
          lineToRelative(0.047F, 0.2F)
          curveTo(13.996F, 12.92F, 14.0F, 12.96F, 14.0F, 13.0F)
          curveToRelative(0.0F, 1.579F, -3.771F, 2.0F, -6.0F, 2.0F)
          close()
          moveToRelative(-4.99F, -1.981F)
          curveToRelative(0.197F, 0.34F, 2.025F, 0.98F, 4.99F, 0.98F)
          curveToRelative(2.94F, 0.0F, 4.763F, -0.628F, 4.988F, -0.99F)
          lineToRelative(-0.009F, -0.038F)
          lineTo(8.0F, 2.65F)
          lineTo(3.01F, 13.019F)
          close()        
      }
    }
    return _cone16!!
  }

private var _cone16: ImageVector? = null
