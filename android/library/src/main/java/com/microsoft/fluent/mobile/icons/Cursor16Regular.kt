package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cursor16: ImageVector
  get() {
    if (_cursor16 != null) {
      return _cursor16!!
    }
    _cursor16 = fluentIcon(name = "Regular.Cursor16", 16f) {
      materialPath {
          moveTo(4.002F, 2.999F)
          curveToRelative(0.0F, -0.825F, 0.94F, -1.295F, 1.6F, -0.8F)
          lineTo(13.6F, 8.2F)
          curveTo(14.368F, 8.777F, 13.96F, 10.0F, 13.0F, 10.0F)
          horizontalLineTo(9.053F)
          curveToRelative(-0.31F, 0.0F, -0.604F, 0.144F, -0.793F, 0.391F)
          lineToRelative(-2.466F, 3.214F)
          curveToRelative(-0.581F, 0.758F, -1.793F, 0.347F, -1.793F, -0.609F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(8.997F, 6.0F)
          lineTo(5.002F, 3.0F)
          verticalLineToRelative(9.997F)
          lineToRelative(2.465F, -3.213F)
          curveTo(7.846F, 9.289F, 8.432F, 9.0F, 9.054F, 9.0F)
          horizontalLineTo(13.0F)
          close()        
      }
    }
    return _cursor16!!
  }

private var _cursor16: ImageVector? = null
