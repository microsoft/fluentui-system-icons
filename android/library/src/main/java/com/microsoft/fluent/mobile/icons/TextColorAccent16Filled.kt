package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColorAccent16: ImageVector
  get() {
    if (_textColorAccent16 != null) {
      return _textColorAccent16!!
    }
    _textColorAccent16 = fluentIcon(name = "Filled.TextColorAccent16", 16f) {
      materialPath {
          moveTo(2.5F, 11.167F)
          curveToRelative(0.0F, -0.368F, 0.246F, -0.667F, 0.55F, -0.667F)
          horizontalLineToRelative(9.9F)
          curveToRelative(0.304F, 0.0F, 0.55F, 0.299F, 0.55F, 0.667F)
          verticalLineToRelative(2.666F)
          curveToRelative(0.0F, 0.368F, -0.246F, 0.667F, -0.55F, 0.667F)
          horizontalLineToRelative(-9.9F)
          curveToRelative(-0.304F, 0.0F, -0.55F, -0.299F, -0.55F, -0.667F)
          verticalLineToRelative(-2.666F)
          close()        
      }
    }
    return _textColorAccent16!!
  }

private var _textColorAccent16: ImageVector? = null
