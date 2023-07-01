package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColorAccent24: ImageVector
  get() {
    if (_textColorAccent24 != null) {
      return _textColorAccent24!!
    }
    _textColorAccent24 = fluentIcon(name = "Filled.TextColorAccent24", 24f) {
      materialPath {
          moveTo(3.5F, 17.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(11.999F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(17.0F)
          close()        
      }
    }
    return _textColorAccent24!!
  }

private var _textColorAccent24: ImageVector? = null
