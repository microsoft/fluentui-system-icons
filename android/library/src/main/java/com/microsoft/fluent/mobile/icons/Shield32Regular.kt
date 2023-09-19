package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shield32: ImageVector
  get() {
    if (_shield32 != null) {
      return _shield32!!
    }
    _shield32 = fluentIcon(name = "Regular.Shield32", 32f) {
      materialPath {
          moveTo(15.445F, 2.168F)
          curveToRelative(0.336F, -0.224F, 0.774F, -0.224F, 1.11F, 0.0F)
          curveToRelative(2.916F, 1.944F, 6.76F, 3.859F, 11.544F, 4.337F)
          curveTo(28.611F, 6.556F, 29.0F, 6.986F, 29.0F, 7.5F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, 3.88F, -2.124F, 7.17F, -4.701F, 9.546F)
          curveToRelative(-2.572F, 2.372F, -5.737F, 3.971F, -8.115F, 4.417F)
          lineTo(16.0F, 29.997F)
          lineToRelative(-0.184F, -0.034F)
          curveToRelative(-2.378F, -0.446F, -5.543F, -2.045F, -8.115F, -4.417F)
          curveTo(5.124F, 23.17F, 3.0F, 19.88F, 3.0F, 16.0F)
          verticalLineTo(7.5F)
          curveToRelative(0.0F, -0.514F, 0.39F, -0.944F, 0.9F, -0.995F)
          curveToRelative(4.785F, -0.478F, 8.63F, -2.393F, 11.545F, -4.337F)
          close()
          moveTo(5.0F, 8.388F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, 3.12F, 1.715F, 5.916F, 4.057F, 8.076F)
          curveToRelative(2.275F, 2.098F, 5.007F, 3.47F, 6.943F, 3.884F)
          curveToRelative(1.936F, -0.415F, 4.668F, -1.786F, 6.943F, -3.884F)
          curveTo(25.285F, 21.916F, 27.0F, 19.12F, 27.0F, 16.0F)
          verticalLineTo(8.388F)
          curveToRelative(-4.496F, -0.616F, -8.166F, -2.38F, -11.0F, -4.194F)
          curveToRelative(-2.834F, 1.814F, -6.504F, 3.578F, -11.0F, 4.194F)
          close()        
      }
    }
    return _shield32!!
  }

private var _shield32: ImageVector? = null
