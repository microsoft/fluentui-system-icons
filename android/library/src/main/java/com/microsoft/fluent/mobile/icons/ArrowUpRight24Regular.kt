package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpRight24: ImageVector
  get() {
    if (_arrowUpRight24 != null) {
      return _arrowUpRight24!!
    }
    _arrowUpRight24 = fluentIcon(name = "Regular.ArrowUpRight24", 24f) {
      materialPath {
          moveTo(10.75F, 3.0F)
          curveTo(10.337F, 3.0F, 10.0F, 3.336F, 10.0F, 3.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(7.67F)
          lineTo(3.22F, 19.7F)
          curveToRelative(-0.299F, 0.298F, -0.299F, 0.782F, 0.0F, 1.081F)
          curveToRelative(0.299F, 0.299F, 0.783F, 0.299F, 1.081F, 0.0F)
          lineToRelative(15.2F, -15.2F)
          verticalLineToRelative(7.669F)
          curveToRelative(0.0F, 0.414F, 0.335F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-9.5F)
          curveTo(21.0F, 3.336F, 20.665F, 3.0F, 20.25F, 3.0F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _arrowUpRight24!!
  }

private var _arrowUpRight24: ImageVector? = null
