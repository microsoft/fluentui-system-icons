package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Laptop24: ImageVector
  get() {
    if (_laptop24 != null) {
      return _laptop24!!
    }
    _laptop24 = fluentIcon(name = "Filled.Laptop24", 24f) {
      materialPath {
          moveTo(2.75F, 16.5F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.283F, 0.693F, -0.649F, 0.743F)
          lineTo(21.25F, 18.0F)
          horizontalLineTo(2.751F)
          curveTo(2.336F, 18.0F, 2.0F, 17.664F, 2.0F, 17.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.744F)
          lineTo(2.75F, 16.5F)
          horizontalLineToRelative(18.498F)
          horizontalLineTo(2.751F)
          close()
          moveTo(18.25F, 5.0F)
          curveTo(19.216F, 5.0F, 20.0F, 5.784F, 20.0F, 6.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.967F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(5.75F)
          curveTo(4.784F, 16.0F, 4.0F, 15.217F, 4.0F, 14.25F)
          verticalLineToRelative(-7.5F)
          curveTo(4.0F, 5.784F, 4.784F, 5.0F, 5.75F, 5.0F)
          horizontalLineToRelative(12.5F)
          close()        
      }
    }
    return _laptop24!!
  }

private var _laptop24: ImageVector? = null
