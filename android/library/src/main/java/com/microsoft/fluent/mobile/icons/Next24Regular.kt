package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Next24: ImageVector
  get() {
    if (_next24 != null) {
      return _next24!!
    }
    _next24 = fluentIcon(name = "Regular.Next24", 24f) {
      materialPath {
          moveTo(3.0F, 4.753F)
          curveToRelative(0.0F, -1.408F, 1.578F, -2.24F, 2.74F, -1.444F)
          lineToRelative(10.498F, 7.194F)
          curveToRelative(1.01F, 0.692F, 1.015F, 2.18F, 0.01F, 2.88F)
          lineTo(5.749F, 20.685F)
          curveTo(4.59F, 21.492F, 3.0F, 20.66F, 3.0F, 19.248F)
          verticalLineTo(4.753F)
          close()
          moveToRelative(1.891F, -0.206F)
          curveToRelative(-0.165F, -0.114F, -0.39F, 0.005F, -0.39F, 0.206F)
          verticalLineToRelative(14.495F)
          curveToRelative(0.0F, 0.202F, 0.226F, 0.32F, 0.392F, 0.205F)
          lineToRelative(10.498F, -7.301F)
          curveToRelative(0.144F, -0.1F, 0.143F, -0.313F, -0.001F, -0.412F)
          lineTo(4.89F, 4.547F)
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
