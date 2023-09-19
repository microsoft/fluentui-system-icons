package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextItalic20: ImageVector
  get() {
    if (_textItalic20 != null) {
      return _textItalic20!!
    }
    _textItalic20 = fluentIcon(name = "Regular.TextItalic20", 20f) {
      materialPath {
          moveTo(16.0F, 3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.276F, 4.0F, 16.0F, 4.0F)
          horizontalLineToRelative(-3.157F)
          lineTo(8.227F, 16.0F)
          horizontalLineTo(11.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.776F, 17.0F, 11.5F, 17.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(3.724F, 16.0F, 4.0F, 16.0F)
          horizontalLineToRelative(3.156F)
          lineToRelative(4.615F, -12.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 4.0F, 8.0F, 3.776F, 8.0F, 3.5F)
          reflectiveCurveTo(8.224F, 3.0F, 8.5F, 3.0F)
          horizontalLineTo(16.0F)
          close()        
      }
    }
    return _textItalic20!!
  }

private var _textItalic20: ImageVector? = null
