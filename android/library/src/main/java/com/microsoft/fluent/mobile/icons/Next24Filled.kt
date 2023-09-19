package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Next24: ImageVector
  get() {
    if (_next24 != null) {
      return _next24!!
    }
    _next24 = fluentIcon(name = "Filled.Next24", 24f) {
      materialPath {
          moveTo(3.0F, 4.753F)
          curveToRelative(0.0F, -1.408F, 1.578F, -2.24F, 2.74F, -1.444F)
          lineToRelative(10.498F, 7.194F)
          curveToRelative(1.01F, 0.692F, 1.015F, 2.18F, 0.01F, 2.88F)
          lineTo(5.749F, 20.685F)
          curveTo(4.59F, 21.492F, 3.0F, 20.66F, 3.0F, 19.248F)
          verticalLineTo(4.753F)
          close()
          moveTo(21.0F, 3.75F)
          curveTo(21.0F, 3.336F, 20.664F, 3.0F, 20.25F, 3.0F)
          reflectiveCurveTo(19.5F, 3.336F, 19.5F, 3.75F)
          verticalLineToRelative(16.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(21.0F, 20.664F, 21.0F, 20.25F)
          verticalLineTo(3.75F)
          close()        
      }
    }
    return _next24!!
  }

private var _next24: ImageVector? = null
