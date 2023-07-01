package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown48: ImageVector
  get() {
    if (_arrowDown48 != null) {
      return _arrowDown48!!
    }
    _arrowDown48 = fluentIcon(name = "Regular.ArrowDown48", 48f) {
      materialPath {
          moveTo(25.25F, 5.25F)
          curveTo(25.25F, 4.56F, 24.69F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(32.446F)
          lineTo(10.141F, 24.874F)
          curveToRelative(-0.484F, -0.493F, -1.275F, -0.5F, -1.767F, -0.015F)
          curveToRelative(-0.493F, 0.484F, -0.5F, 1.275F, -0.015F, 1.767F)
          lineToRelative(14.75F, 15.0F)
          curveTo(23.344F, 41.866F, 23.665F, 42.0F, 24.0F, 42.0F)
          curveToRelative(0.335F, 0.0F, 0.656F, -0.135F, 0.891F, -0.374F)
          lineToRelative(14.75F, -15.0F)
          curveToRelative(0.484F, -0.492F, 0.478F, -1.283F, -0.015F, -1.767F)
          curveToRelative(-0.492F, -0.484F, -1.283F, -0.478F, -1.767F, 0.015F)
          lineTo(25.25F, 37.696F)
          verticalLineTo(5.25F)
          close()        
      }
    }
    return _arrowDown48!!
  }

private var _arrowDown48: ImageVector? = null
