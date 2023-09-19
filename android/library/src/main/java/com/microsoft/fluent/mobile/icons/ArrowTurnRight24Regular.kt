package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRight24: ImageVector
  get() {
    if (_arrowTurnRight24 != null) {
      return _arrowTurnRight24!!
    }
    _arrowTurnRight24 = fluentIcon(name = "Regular.ArrowTurnRight24", 24f) {
      materialPath {
          moveTo(16.28F, 3.22F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.22F, 3.22F)
          horizontalLineToRelative(-7.69F)
          curveToRelative(-2.347F, 0.0F, -4.25F, 1.903F, -4.25F, 4.25F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(8.0F, 20.414F, 8.0F, 20.0F)
          verticalLineToRelative(-8.25F)
          curveTo(8.0F, 10.231F, 9.231F, 9.0F, 10.75F, 9.0F)
          horizontalLineToRelative(7.689F)
          lineToRelative(-3.22F, 3.22F)
          curveToRelative(-0.292F, 0.293F, -0.292F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.294F, 0.293F, 0.769F, 0.293F, 1.061F, 0.0F)
          lineToRelative(4.5F, -4.5F)
          curveTo(20.921F, 8.64F, 21.0F, 8.448F, 21.0F, 8.25F)
          curveToRelative(0.0F, -0.2F, -0.079F, -0.39F, -0.22F, -0.53F)
          lineToRelative(-4.5F, -4.5F)
          close()        
      }
    }
    return _arrowTurnRight24!!
  }

private var _arrowTurnRight24: ImageVector? = null
