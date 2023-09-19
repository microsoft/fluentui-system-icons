package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Copy32: ImageVector
  get() {
    if (_copy32 != null) {
      return _copy32!!
    }
    _copy32 = fluentIcon(name = "Regular.Copy32", 32f) {
      materialPath {
          moveTo(11.75F, 2.0F)
          curveTo(9.955F, 2.0F, 8.5F, 3.455F, 8.5F, 5.25F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-18.0F)
          curveTo(27.0F, 3.455F, 25.545F, 2.0F, 23.75F, 2.0F)
          horizontalLineToRelative(-12.0F)
          close()
          moveTo(10.5F, 5.25F)
          curveTo(10.5F, 4.56F, 11.06F, 4.0F, 11.75F, 4.0F)
          horizontalLineToRelative(12.0F)
          curveTo(24.44F, 4.0F, 25.0F, 4.56F, 25.0F, 5.25F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-12.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineToRelative(-18.0F)
          close()
          moveTo(7.0F, 5.749F)
          curveToRelative(-1.175F, 0.49F, -2.0F, 1.649F, -2.0F, 3.0F)
          verticalLineTo(23.5F)
          curveToRelative(0.0F, 3.59F, 2.91F, 6.5F, 6.5F, 6.5F)
          horizontalLineToRelative(8.75F)
          curveToRelative(1.352F, 0.0F, 2.511F, -0.825F, 3.001F, -2.0F)
          horizontalLineTo(11.5F)
          curveTo(9.015F, 28.0F, 7.0F, 25.986F, 7.0F, 23.5F)
          verticalLineTo(5.75F)
          close()        
      }
    }
    return _copy32!!
  }

private var _copy32: ImageVector? = null
