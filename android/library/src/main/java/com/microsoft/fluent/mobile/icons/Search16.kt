package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Search16: ImageVector
  get() {
    if (_search16 != null) {
      return _search16!!
    }
    _search16 = fluentIcon(name = "Regular.Search16", 16f) {
      materialPath {
          moveTo(9.309F, 10.016F)
          curveTo(8.539F, 10.632F, 7.563F, 11.0F, 6.5F, 11.0F)
          curveTo(4.015F, 11.0F, 2.0F, 8.985F, 2.0F, 6.5F)
          reflectiveCurveTo(4.015F, 2.0F, 6.5F, 2.0F)
          reflectiveCurveTo(11.0F, 4.015F, 11.0F, 6.5F)
          curveToRelative(0.0F, 1.063F, -0.368F, 2.039F, -0.984F, 2.809F)
          lineToRelative(3.838F, 3.837F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(9.31F, 10.016F)
          close()
          moveTo(10.0F, 6.5F)
          curveTo(10.0F, 4.567F, 8.433F, 3.0F, 6.5F, 3.0F)
          reflectiveCurveTo(3.0F, 4.567F, 3.0F, 6.5F)
          reflectiveCurveTo(4.567F, 10.0F, 6.5F, 10.0F)
          reflectiveCurveTo(10.0F, 8.433F, 10.0F, 6.5F)
          close()        
      }
    }
    return _search16!!
  }

private var _search16: ImageVector? = null
