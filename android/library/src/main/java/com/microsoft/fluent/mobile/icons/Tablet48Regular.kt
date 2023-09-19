package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Tablet48: ImageVector
  get() {
    if (_tablet48 != null) {
      return _tablet48!!
    }
    _tablet48 = fluentIcon(name = "Regular.Tablet48", 48f) {
      materialPath {
          moveTo(20.0F, 31.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(19.31F, 33.5F, 20.0F, 33.5F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(28.69F, 31.0F, 28.0F, 31.0F)
          horizontalLineToRelative(-8.0F)
          close()
          moveTo(8.25F, 8.0F)
          curveTo(5.903F, 8.0F, 4.0F, 9.903F, 4.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(4.0F, 38.097F, 5.903F, 40.0F, 8.25F, 40.0F)
          horizontalLineToRelative(31.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineToRelative(-23.5F)
          curveTo(44.0F, 9.903F, 42.097F, 8.0F, 39.75F, 8.0F)
          horizontalLineTo(8.25F)
          close()
          moveTo(6.5F, 12.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(31.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 0.967F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(8.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineToRelative(-23.5F)
          close()        
      }
    }
    return _tablet48!!
  }

private var _tablet48: ImageVector? = null
