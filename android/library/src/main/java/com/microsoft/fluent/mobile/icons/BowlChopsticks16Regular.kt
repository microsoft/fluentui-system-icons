package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BowlChopsticks16: ImageVector
  get() {
    if (_bowlChopsticks16 != null) {
      return _bowlChopsticks16!!
    }
    _bowlChopsticks16 = fluentIcon(name = "Regular.BowlChopsticks16", 16f) {
      materialPath {
          moveTo(2.732F, 1.078F)
          curveToRelative(0.232F, -0.148F, 0.542F, -0.08F, 0.69F, 0.154F)
          lineTo(7.092F, 7.0F)
          horizontalLineToRelative(1.815F)
          lineTo(5.578F, 1.768F)
          curveToRelative(-0.148F, -0.232F, -0.08F, -0.542F, 0.154F, -0.69F)
          curveToRelative(0.232F, -0.148F, 0.542F, -0.08F, 0.69F, 0.154F)
          lineTo(10.092F, 7.0F)
          horizontalLineTo(14.5F)
          curveTo(14.776F, 7.0F, 15.0F, 7.224F, 15.0F, 7.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          verticalLineTo(7.5F)
          curveTo(1.0F, 7.224F, 1.224F, 7.0F, 1.5F, 7.0F)
          horizontalLineToRelative(4.407F)
          lineTo(2.578F, 1.768F)
          curveToRelative(-0.148F, -0.232F, -0.08F, -0.542F, 0.154F, -0.69F)
          close()
          moveTo(2.342F, 10.0F)
          horizontalLineToRelative(11.317F)
          curveTo(13.879F, 9.374F, 14.0F, 8.701F, 14.0F, 8.0F)
          horizontalLineTo(2.0F)
          curveToRelative(0.0F, 0.701F, 0.12F, 1.374F, 0.341F, 2.0F)
          close()
          moveToRelative(0.46F, 1.0F)
          curveTo(3.84F, 12.793F, 5.78F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(4.16F, -1.207F, 5.197F, -3.0F)
          horizontalLineTo(2.803F)
          close()        
      }
    }
    return _bowlChopsticks16!!
  }

private var _bowlChopsticks16: ImageVector? = null
