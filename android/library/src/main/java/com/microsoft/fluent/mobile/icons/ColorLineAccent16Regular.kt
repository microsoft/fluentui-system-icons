package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorLineAccent16: ImageVector
  get() {
    if (_colorLineAccent16 != null) {
      return _colorLineAccent16!!
    }
    _colorLineAccent16 = fluentIcon(name = "Regular.ColorLineAccent16", 16f) {
      materialPath {
          moveTo(2.007F, 11.414F)
          curveToRelative(0.072F, 0.116F, 0.157F, 0.225F, 0.256F, 0.323F)
          curveToRelative(0.327F, 0.328F, 0.771F, 0.512F, 1.234F, 0.513F)
          curveToRelative(0.158F, 0.0F, 0.316F, -0.02F, 0.468F, -0.063F)
          lineToRelative(2.397F, -0.655F)
          horizontalLineToRelative(0.001F)
          curveTo(6.753F, 11.423F, 7.12F, 11.242F, 7.44F, 11.0F)
          horizontalLineToRelative(6.06F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 14.0F, 2.0F, 13.776F, 2.0F, 13.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.03F, 0.002F, -0.058F, 0.007F, -0.086F)
          close()        
      }
    }
    return _colorLineAccent16!!
  }

private var _colorLineAccent16: ImageVector? = null
