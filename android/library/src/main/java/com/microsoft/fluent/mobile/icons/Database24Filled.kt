package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Database24: ImageVector
  get() {
    if (_database24 != null) {
      return _database24!!
    }
    _database24 = fluentIcon(name = "Filled.Database24", 24f) {
      materialPath {
          moveTo(12.0F, 10.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -1.79F, 8.0F, -4.0F)
          reflectiveCurveToRelative(-3.582F, -4.0F, -8.0F, -4.0F)
          reflectiveCurveToRelative(-8.0F, 1.79F, -8.0F, 4.0F)
          reflectiveCurveToRelative(3.582F, 4.0F, 8.0F, 4.0F)
          close()
          moveToRelative(6.328F, 0.17F)
          curveToRelative(0.588F, -0.294F, 1.17F, -0.666F, 1.672F, -1.117F)
          verticalLineTo(18.0F)
          curveToRelative(0.0F, 2.21F, -3.582F, 4.0F, -8.0F, 4.0F)
          reflectiveCurveToRelative(-8.0F, -1.79F, -8.0F, -4.0F)
          verticalLineTo(9.053F)
          curveToRelative(0.502F, 0.451F, 1.084F, 0.823F, 1.672F, 1.117F)
          curveTo(7.37F, 11.018F, 9.608F, 11.5F, 12.0F, 11.5F)
          curveToRelative(2.392F, 0.0F, 4.63F, -0.482F, 6.328F, -1.33F)
          close()        
      }
    }
    return _database24!!
  }

private var _database24: ImageVector? = null
