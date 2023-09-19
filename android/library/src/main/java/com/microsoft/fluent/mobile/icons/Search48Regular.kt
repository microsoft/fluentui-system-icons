package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Search48: ImageVector
  get() {
    if (_search48 != null) {
      return _search48!!
    }
    _search48 = fluentIcon(name = "Regular.Search48", 48f) {
      materialPath {
          moveTo(20.0F, 6.0F)
          curveTo(12.268F, 6.0F, 6.0F, 12.268F, 6.0F, 20.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          curveToRelative(3.416F, 0.0F, 6.546F, -1.223F, 8.976F, -3.256F)
          lineToRelative(10.89F, 10.89F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-10.89F, -10.89F)
          curveTo(32.777F, 26.546F, 34.0F, 23.416F, 34.0F, 20.0F)
          curveToRelative(0.0F, -7.732F, -6.268F, -14.0F, -14.0F, -14.0F)
          close()
          moveTo(8.5F, 20.0F)
          curveToRelative(0.0F, -6.351F, 5.149F, -11.5F, 11.5F, -11.5F)
          reflectiveCurveTo(31.5F, 13.649F, 31.5F, 20.0F)
          reflectiveCurveTo(26.351F, 31.5F, 20.0F, 31.5F)
          reflectiveCurveTo(8.5F, 26.351F, 8.5F, 20.0F)
          close()        
      }
    }
    return _search48!!
  }

private var _search48: ImageVector? = null
