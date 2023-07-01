package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ZoomOut24: ImageVector
  get() {
    if (_zoomOut24 != null) {
      return _zoomOut24!!
    }
    _zoomOut24 = fluentIcon(name = "Filled.ZoomOut24", 24f) {
      materialPath {
          moveTo(17.5F, 10.0F)
          curveToRelative(0.0F, -4.142F, -3.358F, -7.5F, -7.5F, -7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          curveToRelative(1.71F, 0.0F, 3.287F, -0.572F, 4.548F, -1.536F)
          lineToRelative(4.745F, 4.743F)
          lineToRelative(0.094F, 0.083F)
          curveToRelative(0.392F, 0.305F, 0.96F, 0.278F, 1.32F, -0.083F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-4.743F, -4.745F)
          curveTo(16.928F, 13.287F, 17.5F, 11.71F, 17.5F, 10.0F)
          close()
          moveToRelative(-4.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(7.0F)
          close()        
      }
    }
    return _zoomOut24!!
  }

private var _zoomOut24: ImageVector? = null
