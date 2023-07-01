package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cursor16: ImageVector
  get() {
    if (_cursor16 != null) {
      return _cursor16!!
    }
    _cursor16 = fluentIcon(name = "Filled.Cursor16", 16f) {
      materialPath {
          moveTo(4.002F, 2.998F)
          curveToRelative(0.0F, -0.824F, 0.94F, -1.294F, 1.6F, -0.8F)
          lineTo(13.6F, 8.2F)
          curveTo(14.368F, 8.776F, 13.96F, 10.0F, 13.0F, 10.0F)
          horizontalLineTo(9.053F)
          curveToRelative(-0.31F, 0.0F, -0.604F, 0.144F, -0.793F, 0.39F)
          lineToRelative(-2.466F, 3.215F)
          curveToRelative(-0.581F, 0.758F, -1.793F, 0.347F, -1.793F, -0.609F)
          verticalLineTo(2.998F)
          close()        
      }
    }
    return _cursor16!!
  }

private var _cursor16: ImageVector? = null
