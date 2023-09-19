package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColor16: ImageVector
  get() {
    if (_textColor16 != null) {
      return _textColor16!!
    }
    _textColor16 = fluentIcon(name = "Filled.TextColor16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          curveToRelative(0.2F, 0.0F, 0.38F, 0.12F, 0.46F, 0.303F)
          lineToRelative(3.0F, 7.0F)
          curveToRelative(0.108F, 0.254F, -0.01F, 0.548F, -0.263F, 0.657F)
          curveToRelative(-0.254F, 0.108F, -0.548F, -0.01F, -0.657F, -0.263F)
          lineTo(9.813F, 7.0F)
          horizontalLineTo(6.187F)
          lineTo(5.46F, 8.697F)
          curveTo(5.35F, 8.951F, 5.057F, 9.068F, 4.803F, 8.96F)
          curveTo(4.549F, 8.85F, 4.432F, 8.557F, 4.54F, 8.303F)
          lineToRelative(3.0F, -7.0F)
          curveTo(7.62F, 1.119F, 7.8F, 1.0F, 8.0F, 1.0F)
          close()
          moveTo(6.615F, 6.0F)
          horizontalLineToRelative(2.77F)
          lineTo(8.0F, 2.77F)
          lineTo(6.615F, 6.0F)
          close()
          moveTo(2.0F, 11.5F)
          curveTo(2.0F, 10.672F, 2.672F, 10.0F, 3.5F, 10.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.672F, 15.0F, 2.0F, 14.328F, 2.0F, 13.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _textColor16!!
  }

private var _textColor16: ImageVector? = null
