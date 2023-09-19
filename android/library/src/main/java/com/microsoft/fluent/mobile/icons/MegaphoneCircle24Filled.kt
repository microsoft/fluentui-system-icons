package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MegaphoneCircle24: ImageVector
  get() {
    if (_megaphoneCircle24 != null) {
      return _megaphoneCircle24!!
    }
    _megaphoneCircle24 = fluentIcon(name = "Filled.MegaphoneCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(-4.0F, -7.566F)
          lineToRelative(-0.861F, -0.319F)
          curveToRelative(-0.687F, -0.254F, -1.143F, -0.909F, -1.143F, -1.641F)
          verticalLineToRelative(-0.95F)
          curveToRelative(0.0F, -0.733F, 0.456F, -1.388F, 1.143F, -1.642F)
          lineToRelative(7.501F, -2.775F)
          curveToRelative(1.143F, -0.423F, 2.357F, 0.423F, 2.357F, 1.641F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.219F, -1.214F, 2.065F, -2.357F, 1.642F)
          lineToRelative(-1.434F, -0.531F)
          curveToRelative(-0.228F, 1.219F, -1.297F, 2.141F, -2.581F, 2.141F)
          curveTo(9.175F, 18.5F, 8.0F, 17.325F, 8.0F, 15.875F)
          verticalLineToRelative(-1.441F)
          close()
          moveToRelative(3.75F, 1.387F)
          verticalLineToRelative(0.054F)
          curveToRelative(0.0F, 0.621F, -0.504F, 1.125F, -1.125F, 1.125F)
          reflectiveCurveTo(9.5F, 16.496F, 9.5F, 15.875F)
          verticalLineToRelative(-0.887F)
          lineToRelative(2.25F, 0.833F)
          close()        
      }
    }
    return _megaphoneCircle24!!
  }

private var _megaphoneCircle24: ImageVector? = null
