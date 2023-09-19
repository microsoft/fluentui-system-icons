package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleHalfFill24: ImageVector
  get() {
    if (_circleHalfFill24 != null) {
      return _circleHalfFill24!!
    }
    _circleHalfFill24 = fluentIcon(name = "Regular.CircleHalfFill24", 24f) {
      materialPath {
          moveTo(2.028F, 11.25F)
          curveTo(2.41F, 6.077F, 6.729F, 2.0F, 12.0F, 2.0F)
          curveToRelative(5.27F, 0.0F, 9.589F, 4.077F, 9.972F, 9.25F)
          horizontalLineTo(22.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 5.523F, -4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          verticalLineToRelative(-0.75F)
          horizontalLineToRelative(0.028F)
          close()
          moveTo(12.0F, 3.5F)
          curveToRelative(-4.442F, 0.0F, -8.088F, 3.407F, -8.467F, 7.75F)
          horizontalLineToRelative(16.934F)
          curveTo(20.087F, 6.907F, 16.442F, 3.5F, 12.0F, 3.5F)
          close()        
      }
    }
    return _circleHalfFill24!!
  }

private var _circleHalfFill24: ImageVector? = null
