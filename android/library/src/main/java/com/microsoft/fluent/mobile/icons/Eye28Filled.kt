package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Eye28: ImageVector
  get() {
    if (_eye28 != null) {
      return _eye28!!
    }
    _eye28 = fluentIcon(name = "Filled.Eye28", 28f) {
      materialPath {
          moveTo(25.256F, 16.0F)
          horizontalLineToRelative(0.006F)
          close()
          moveToRelative(-0.704F, -0.52F)
          curveToRelative(0.1F, 0.318F, 0.387F, 0.518F, 0.704F, 0.52F)
          curveToRelative(0.07F, 0.0F, 0.148F, -0.02F, 0.226F, -0.04F)
          curveToRelative(0.39F, -0.12F, 0.61F, -0.55F, 0.48F, -0.94F)
          curveTo(25.932F, 14.93F, 22.932F, 6.0F, 14.0F, 6.0F)
          reflectiveCurveTo(2.067F, 14.93F, 2.037F, 15.02F)
          curveToRelative(-0.13F, 0.39F, 0.09F, 0.81F, 0.48F, 0.94F)
          curveToRelative(0.4F, 0.13F, 0.82F, -0.09F, 0.95F, -0.48F)
          lineToRelative(0.003F, -0.005F)
          curveTo(3.603F, 15.085F, 6.207F, 7.5F, 14.01F, 7.5F)
          curveToRelative(7.842F, 0.0F, 10.432F, 7.65F, 10.542F, 7.98F)
          close()
          moveTo(9.0F, 16.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()        
      }
    }
    return _eye28!!
  }

private var _eye28: ImageVector? = null
