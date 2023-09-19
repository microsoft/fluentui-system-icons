package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCurveDownLeft16: ImageVector
  get() {
    if (_arrowCurveDownLeft16 != null) {
      return _arrowCurveDownLeft16!!
    }
    _arrowCurveDownLeft16 = fluentIcon(name = "Filled.ArrowCurveDownLeft16", 16f) {
      materialPath {
          moveTo(11.151F, 1.378F)
          curveToRelative(0.206F, 0.36F, 0.08F, 0.818F, -0.279F, 1.023F)
          curveToRelative(-2.414F, 1.38F, -2.622F, 3.628F, -2.622F, 5.6F)
          verticalLineToRelative(4.438F)
          lineToRelative(2.22F, -2.22F)
          curveToRelative(0.293F, -0.292F, 0.767F, -0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.294F, 0.293F, 0.769F, 0.0F, 1.061F)
          lineToRelative(-3.5F, 3.5F)
          curveTo(7.89F, 14.921F, 7.7F, 15.0F, 7.5F, 15.0F)
          reflectiveCurveToRelative(-0.39F, -0.079F, -0.53F, -0.22F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.293F, -0.292F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.22F, 2.22F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -2.029F, 0.192F, -5.08F, 3.378F, -6.901F)
          curveToRelative(0.36F, -0.206F, 0.818F, -0.08F, 1.023F, 0.279F)
          close()        
      }
    }
    return _arrowCurveDownLeft16!!
  }

private var _arrowCurveDownLeft16: ImageVector? = null
