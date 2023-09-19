package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flash16: ImageVector
  get() {
    if (_flash16 != null) {
      return _flash16!!
    }
    _flash16 = fluentIcon(name = "Filled.Flash16", 16f) {
      materialPath {
          moveTo(5.873F, 1.0F)
          curveTo(5.43F, 1.0F, 5.04F, 1.29F, 4.915F, 1.714F)
          lineTo(3.03F, 8.036F)
          curveTo(2.887F, 8.516F, 3.248F, 9.0F, 3.749F, 9.0F)
          horizontalLineToRelative(1.584F)
          lineToRelative(-1.28F, 4.389F)
          curveToRelative(-0.384F, 1.316F, 1.324F, 2.2F, 2.178F, 1.128F)
          lineToRelative(6.607F, -8.3F)
          curveTo(13.229F, 5.726F, 12.879F, 5.0F, 12.25F, 5.0F)
          horizontalLineToRelative(-2.03F)
          lineToRelative(0.994F, -2.649F)
          curveTo(11.46F, 1.697F, 10.977F, 1.0F, 10.279F, 1.0F)
          horizontalLineTo(5.873F)
          close()        
      }
    }
    return _flash16!!
  }

private var _flash16: ImageVector? = null
