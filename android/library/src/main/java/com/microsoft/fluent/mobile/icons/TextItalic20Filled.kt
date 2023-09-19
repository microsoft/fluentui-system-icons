package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextItalic20: ImageVector
  get() {
    if (_textItalic20 != null) {
      return _textItalic20!!
    }
    _textItalic20 = fluentIcon(name = "Filled.TextItalic20", 20f) {
      materialPath {
          moveTo(8.0F, 3.25F)
          curveTo(8.0F, 2.836F, 8.336F, 2.5F, 8.75F, 2.5F)
          horizontalLineToRelative(7.5F)
          curveTo(16.664F, 2.5F, 17.0F, 2.836F, 17.0F, 3.25F)
          reflectiveCurveTo(16.664F, 4.0F, 16.25F, 4.0F)
          horizontalLineToRelative(-3.235F)
          lineTo(8.592F, 15.5F)
          horizontalLineToRelative(2.658F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(11.664F, 17.0F, 11.25F, 17.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(3.336F, 17.0F, 3.0F, 16.664F, 3.0F, 16.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(3.235F)
          lineTo(11.408F, 4.0F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 4.0F, 8.0F, 3.664F, 8.0F, 3.25F)
          close()        
      }
    }
    return _textItalic20!!
  }

private var _textItalic20: ImageVector? = null
