package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark16: ImageVector
  get() {
    if (_checkmark16 != null) {
      return _checkmark16!!
    }
    _checkmark16 = fluentIcon(name = "Regular.Checkmark16", 16f) {
      materialPath {
          moveTo(13.864F, 3.655F)
          curveToRelative(0.19F, 0.201F, 0.18F, 0.518F, -0.021F, 0.707F)
          lineToRelative(-7.93F, 7.474F)
          curveToRelative(-0.237F, 0.223F, -0.61F, 0.217F, -0.839F, -0.016F)
          lineTo(2.394F, 9.1F)
          curveTo(2.2F, 8.903F, 2.202F, 8.587F, 2.399F, 8.393F)
          curveTo(2.596F, 8.199F, 2.912F, 8.2F, 3.106F, 8.398F)
          lineToRelative(2.406F, 2.442F)
          lineToRelative(7.645F, -7.206F)
          curveToRelative(0.201F, -0.19F, 0.518F, -0.18F, 0.707F, 0.021F)
          close()        
      }
    }
    return _checkmark16!!
  }

private var _checkmark16: ImageVector? = null
