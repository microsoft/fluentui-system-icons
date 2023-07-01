package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited20: ImageVector
  get() {
    if (_prohibited20 != null) {
      return _prohibited20!!
    }
    _prohibited20 = fluentIcon(name = "Filled.Prohibited20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          curveToRelative(0.0F, -1.525F, -0.525F, -2.927F, -1.404F, -4.035F)
          lineToRelative(-9.131F, 9.131F)
          curveTo(7.073F, 15.975F, 8.475F, 16.5F, 10.0F, 16.5F)
          curveToRelative(3.59F, 0.0F, 6.5F, -2.91F, 6.5F, -6.5F)
          close()
          moveTo(4.904F, 14.035F)
          lineToRelative(9.131F, -9.131F)
          curveTo(12.927F, 4.025F, 11.525F, 3.5F, 10.0F, 3.5F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 1.525F, 0.525F, 2.927F, 1.404F, 4.035F)
          close()        
      }
    }
    return _prohibited20!!
  }

private var _prohibited20: ImageVector? = null
