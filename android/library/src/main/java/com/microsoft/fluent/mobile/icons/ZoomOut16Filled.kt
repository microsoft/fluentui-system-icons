package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ZoomOut16: ImageVector
  get() {
    if (_zoomOut16 != null) {
      return _zoomOut16!!
    }
    _zoomOut16 = fluentIcon(name = "Filled.ZoomOut16", 16f) {
      materialPath {
          moveTo(6.5F, 11.0F)
          curveToRelative(0.972F, 0.0F, 1.872F, -0.308F, 2.607F, -0.832F)
          lineToRelative(3.613F, 3.612F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-3.612F, -3.613F)
          curveTo(10.692F, 8.372F, 11.0F, 7.472F, 11.0F, 6.5F)
          curveTo(11.0F, 4.015F, 8.985F, 2.0F, 6.5F, 2.0F)
          reflectiveCurveTo(2.0F, 4.015F, 2.0F, 6.5F)
          reflectiveCurveTo(4.015F, 11.0F, 6.5F, 11.0F)
          close()
          moveToRelative(-2.0F, -5.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.776F, 6.0F, 9.0F, 6.224F, 9.0F, 6.5F)
          reflectiveCurveTo(8.776F, 7.0F, 8.5F, 7.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(4.224F, 7.0F, 4.0F, 6.776F, 4.0F, 6.5F)
          reflectiveCurveTo(4.224F, 6.0F, 4.5F, 6.0F)
          close()        
      }
    }
    return _zoomOut16!!
  }

private var _zoomOut16: ImageVector? = null
