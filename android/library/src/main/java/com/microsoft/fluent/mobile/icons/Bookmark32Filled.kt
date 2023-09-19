package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Bookmark32: ImageVector
  get() {
    if (_bookmark32 != null) {
      return _bookmark32!!
    }
    _bookmark32 = fluentIcon(name = "Filled.Bookmark32", 32f) {
      materialPath {
          moveTo(10.2F, 3.0F)
          curveTo(7.88F, 3.0F, 6.0F, 4.88F, 6.0F, 7.2F)
          verticalLineTo(28.0F)
          curveToRelative(0.0F, 0.375F, 0.21F, 0.72F, 0.545F, 0.89F)
          curveToRelative(0.334F, 0.171F, 0.736F, 0.14F, 1.04F, -0.08F)
          lineTo(16.0F, 22.735F)
          lineToRelative(8.415F, 6.077F)
          curveToRelative(0.304F, 0.22F, 0.706F, 0.25F, 1.04F, 0.08F)
          curveTo(25.79F, 28.718F, 26.0F, 28.375F, 26.0F, 28.0F)
          verticalLineTo(7.2F)
          curveTo(26.0F, 4.88F, 24.12F, 3.0F, 21.8F, 3.0F)
          horizontalLineTo(10.2F)
          close()        
      }
    }
    return _bookmark32!!
  }

private var _bookmark32: ImageVector? = null
