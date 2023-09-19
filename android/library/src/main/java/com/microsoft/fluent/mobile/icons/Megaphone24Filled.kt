package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Megaphone24: ImageVector
  get() {
    if (_megaphone24 != null) {
      return _megaphone24!!
    }
    _megaphone24 = fluentIcon(name = "Filled.Megaphone24", 24f) {
      materialPath {
          moveTo(21.907F, 5.622F)
          curveTo(21.969F, 5.83F, 22.0F, 6.046F, 22.0F, 6.263F)
          verticalLineTo(17.74F)
          curveToRelative(0.0F, 1.242F, -1.007F, 2.25F, -2.25F, 2.25F)
          curveToRelative(-0.217F, 0.0F, -0.433F, -0.032F, -0.641F, -0.094F)
          lineToRelative(-5.514F, -1.64F)
          curveTo(12.938F, 19.602F, 11.558F, 20.5F, 10.0F, 20.5F)
          curveToRelative(-2.142F, 0.0F, -3.891F, -1.683F, -3.995F, -3.8F)
          lineTo(6.0F, 16.5F)
          lineTo(5.999F, 16.0F)
          lineToRelative(-2.39F, -0.711F)
          curveTo(2.655F, 15.004F, 2.0F, 14.127F, 2.0F, 13.131F)
          verticalLineTo(10.87F)
          curveToRelative(0.0F, -0.995F, 0.655F, -1.873F, 1.61F, -2.156F)
          lineToRelative(15.5F, -4.606F)
          curveToRelative(1.19F, -0.355F, 2.443F, 0.324F, 2.797F, 1.515F)
          close()
          moveTo(7.499F, 16.445F)
          lineTo(7.5F, 16.499F)
          curveTo(7.5F, 17.88F, 8.62F, 19.0F, 10.0F, 19.0F)
          curveToRelative(0.885F, 0.0F, 1.678F, -0.464F, 2.124F, -1.179F)
          lineToRelative(-4.625F, -1.375F)
          close()        
      }
    }
    return _megaphone24!!
  }

private var _megaphone24: ImageVector? = null
