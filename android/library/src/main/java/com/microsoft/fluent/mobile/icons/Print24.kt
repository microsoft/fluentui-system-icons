package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Print24: ImageVector
  get() {
    if (_print24 != null) {
      return _print24!!
    }
    _print24 = fluentIcon(name = "Filled.Print24", 24f) {
      materialPath {
          moveTo(18.0F, 17.5F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.007F, 21.0F, 6.0F, 19.993F, 6.0F, 18.75F)
          verticalLineToRelative(-1.251F)
          lineTo(4.25F, 17.5F)
          curveTo(3.007F, 17.5F, 2.0F, 16.493F, 2.0F, 15.25F)
          verticalLineTo(9.254F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          lineToRelative(0.749F, -0.001F)
          lineTo(6.0F, 5.25F)
          curveTo(6.0F, 4.007F, 7.007F, 3.0F, 8.25F, 3.0F)
          horizontalLineToRelative(7.502F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(0.753F)
          horizontalLineToRelative(0.75F)
          curveToRelative(1.795F, 0.002F, 3.25F, 1.456F, 3.252F, 3.25F)
          lineToRelative(0.003F, 5.997F)
          curveToRelative(0.002F, 1.242F, -1.005F, 2.25F, -2.248F, 2.25F)
          horizontalLineTo(18.0F)
          close()
          moveToRelative(-2.25F, -4.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(0.002F, -9.0F)
          horizontalLineTo(8.25F)
          curveTo(7.836F, 4.5F, 7.5F, 4.836F, 7.5F, 5.25F)
          lineTo(7.499F, 6.003F)
          horizontalLineToRelative(9.003F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -0.414F, -0.335F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _print24!!
  }

private var _print24: ImageVector? = null
