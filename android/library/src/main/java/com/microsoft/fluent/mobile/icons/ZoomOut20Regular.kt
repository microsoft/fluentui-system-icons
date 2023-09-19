package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ZoomOut20: ImageVector
  get() {
    if (_zoomOut20 != null) {
      return _zoomOut20!!
    }
    _zoomOut20 = fluentIcon(name = "Regular.ZoomOut20", 20f) {
      materialPath {
          moveTo(11.0F, 8.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.276F, 9.0F, 11.0F, 9.0F)
          horizontalLineTo(6.0F)
          curveTo(5.724F, 9.0F, 5.5F, 8.776F, 5.5F, 8.5F)
          reflectiveCurveTo(5.724F, 8.0F, 6.0F, 8.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveToRelative(3.0F, 0.5F)
          curveTo(14.0F, 5.462F, 11.538F, 3.0F, 8.5F, 3.0F)
          reflectiveCurveTo(3.0F, 5.462F, 3.0F, 8.5F)
          reflectiveCurveTo(5.462F, 14.0F, 8.5F, 14.0F)
          curveToRelative(1.339F, 0.0F, 2.566F, -0.478F, 3.52F, -1.273F)
          lineToRelative(4.126F, 4.127F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.057F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-4.127F, -4.126F)
          curveTo(13.522F, 11.066F, 14.0F, 9.839F, 14.0F, 8.5F)
          close()
          moveToRelative(-10.0F, 0.0F)
          curveTo(4.0F, 6.015F, 6.015F, 4.0F, 8.5F, 4.0F)
          reflectiveCurveTo(13.0F, 6.015F, 13.0F, 8.5F)
          reflectiveCurveTo(10.985F, 13.0F, 8.5F, 13.0F)
          reflectiveCurveTo(4.0F, 10.985F, 4.0F, 8.5F)
          close()        
      }
    }
    return _zoomOut20!!
  }

private var _zoomOut20: ImageVector? = null
