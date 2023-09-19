package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ZoomOut16: ImageVector
  get() {
    if (_zoomOut16 != null) {
      return _zoomOut16!!
    }
    _zoomOut16 = fluentIcon(name = "Regular.ZoomOut16", 16f) {
      materialPath {
          moveTo(4.5F, 6.0F)
          curveTo(4.224F, 6.0F, 4.0F, 6.224F, 4.0F, 6.5F)
          reflectiveCurveTo(4.224F, 7.0F, 4.5F, 7.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.776F, 7.0F, 9.0F, 6.776F, 9.0F, 6.5F)
          reflectiveCurveTo(8.776F, 6.0F, 8.5F, 6.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(2.0F, 5.0F)
          curveToRelative(1.063F, 0.0F, 2.039F, -0.368F, 2.809F, -0.984F)
          lineToRelative(3.837F, 3.838F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(10.016F, 9.31F)
          curveTo(10.632F, 8.539F, 11.0F, 7.563F, 11.0F, 6.5F)
          curveTo(11.0F, 4.015F, 8.985F, 2.0F, 6.5F, 2.0F)
          reflectiveCurveTo(2.0F, 4.015F, 2.0F, 6.5F)
          reflectiveCurveTo(4.015F, 11.0F, 6.5F, 11.0F)
          close()
          moveToRelative(0.0F, -8.0F)
          curveTo(8.433F, 3.0F, 10.0F, 4.567F, 10.0F, 6.5F)
          reflectiveCurveTo(8.433F, 10.0F, 6.5F, 10.0F)
          reflectiveCurveTo(3.0F, 8.433F, 3.0F, 6.5F)
          reflectiveCurveTo(4.567F, 3.0F, 6.5F, 3.0F)
          close()        
      }
    }
    return _zoomOut16!!
  }

private var _zoomOut16: ImageVector? = null
