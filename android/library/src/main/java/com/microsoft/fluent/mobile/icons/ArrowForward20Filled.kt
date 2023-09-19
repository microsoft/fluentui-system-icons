package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowForward20: ImageVector
  get() {
    if (_arrowForward20 != null) {
      return _arrowForward20!!
    }
    _arrowForward20 = fluentIcon(name = "Filled.ArrowForward20", 20f) {
      materialPath {
          moveTo(15.69F, 9.5F)
          lineToRelative(-2.963F, 2.963F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.266F, 0.267F, 0.683F, 0.29F, 0.977F, 0.073F)
          lineToRelative(0.084F, -0.073F)
          lineToRelative(4.242F, -4.242F)
          curveToRelative(0.267F, -0.267F, 0.29F, -0.683F, 0.073F, -0.977F)
          lineTo(18.03F, 8.22F)
          lineToRelative(-4.242F, -4.243F)
          curveToRelative(-0.293F, -0.292F, -0.768F, -0.292F, -1.061F, 0.0F)
          curveToRelative(-0.266F, 0.267F, -0.29F, 0.683F, -0.073F, 0.977F)
          lineToRelative(0.073F, 0.084F)
          lineTo(15.69F, 8.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-4.198F, 0.0F, -7.616F, 3.338F, -7.746F, 7.504F)
          lineTo(2.25F, 15.751F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -3.376F, 2.675F, -6.126F, 6.02F, -6.246F)
          lineTo(10.0F, 9.5F)
          horizontalLineToRelative(5.69F)
          close()        
      }
    }
    return _arrowForward20!!
  }

private var _arrowForward20: ImageVector? = null
