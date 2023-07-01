package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FontIncrease20: ImageVector
  get() {
    if (_fontIncrease20 != null) {
      return _fontIncrease20!!
    }
    _fontIncrease20 = fluentIcon(name = "Regular.FontIncrease20", 20f) {
      materialPath {
          moveTo(13.854F, 4.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineTo(15.5F, 3.207F)
          lineToRelative(-1.646F, 1.647F)
          close()
          moveTo(10.0F, 4.0F)
          curveTo(9.797F, 4.0F, 9.614F, 4.123F, 9.537F, 4.31F)
          lineToRelative(-4.5F, 11.0F)
          curveToRelative(-0.104F, 0.256F, 0.018F, 0.548F, 0.274F, 0.653F)
          curveToRelative(0.255F, 0.104F, 0.547F, -0.018F, 0.652F, -0.274F)
          lineTo(7.5F, 11.931F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-0.068F)
          lineToRelative(1.537F, 3.757F)
          curveToRelative(0.105F, 0.256F, 0.397F, 0.378F, 0.652F, 0.274F)
          curveToRelative(0.256F, -0.105F, 0.378F, -0.397F, 0.274F, -0.652F)
          lineToRelative(-4.5F, -11.0F)
          curveTo(10.386F, 4.123F, 10.203F, 4.0F, 10.0F, 4.0F)
          close()
          moveToRelative(0.0F, 1.82F)
          lineTo(12.119F, 11.0F)
          horizontalLineTo(7.88F)
          lineTo(10.0F, 5.82F)
          close()        
      }
    }
    return _fontIncrease20!!
  }

private var _fontIncrease20: ImageVector? = null
