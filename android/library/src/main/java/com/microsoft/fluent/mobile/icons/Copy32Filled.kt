package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Copy32: ImageVector
  get() {
    if (_copy32 != null) {
      return _copy32!!
    }
    _copy32 = fluentIcon(name = "Filled.Copy32", 32f) {
      materialPath {
          moveTo(8.5F, 5.25F)
          curveTo(8.5F, 3.455F, 9.955F, 2.0F, 11.75F, 2.0F)
          horizontalLineToRelative(12.0F)
          curveTo(25.545F, 2.0F, 27.0F, 3.455F, 27.0F, 5.25F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-12.0F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          verticalLineToRelative(-18.0F)
          close()
          moveTo(5.0F, 8.75F)
          curveToRelative(0.0F, -1.352F, 0.825F, -2.511F, 2.0F, -3.001F)
          verticalLineToRelative(17.75F)
          curveToRelative(0.0F, 2.486F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineToRelative(11.751F)
          curveToRelative(-0.49F, 1.175F, -1.649F, 2.0F, -3.001F, 2.0F)
          horizontalLineTo(11.5F)
          curveTo(7.91F, 30.0F, 5.0F, 27.09F, 5.0F, 23.5F)
          verticalLineTo(8.75F)
          close()        
      }
    }
    return _copy32!!
  }

private var _copy32: ImageVector? = null
