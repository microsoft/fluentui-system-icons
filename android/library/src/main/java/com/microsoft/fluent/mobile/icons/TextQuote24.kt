package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextQuote24: ImageVector
  get() {
    if (_textQuote24 != null) {
      return _textQuote24!!
    }
    _textQuote24 = fluentIcon(name = "Filled.TextQuote24", 24f) {
      materialPath {
          moveTo(7.5F, 6.0F)
          curveToRelative(1.325F, 0.0F, 2.41F, 1.032F, 2.495F, 2.336F)
          lineTo(10.0F, 8.542F)
          curveToRelative(-0.01F, 3.555F, -1.24F, 6.614F, -3.705F, 9.223F)
          curveToRelative(-0.284F, 0.301F, -0.759F, 0.315F, -1.06F, 0.03F)
          curveToRelative(-0.301F, -0.284F, -0.315F, -0.759F, -0.03F, -1.06F)
          curveToRelative(1.64F, -1.737F, 2.66F, -3.674F, 3.077F, -5.859F)
          curveTo(8.036F, 10.956F, 7.772F, 11.0F, 7.5F, 11.0F)
          curveTo(6.12F, 11.0F, 5.0F, 9.88F, 5.0F, 8.5F)
          reflectiveCurveTo(6.12F, 6.0F, 7.5F, 6.0F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveToRelative(1.326F, 0.0F, 2.41F, 1.032F, 2.495F, 2.336F)
          lineTo(19.0F, 8.542F)
          curveToRelative(-0.01F, 3.56F, -1.238F, 6.614F, -3.705F, 9.223F)
          curveToRelative(-0.285F, 0.301F, -0.76F, 0.314F, -1.06F, 0.03F)
          curveToRelative(-0.301F, -0.285F, -0.314F, -0.76F, -0.03F, -1.06F)
          curveToRelative(1.643F, -1.738F, 2.662F, -3.672F, 3.078F, -5.859F)
          curveTo(17.035F, 10.956F, 16.773F, 11.0F, 16.5F, 11.0F)
          curveTo(15.12F, 11.0F, 14.0F, 9.88F, 14.0F, 8.5F)
          reflectiveCurveTo(15.12F, 6.0F, 16.5F, 6.0F)
          close()        
      }
    }
    return _textQuote24!!
  }

private var _textQuote24: ImageVector? = null
