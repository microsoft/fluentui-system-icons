package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tablet48: ImageVector
  get() {
    if (_tablet48 != null) {
      return _tablet48!!
    }
    _tablet48 = fluentIcon(name = "Filled.Tablet48", 48f) {
      materialPath {
          moveTo(4.0F, 12.25F)
          curveTo(4.0F, 9.903F, 5.903F, 8.0F, 8.25F, 8.0F)
          horizontalLineToRelative(31.5F)
          curveTo(42.097F, 8.0F, 44.0F, 9.903F, 44.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineTo(8.25F)
          curveTo(5.903F, 40.0F, 4.0F, 38.097F, 4.0F, 35.75F)
          verticalLineToRelative(-23.5F)
          close()
          moveTo(20.0F, 31.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(19.31F, 33.5F, 20.0F, 33.5F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(28.69F, 31.0F, 28.0F, 31.0F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _tablet48!!
  }

private var _tablet48: ImageVector? = null
