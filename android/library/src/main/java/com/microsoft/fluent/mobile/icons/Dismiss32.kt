package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss32: ImageVector
  get() {
    if (_dismiss32 != null) {
      return _dismiss32!!
    }
    _dismiss32 = fluentIcon(name = "Filled.Dismiss32", 32f) {
      materialPath {
          moveTo(26.113F, 4.116F)
          curveToRelative(0.489F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(17.766F, 15.998F)
          lineToRelative(10.115F, 10.115F)
          curveToRelative(0.488F, 0.489F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineTo(16.0F, 17.766F)
          lineTo(5.884F, 27.881F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineTo(14.231F, 16.0F)
          lineTo(4.116F, 5.883F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(1.28F, -0.488F, 1.768F, 0.0F)
          lineTo(15.999F, 14.23F)
          lineTo(26.113F, 4.116F)
          close()        
      }
    }
    return _dismiss32!!
  }

private var _dismiss32: ImageVector? = null
