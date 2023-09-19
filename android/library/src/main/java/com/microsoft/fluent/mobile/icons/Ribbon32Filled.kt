package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ribbon32: ImageVector
  get() {
    if (_ribbon32 != null) {
      return _ribbon32!!
    }
    _ribbon32 = fluentIcon(name = "Filled.Ribbon32", 32f) {
      materialPath {
          moveTo(10.0F, 21.813F)
          verticalLineTo(29.0F)
          curveToRelative(0.0F, 0.36F, 0.194F, 0.693F, 0.507F, 0.87F)
          curveToRelative(0.314F, 0.178F, 0.699F, 0.173F, 1.008F, -0.012F)
          lineTo(16.0F, 27.166F)
          lineToRelative(4.485F, 2.692F)
          curveToRelative(0.31F, 0.185F, 0.694F, 0.19F, 1.008F, 0.012F)
          curveTo(21.806F, 29.693F, 22.0F, 29.36F, 22.0F, 29.0F)
          verticalLineToRelative(-7.187F)
          curveToRelative(-1.747F, 1.07F, -3.801F, 1.687F, -6.0F, 1.687F)
          reflectiveCurveToRelative(-4.253F, -0.617F, -6.0F, -1.687F)
          close()
          moveTo(22.0F, 20.0F)
          curveToRelative(-1.671F, 1.256F, -3.749F, 2.0F, -6.0F, 2.0F)
          reflectiveCurveToRelative(-4.329F, -0.744F, -6.0F, -2.0F)
          curveToRelative(-0.123F, -0.091F, -0.243F, -0.186F, -0.36F, -0.284F)
          curveTo(7.416F, 17.883F, 6.0F, 15.107F, 6.0F, 12.0F)
          curveTo(6.0F, 6.477F, 10.477F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          curveToRelative(0.0F, 3.272F, -1.571F, 6.176F, -4.0F, 8.0F)
          close()        
      }
    }
    return _ribbon32!!
  }

private var _ribbon32: ImageVector? = null
