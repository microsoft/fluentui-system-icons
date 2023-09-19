package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Megaphone16: ImageVector
  get() {
    if (_megaphone16 != null) {
      return _megaphone16!!
    }
    _megaphone16 = fluentIcon(name = "Regular.Megaphone16", 16f) {
      materialPath {
          moveTo(15.0F, 3.503F)
          curveToRelative(0.0F, -1.026F, -1.008F, -1.75F, -1.98F, -1.421F)
          lineToRelative(-11.0F, 3.715F)
          curveTo(1.41F, 6.003F, 1.0F, 6.574F, 1.0F, 7.217F)
          verticalLineToRelative(1.566F)
          curveToRelative(0.0F, 0.643F, 0.41F, 1.214F, 1.018F, 1.42F)
          lineTo(4.0F, 10.877F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(1.355F, 0.0F, 2.5F, -0.898F, 2.873F, -2.132F)
          lineToRelative(3.145F, 1.067F)
          curveToRelative(0.973F, 0.33F, 1.982F, -0.393F, 1.982F, -1.42F)
          verticalLineTo(3.503F)
          close()
          moveTo(13.34F, 3.03F)
          curveTo(13.664F, 2.92F, 14.0F, 3.161F, 14.0F, 3.503F)
          verticalLineToRelative(9.012F)
          curveToRelative(0.0F, 0.342F, -0.336F, 0.583F, -0.66F, 0.473F)
          lineToRelative(-11.0F, -3.731F)
          curveTo(2.135F, 9.187F, 2.0F, 8.997F, 2.0F, 8.783F)
          verticalLineTo(7.218F)
          curveToRelative(0.0F, -0.215F, 0.137F, -0.405F, 0.34F, -0.474F)
          lineToRelative(11.0F, -3.715F)
          close()
          moveToRelative(-4.416F, 9.517F)
          curveTo(8.687F, 13.386F, 7.915F, 14.0F, 7.0F, 14.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.896F, -2.0F, -2.0F)
          verticalLineToRelative(-0.785F)
          lineToRelative(3.924F, 1.332F)
          close()        
      }
    }
    return _megaphone16!!
  }

private var _megaphone16: ImageVector? = null
