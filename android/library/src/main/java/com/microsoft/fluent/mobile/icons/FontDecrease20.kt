package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FontDecrease20: ImageVector
  get() {
    if (_fontDecrease20 != null) {
      return _fontDecrease20!!
    }
    _fontDecrease20 = fluentIcon(name = "Regular.FontDecrease20", 20f) {
      materialPath {
          moveTo(13.146F, 2.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineTo(15.5F, 3.792F)
          lineToRelative(1.646F, -1.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(10.0F, 4.0F)
          curveToRelative(0.203F, 0.0F, 0.386F, 0.123F, 0.463F, 0.31F)
          lineToRelative(4.5F, 11.0F)
          curveToRelative(0.104F, 0.256F, -0.018F, 0.548F, -0.274F, 0.653F)
          curveToRelative(-0.255F, 0.104F, -0.547F, -0.018F, -0.652F, -0.274F)
          lineTo(12.5F, 11.932F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(-0.07F)
          lineToRelative(-1.537F, 3.76F)
          curveToRelative(-0.105F, 0.256F, -0.397F, 0.378F, -0.652F, 0.274F)
          curveToRelative(-0.256F, -0.105F, -0.378F, -0.397F, -0.274F, -0.652F)
          lineToRelative(4.5F, -11.0F)
          curveTo(9.614F, 4.123F, 9.797F, 4.0F, 10.0F, 4.0F)
          close()
          moveToRelative(-2.119F, 7.0F)
          horizontalLineToRelative(4.238F)
          lineTo(10.0F, 5.82F)
          lineTo(7.881F, 11.0F)
          close()        
      }
    }
    return _fontDecrease20!!
  }

private var _fontDecrease20: ImageVector? = null
