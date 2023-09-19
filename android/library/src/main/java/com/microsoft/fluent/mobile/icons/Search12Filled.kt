package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search12: ImageVector
  get() {
    if (_search12 != null) {
      return _search12!!
    }
    _search12 = fluentIcon(name = "Filled.Search12", 12f) {
      materialPath {
          moveTo(5.0F, 1.0F)
          curveTo(2.79F, 1.0F, 1.0F, 2.79F, 1.0F, 5.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          curveToRelative(0.833F, 0.0F, 1.607F, -0.255F, 2.248F, -0.69F)
          lineToRelative(2.472F, 2.47F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(8.31F, 7.248F)
          curveTo(8.745F, 6.608F, 9.0F, 5.834F, 9.0F, 5.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveTo(2.5F, 5.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveTo(7.5F, 3.62F, 7.5F, 5.0F)
          reflectiveCurveTo(6.38F, 7.5F, 5.0F, 7.5F)
          reflectiveCurveTo(2.5F, 6.38F, 2.5F, 5.0F)
          close()        
      }
    }
    return _search12!!
  }

private var _search12: ImageVector? = null
