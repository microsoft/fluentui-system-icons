package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss48: ImageVector
  get() {
    if (_dismiss48 != null) {
      return _dismiss48!!
    }
    _dismiss48 = fluentIcon(name = "Regular.Dismiss48", 48f) {
      materialPath {
          moveTo(8.384F, 6.616F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(22.232F, 24.0F)
          lineTo(6.616F, 39.616F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          curveToRelative(0.489F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          lineTo(24.0F, 25.768F)
          lineToRelative(15.615F, 15.615F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineTo(25.768F, 24.0F)
          lineTo(41.383F, 8.384F)
          curveToRelative(0.489F, -0.488F, 0.489F, -1.28F, 0.0F, -1.767F)
          curveToRelative(-0.488F, -0.489F, -1.28F, -0.489F, -1.767F, 0.0F)
          lineTo(24.0F, 22.232F)
          lineTo(8.384F, 6.616F)
          close()        
      }
    }
    return _dismiss48!!
  }

private var _dismiss48: ImageVector? = null
