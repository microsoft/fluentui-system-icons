package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shapes28: ImageVector
  get() {
    if (_shapes28 != null) {
      return _shapes28!!
    }
    _shapes28 = fluentIcon(name = "Filled.Shapes28", 28f) {
      materialPath {
          moveTo(9.0F, 14.0F)
          verticalLineToRelative(3.938F)
          curveTo(5.054F, 17.446F, 2.0F, 14.08F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          curveToRelative(4.165F, 0.0F, 7.587F, 3.183F, 7.965F, 7.25F)
          horizontalLineTo(13.75F)
          curveTo(11.127F, 9.25F, 9.0F, 11.377F, 9.0F, 14.0F)
          close()
          moveToRelative(4.75F, -3.75F)
          curveTo(11.679F, 10.25F, 10.0F, 11.929F, 10.0F, 14.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _shapes28!!
  }

private var _shapes28: ImageVector? = null
