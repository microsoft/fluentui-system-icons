package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search28: ImageVector
  get() {
    if (_search28 != null) {
      return _search28!!
    }
    _search28 = fluentIcon(name = "Filled.Search28", 28f) {
      materialPath {
          moveTo(11.5F, 2.5F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          reflectiveCurveToRelative(4.03F, 9.0F, 9.0F, 9.0F)
          curveToRelative(2.125F, 0.0F, 4.078F, -0.736F, 5.618F, -1.968F)
          lineToRelative(6.675F, 6.675F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-6.675F, -6.675F)
          curveToRelative(1.232F, -1.54F, 1.968F, -3.493F, 1.968F, -5.618F)
          curveToRelative(0.0F, -4.97F, -4.03F, -9.0F, -9.0F, -9.0F)
          close()
          moveToRelative(-7.0F, 9.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()        
      }
    }
    return _search28!!
  }

private var _search28: ImageVector? = null
