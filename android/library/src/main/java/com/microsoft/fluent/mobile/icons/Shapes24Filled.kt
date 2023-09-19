package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shapes24: ImageVector
  get() {
    if (_shapes24 != null) {
      return _shapes24!!
    }
    _shapes24 = fluentIcon(name = "Filled.Shapes24", 24f) {
      materialPath {
          moveTo(2.0F, 8.75F)
          curveTo(2.0F, 5.022F, 5.022F, 2.0F, 8.75F, 2.0F)
          curveToRelative(3.474F, 0.0F, 6.336F, 2.625F, 6.709F, 6.0F)
          horizontalLineTo(12.25F)
          curveTo(9.903F, 8.0F, 8.0F, 9.903F, 8.0F, 12.25F)
          verticalLineToRelative(3.209F)
          curveToRelative(-3.375F, -0.373F, -6.0F, -3.235F, -6.0F, -6.709F)
          close()
          moveTo(12.25F, 9.0F)
          curveTo(10.455F, 9.0F, 9.0F, 10.455F, 9.0F, 12.25F)
          verticalLineToRelative(6.5F)
          curveTo(9.0F, 20.545F, 10.455F, 22.0F, 12.25F, 22.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-6.5F)
          curveTo(22.0F, 10.455F, 20.545F, 9.0F, 18.75F, 9.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _shapes24!!
  }

private var _shapes24: ImageVector? = null
