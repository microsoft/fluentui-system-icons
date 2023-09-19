package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BowlChopsticks16: ImageVector
  get() {
    if (_bowlChopsticks16 != null) {
      return _bowlChopsticks16!!
    }
    _bowlChopsticks16 = fluentIcon(name = "Filled.BowlChopsticks16", 16f) {
      materialPath {
          moveTo(2.732F, 1.078F)
          curveToRelative(0.232F, -0.148F, 0.542F, -0.08F, 0.69F, 0.154F)
          lineTo(7.092F, 7.0F)
          horizontalLineToRelative(1.815F)
          lineTo(5.578F, 1.768F)
          curveToRelative(-0.148F, -0.232F, -0.08F, -0.542F, 0.154F, -0.69F)
          curveToRelative(0.232F, -0.148F, 0.542F, -0.08F, 0.69F, 0.154F)
          lineTo(10.092F, 7.0F)
          horizontalLineToRelative(4.437F)
          curveTo(14.79F, 7.0F, 15.0F, 7.21F, 15.0F, 7.47F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.695F, -0.101F, 1.366F, -0.29F, 2.0F)
          horizontalLineTo(1.29F)
          curveTo(1.1F, 9.366F, 1.0F, 8.695F, 1.0F, 8.0F)
          verticalLineTo(7.47F)
          curveTo(1.0F, 7.21F, 1.21F, 7.0F, 1.47F, 7.0F)
          horizontalLineToRelative(4.437F)
          lineTo(2.578F, 1.768F)
          curveToRelative(-0.148F, -0.232F, -0.08F, -0.542F, 0.154F, -0.69F)
          close()
          moveTo(8.0F, 15.0F)
          curveToRelative(-2.792F, 0.0F, -5.203F, -1.635F, -6.326F, -4.0F)
          horizontalLineToRelative(12.652F)
          curveToRelative(-1.123F, 2.365F, -3.534F, 4.0F, -6.326F, 4.0F)
          close()        
      }
    }
    return _bowlChopsticks16!!
  }

private var _bowlChopsticks16: ImageVector? = null
