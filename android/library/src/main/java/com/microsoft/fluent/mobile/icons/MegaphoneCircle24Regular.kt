package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MegaphoneCircle24: ImageVector
  get() {
    if (_megaphoneCircle24 != null) {
      return _megaphoneCircle24!!
    }
    _megaphoneCircle24 = fluentIcon(name = "Regular.MegaphoneCircle24", 24f) {
      materialPath {
          moveTo(3.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, 3.806F, -8.5F, 8.5F, -8.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(2.64F, 5.107F)
          curveToRelative(1.143F, -0.423F, 2.357F, 0.423F, 2.357F, 1.641F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.219F, -1.214F, 2.065F, -2.357F, 1.642F)
          lineToRelative(-1.562F, -0.578F)
          curveTo(12.7F, 17.299F, 11.745F, 18.0F, 10.625F, 18.0F)
          curveTo(9.175F, 18.0F, 8.0F, 16.825F, 8.0F, 15.375F)
          verticalLineToRelative(-0.941F)
          lineToRelative(-0.861F, -0.319F)
          curveToRelative(-0.687F, -0.254F, -1.143F, -0.909F, -1.143F, -1.641F)
          verticalLineToRelative(-0.95F)
          curveToRelative(0.0F, -0.733F, 0.456F, -1.388F, 1.143F, -1.642F)
          lineToRelative(7.501F, -2.775F)
          close()
          moveTo(9.5F, 14.988F)
          verticalLineToRelative(0.387F)
          curveToRelative(0.0F, 0.621F, 0.504F, 1.125F, 1.125F, 1.125F)
          curveToRelative(0.474F, 0.0F, 0.88F, -0.294F, 1.046F, -0.709F)
          lineTo(9.5F, 14.988F)
          close()
          moveToRelative(5.997F, -6.24F)
          curveToRelative(0.0F, -0.174F, -0.173F, -0.294F, -0.336F, -0.234F)
          lineToRelative(-7.502F, 2.775F)
          curveToRelative(-0.098F, 0.036F, -0.163F, 0.13F, -0.163F, 0.234F)
          verticalLineToRelative(0.95F)
          curveToRelative(0.0F, 0.105F, 0.065F, 0.199F, 0.163F, 0.235F)
          lineToRelative(7.502F, 2.775F)
          curveToRelative(0.163F, 0.06F, 0.336F, -0.06F, 0.336F, -0.235F)
          verticalLineToRelative(-6.5F)
          close()        
      }
    }
    return _megaphoneCircle24!!
  }

private var _megaphoneCircle24: ImageVector? = null
