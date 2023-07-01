package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextQuote16: ImageVector
  get() {
    if (_textQuote16 != null) {
      return _textQuote16!!
    }
    _textQuote16 = fluentIcon(name = "Filled.TextQuote16", 16f) {
      materialPath {
          moveTo(9.646F, 11.146F)
          curveToRelative(1.387F, -1.386F, 2.008F, -2.76F, 2.24F, -4.352F)
          curveTo(11.617F, 6.926F, 11.317F, 7.0F, 11.0F, 7.0F)
          curveTo(9.895F, 7.0F, 9.0F, 6.105F, 9.0F, 5.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          curveToRelative(0.0F, 2.592F, -0.527F, 4.734F, -2.646F, 6.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()
          moveToRelative(-6.0F, 0.0F)
          curveToRelative(1.387F, -1.386F, 2.008F, -2.76F, 2.24F, -4.352F)
          curveTo(5.617F, 6.926F, 5.317F, 7.0F, 5.0F, 7.0F)
          curveTo(3.895F, 7.0F, 3.0F, 6.105F, 3.0F, 5.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          curveToRelative(0.0F, 2.592F, -0.527F, 4.734F, -2.646F, 6.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _textQuote16!!
  }

private var _textQuote16: ImageVector? = null
