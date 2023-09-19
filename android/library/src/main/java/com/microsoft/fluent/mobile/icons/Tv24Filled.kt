package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tv24: ImageVector
  get() {
    if (_tv24 != null) {
      return _tv24!!
    }
    _tv24 = fluentIcon(name = "Filled.Tv24", 24f) {
      materialPath {
          moveTo(4.75F, 4.0F)
          curveTo(3.231F, 4.0F, 2.0F, 5.231F, 2.0F, 6.75F)
          verticalLineToRelative(8.5F)
          curveTo(2.0F, 16.769F, 3.231F, 18.0F, 4.75F, 18.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-8.5F)
          curveTo(22.0F, 5.231F, 20.769F, 4.0F, 19.25F, 4.0F)
          horizontalLineTo(4.75F)
          close()
          moveTo(5.0F, 20.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(18.664F, 21.0F, 18.25F, 21.0F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 21.0F, 5.0F, 20.664F, 5.0F, 20.25F)
          close()        
      }
    }
    return _tv24!!
  }

private var _tv24: ImageVector? = null
