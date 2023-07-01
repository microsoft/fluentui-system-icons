package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextItalic16: ImageVector
  get() {
    if (_textItalic16 != null) {
      return _textItalic16!!
    }
    _textItalic16 = fluentIcon(name = "Filled.TextItalic16", 16f) {
      materialPath {
          moveTo(12.8F, 2.0F)
          horizontalLineTo(7.0F)
          curveTo(6.584F, 2.0F, 6.25F, 2.336F, 6.25F, 2.75F)
          reflectiveCurveTo(6.584F, 3.5F, 7.0F, 3.5F)
          horizontalLineToRelative(2.01F)
          lineToRelative(-3.428F, 9.0F)
          horizontalLineTo(3.2F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(2.785F, 14.0F, 3.2F, 14.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(9.413F, 12.5F, 9.0F, 12.5F)
          horizontalLineTo(7.188F)
          lineToRelative(3.428F, -9.0F)
          horizontalLineTo(12.8F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.213F, 2.0F, 12.8F, 2.0F)
          close()        
      }
    }
    return _textItalic16!!
  }

private var _textItalic16: ImageVector? = null
