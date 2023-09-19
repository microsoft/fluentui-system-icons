package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited24: ImageVector
  get() {
    if (_prohibited24 != null) {
      return _prohibited24!!
    }
    _prohibited24 = fluentIcon(name = "Regular.Prohibited24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(6.517F, 4.543F)
          lineTo(6.543F, 18.517F)
          curveTo(8.02F, 19.755F, 9.923F, 20.5F, 12.0F, 20.5F)
          curveToRelative(4.694F, 0.0F, 8.5F, -3.806F, 8.5F, -8.5F)
          curveToRelative(0.0F, -2.077F, -0.745F, -3.98F, -1.983F, -5.457F)
          close()
          moveTo(12.0F, 3.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          curveToRelative(0.0F, 2.077F, 0.745F, 3.98F, 1.983F, 5.457F)
          lineTo(17.457F, 5.483F)
          curveTo(15.98F, 4.245F, 14.077F, 3.5F, 12.0F, 3.5F)
          close()        
      }
    }
    return _prohibited24!!
  }

private var _prohibited24: ImageVector? = null
