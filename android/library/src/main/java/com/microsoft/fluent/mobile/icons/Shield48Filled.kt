package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shield48: ImageVector
  get() {
    if (_shield48 != null) {
      return _shield48!!
    }
    _shield48 = fluentIcon(name = "Filled.Shield48", 48f) {
      materialPath {
          moveTo(24.865F, 4.348F)
          curveToRelative(-0.484F, -0.464F, -1.247F, -0.464F, -1.73F, 0.0F)
          curveToRelative(-2.759F, 2.643F, -6.685F, 4.077F, -10.037F, 4.84F)
          curveToRelative(-1.66F, 0.376F, -3.139F, 0.58F, -4.203F, 0.69F)
          curveTo(8.366F, 9.932F, 7.94F, 9.963F, 7.65F, 9.98F)
          curveTo(7.505F, 9.99F, 7.395F, 9.994F, 7.322F, 9.997F)
          lineTo(7.242F, 10.0F)
          horizontalLineTo(7.22F)
          curveTo(6.542F, 10.017F, 6.0F, 10.571F, 6.0F, 11.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 4.837F, 1.243F, 9.658F, 4.098F, 13.775F)
          curveToRelative(2.861F, 4.126F, 7.29F, 7.469F, 13.529F, 9.418F)
          curveToRelative(0.243F, 0.076F, 0.503F, 0.076F, 0.746F, 0.0F)
          curveTo(36.94F, 40.016F, 42.0F, 30.497F, 42.0F, 21.0F)
          verticalLineToRelative(-9.75F)
          curveToRelative(0.0F, -0.679F, -0.542F, -1.234F, -1.22F, -1.25F)
          horizontalLineToRelative(-0.022F)
          lineToRelative(-0.08F, -0.003F)
          curveToRelative(-0.073F, -0.003F, -0.183F, -0.008F, -0.328F, -0.017F)
          curveToRelative(-0.29F, -0.017F, -0.715F, -0.048F, -1.246F, -0.102F)
          curveToRelative(-1.063F, -0.11F, -2.543F, -0.314F, -4.202F, -0.69F)
          curveToRelative(-3.353F, -0.763F, -7.279F, -2.197F, -10.037F, -4.84F)
          close()        
      }
    }
    return _shield48!!
  }

private var _shield48: ImageVector? = null
