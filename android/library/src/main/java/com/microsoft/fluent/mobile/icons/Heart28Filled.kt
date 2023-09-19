package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart28: ImageVector
  get() {
    if (_heart28 != null) {
      return _heart28!!
    }
    _heart28 = fluentIcon(name = "Filled.Heart28", 28f) {
      materialPath {
          moveTo(14.604F, 6.193F)
          curveToRelative(2.601F, -2.932F, 7.184F, -2.922F, 9.772F, 0.02F)
          curveToRelative(2.263F, 2.574F, 2.148F, 6.459F, -0.263F, 8.893F)
          lineToRelative(-9.58F, 9.672F)
          curveTo(14.392F, 24.92F, 14.2F, 25.0F, 14.0F, 25.0F)
          reflectiveCurveToRelative(-0.392F, -0.08F, -0.533F, -0.222F)
          lineToRelative(-9.58F, -9.672F)
          curveToRelative(-2.41F, -2.434F, -2.526F, -6.32F, -0.263F, -8.892F)
          curveToRelative(2.588F, -2.943F, 7.17F, -2.953F, 9.772F, -0.021F)
          lineTo(14.0F, 6.873F)
          lineToRelative(0.604F, -0.68F)
          close()        
      }
    }
    return _heart28!!
  }

private var _heart28: ImageVector? = null
