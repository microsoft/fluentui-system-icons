package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flash20: ImageVector
  get() {
    if (_flash20 != null) {
      return _flash20!!
    }
    _flash20 = fluentIcon(name = "Filled.Flash20", 20f) {
      materialPath {
          moveTo(7.212F, 2.0F)
          curveToRelative(-0.474F, 0.0F, -0.89F, 0.314F, -1.021F, 0.77F)
          lineToRelative(-2.25F, 7.874F)
          curveToRelative(-0.194F, 0.679F, 0.316F, 1.354F, 1.022F, 1.354F)
          horizontalLineTo(6.23F)
          lineToRelative(-1.17F, 4.68F)
          curveToRelative(-0.264F, 1.055F, 1.041F, 1.777F, 1.796F, 0.995F)
          lineToRelative(8.676F, -8.858F)
          lineToRelative(0.004F, -0.004F)
          curveTo(16.176F, 8.144F, 15.716F, 7.0F, 14.769F, 7.0F)
          horizontalLineToRelative(-2.564F)
          lineToRelative(1.262F, -3.594F)
          lineToRelative(0.002F, -0.008F)
          curveTo(13.7F, 2.71F, 13.187F, 2.0F, 12.461F, 2.0F)
          horizontalLineTo(7.212F)
          close()        
      }
    }
    return _flash20!!
  }

private var _flash20: ImageVector? = null
