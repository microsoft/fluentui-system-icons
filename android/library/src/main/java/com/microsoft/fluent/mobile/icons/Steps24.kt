package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Steps24: ImageVector
  get() {
    if (_steps24 != null) {
      return _steps24!!
    }
    _steps24 = fluentIcon(name = "Filled.Steps24", 24f) {
      materialPath {
          moveTo(12.0F, 3.375F)
          curveTo(12.0F, 2.615F, 12.616F, 2.0F, 13.375F, 2.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.76F, 0.0F, 1.375F, 0.616F, 1.375F, 1.375F)
          verticalLineTo(9.0F)
          horizontalLineTo(17.0F)
          verticalLineTo(3.5F)
          horizontalLineToRelative(-3.5F)
          verticalLineToRelative(3.625F)
          curveToRelative(0.0F, 0.76F, -0.616F, 1.375F, -1.375F, 1.375F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(3.625F)
          curveToRelative(0.0F, 0.76F, -0.616F, 1.375F, -1.375F, 1.375F)
          horizontalLineTo(3.5F)
          verticalLineTo(17.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(1.5F)
          horizontalLineTo(3.375F)
          curveTo(2.615F, 18.5F, 2.0F, 17.884F, 2.0F, 17.125F)
          verticalLineToRelative(-3.75F)
          curveTo(2.0F, 12.615F, 2.616F, 12.0F, 3.375F, 12.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(8.375F)
          curveTo(7.0F, 7.615F, 7.616F, 7.0F, 8.375F, 7.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(3.375F)
          close()
          moveToRelative(3.0F, 8.0F)
          curveTo(15.0F, 10.615F, 15.616F, 10.0F, 16.375F, 10.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.76F, 0.0F, 1.375F, 0.616F, 1.375F, 1.375F)
          verticalLineToRelative(6.875F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-6.875F)
          curveToRelative(-0.76F, 0.0F, -1.375F, -0.616F, -1.375F, -1.375F)
          verticalLineToRelative(-3.75F)
          curveTo(10.0F, 15.615F, 10.616F, 15.0F, 11.375F, 15.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-3.625F)
          close()        
      }
    }
    return _steps24!!
  }

private var _steps24: ImageVector? = null
