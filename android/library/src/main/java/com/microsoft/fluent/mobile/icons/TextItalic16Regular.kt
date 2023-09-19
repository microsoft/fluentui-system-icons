package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextItalic16: ImageVector
  get() {
    if (_textItalic16 != null) {
      return _textItalic16!!
    }
    _textItalic16 = fluentIcon(name = "Regular.TextItalic16", 16f) {
      materialPath {
          moveTo(13.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveTo(6.724F, 2.0F, 6.5F, 2.224F, 6.5F, 2.5F)
          reflectiveCurveTo(6.724F, 3.0F, 7.0F, 3.0F)
          horizontalLineToRelative(2.474F)
          lineTo(5.656F, 13.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(2.724F, 14.0F, 3.0F, 14.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(9.276F, 13.0F, 9.0F, 13.0F)
          horizontalLineTo(6.726F)
          lineToRelative(3.818F, -10.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.276F, 2.0F, 13.0F, 2.0F)
          close()        
      }
    }
    return _textItalic16!!
  }

private var _textItalic16: ImageVector? = null
