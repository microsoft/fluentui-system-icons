package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorLineAccent20: ImageVector
  get() {
    if (_colorLineAccent20 != null) {
      return _colorLineAccent20!!
    }
    _colorLineAccent20 = fluentIcon(name = "Regular.ColorLineAccent20", 20f) {
      materialPath {
          moveTo(4.095F, 13.0F)
          curveToRelative(0.246F, 0.684F, 0.978F, 1.148F, 1.772F, 0.952F)
          lineToRelative(3.112F, -0.767F)
          lineToRelative(0.21F, -0.064F)
          lineToRelative(0.025F, -0.009F)
          curveToRelative(0.088F, -0.033F, 0.175F, -0.07F, 0.26F, -0.112F)
          horizontalLineTo(16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(0.095F)
          close()        
      }
    }
    return _colorLineAccent20!!
  }

private var _colorLineAccent20: ImageVector? = null
