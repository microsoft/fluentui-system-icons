package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Triangle12: ImageVector
  get() {
    if (_triangle12 != null) {
      return _triangle12!!
    }
    _triangle12 = fluentIcon(name = "Regular.Triangle12", 12f) {
      materialPath {
          moveTo(5.214F, 1.459F)
          curveToRelative(0.349F, -0.612F, 1.223F, -0.612F, 1.572F, 0.0F)
          lineToRelative(4.092F, 7.169F)
          curveTo(11.226F, 9.238F, 10.789F, 10.0F, 10.09F, 10.0F)
          horizontalLineTo(1.91F)
          curveToRelative(-0.7F, 0.0F, -1.136F, -0.762F, -0.788F, -1.372F)
          lineToRelative(4.092F, -7.17F)
          close()
          moveTo(6.0F, 2.119F)
          lineTo(2.083F, 8.983F)
          horizontalLineToRelative(7.834F)
          lineTo(6.0F, 2.119F)
          close()        
      }
    }
    return _triangle12!!
  }

private var _triangle12: ImageVector? = null
