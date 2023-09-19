package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search20: ImageVector
  get() {
    if (_search20 != null) {
      return _search20!!
    }
    _search20 = fluentIcon(name = "Filled.Search20", 20f) {
      materialPath {
          moveTo(8.5F, 3.0F)
          curveTo(11.538F, 3.0F, 14.0F, 5.462F, 14.0F, 8.5F)
          curveToRelative(0.0F, 1.248F, -0.416F, 2.4F, -1.117F, 3.323F)
          lineToRelative(4.147F, 4.147F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(15.97F, 17.03F)
          lineToRelative(-4.147F, -4.147F)
          curveTo(10.899F, 13.584F, 9.748F, 14.0F, 8.5F, 14.0F)
          curveTo(5.462F, 14.0F, 3.0F, 11.538F, 3.0F, 8.5F)
          reflectiveCurveTo(5.462F, 3.0F, 8.5F, 3.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()        
      }
    }
    return _search20!!
  }

private var _search20: ImageVector? = null
