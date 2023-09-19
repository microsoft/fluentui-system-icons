package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Temperature20: ImageVector
  get() {
    if (_temperature20 != null) {
      return _temperature20!!
    }
    _temperature20 = fluentIcon(name = "Filled.Temperature20", 20f) {
      materialPath {
          moveTo(10.748F, 7.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          lineToRelative(0.002F, 4.895F)
          curveTo(8.517F, 12.442F, 8.0F, 13.161F, 8.0F, 14.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          curveToRelative(0.0F, -0.84F, -0.517F, -1.558F, -1.25F, -1.855F)
          lineTo(10.748F, 7.25F)
          close()
          moveTo(6.5F, 5.5F)
          verticalLineTo(5.498F)
          curveTo(6.5F, 3.566F, 8.066F, 2.0F, 9.998F, 2.0F)
          curveToRelative(1.931F, 0.0F, 3.497F, 1.566F, 3.497F, 3.498F)
          verticalLineToRelative(5.668F)
          curveTo(14.124F, 11.94F, 14.5F, 12.926F, 14.5F, 14.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(5.5F, 16.485F, 5.5F, 14.0F)
          curveToRelative(0.0F, -1.074F, 0.377F, -2.06F, 1.004F, -2.834F)
          curveToRelative(0.0F, -1.737F, -0.008F, -3.98F, -0.008F, -5.666F)
          horizontalLineTo(6.5F)
          close()
          moveTo(8.0F, 5.498F)
          curveTo(7.995F, 7.578F, 8.004F, 9.66F, 8.004F, 11.74F)
          lineToRelative(-0.2F, 0.216F)
          curveTo(7.303F, 12.493F, 7.0F, 13.21F, 7.0F, 14.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          curveToRelative(0.0F, -0.79F, -0.304F, -1.507F, -0.803F, -2.043F)
          lineToRelative(-0.201F, -0.216F)
          verticalLineTo(5.498F)
          curveToRelative(0.0F, -1.104F, -0.895F, -1.998F, -1.998F, -1.998F)
          curveTo(8.894F, 3.5F, 8.0F, 4.394F, 8.0F, 5.498F)
          close()        
      }
    }
    return _temperature20!!
  }

private var _temperature20: ImageVector? = null
