package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Triangle20: ImageVector
  get() {
    if (_triangle20 != null) {
      return _triangle20!!
    }
    _triangle20 = fluentIcon(name = "Regular.Triangle20", 20f) {
      materialPath {
          moveTo(2.502F, 18.0F)
          curveToRelative(-1.13F, 0.0F, -1.854F, -1.2F, -1.326F, -2.2F)
          lineToRelative(7.395F, -14.0F)
          curveToRelative(0.559F, -1.06F, 2.073F, -1.068F, 2.645F, -0.016F)
          lineToRelative(7.6F, 14.002F)
          curveTo(19.358F, 16.785F, 18.635F, 18.0F, 17.497F, 18.0F)
          horizontalLineTo(2.502F)
          close()
          moveTo(2.06F, 16.267F)
          curveTo(1.884F, 16.6F, 2.126F, 17.0F, 2.502F, 17.0F)
          horizontalLineToRelative(14.995F)
          curveToRelative(0.38F, 0.0F, 0.62F, -0.405F, 0.44F, -0.738F)
          lineToRelative(-7.6F, -14.001F)
          curveToRelative(-0.19F, -0.35F, -0.696F, -0.348F, -0.882F, 0.005F)
          lineTo(2.06F, 16.267F)
          close()        
      }
    }
    return _triangle20!!
  }

private var _triangle20: ImageVector? = null
