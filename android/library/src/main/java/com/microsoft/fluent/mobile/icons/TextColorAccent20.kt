package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColorAccent20: ImageVector
  get() {
    if (_textColorAccent20 != null) {
      return _textColorAccent20!!
    }
    _textColorAccent20 = fluentIcon(name = "Filled.TextColorAccent20", 20f) {
      materialPath {
          moveTo(3.5F, 13.125F)
          curveToRelative(0.0F, -0.345F, 0.243F, -0.625F, 0.542F, -0.625F)
          horizontalLineToRelative(11.916F)
          curveToRelative(0.3F, 0.0F, 0.542F, 0.28F, 0.542F, 0.625F)
          verticalLineToRelative(3.75F)
          curveToRelative(0.0F, 0.345F, -0.242F, 0.625F, -0.542F, 0.625F)
          horizontalLineTo(4.042F)
          curveToRelative(-0.3F, 0.0F, -0.542F, -0.28F, -0.542F, -0.625F)
          verticalLineToRelative(-3.75F)
          close()        
      }
    }
    return _textColorAccent20!!
  }

private var _textColorAccent20: ImageVector? = null
