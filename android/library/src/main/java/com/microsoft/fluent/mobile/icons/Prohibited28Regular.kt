package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited28: ImageVector
  get() {
    if (_prohibited28 != null) {
      return _prohibited28!!
    }
    _prohibited28 = fluentIcon(name = "Regular.Prohibited28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          close()
          moveToRelative(7.936F, 5.124F)
          lineTo(7.124F, 21.936F)
          curveTo(8.966F, 23.533F, 11.37F, 24.5F, 14.0F, 24.5F)
          curveToRelative(5.799F, 0.0F, 10.5F, -4.701F, 10.5F, -10.5F)
          curveToRelative(0.0F, -2.63F, -0.967F, -5.034F, -2.564F, -6.876F)
          close()
          moveTo(14.0F, 3.5F)
          curveTo(8.201F, 3.5F, 3.5F, 8.201F, 3.5F, 14.0F)
          curveToRelative(0.0F, 2.63F, 0.967F, 5.034F, 2.564F, 6.876F)
          lineTo(20.876F, 6.064F)
          curveTo(19.034F, 4.467F, 16.63F, 3.5F, 14.0F, 3.5F)
          close()        
      }
    }
    return _prohibited28!!
  }

private var _prohibited28: ImageVector? = null
