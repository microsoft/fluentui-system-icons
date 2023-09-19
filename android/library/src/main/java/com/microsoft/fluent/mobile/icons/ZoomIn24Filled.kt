package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ZoomIn24: ImageVector
  get() {
    if (_zoomIn24 != null) {
      return _zoomIn24!!
    }
    _zoomIn24 = fluentIcon(name = "Filled.ZoomIn24", 24f) {
      materialPath {
          moveTo(17.5F, 10.0F)
          curveToRelative(0.0F, 1.71F, -0.572F, 3.287F, -1.536F, 4.548F)
          lineToRelative(4.743F, 4.745F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.36F, 0.36F, -0.928F, 0.388F, -1.32F, 0.083F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-4.745F, -4.743F)
          curveTo(13.287F, 16.928F, 11.71F, 17.5F, 10.0F, 17.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          close()
          moveTo(10.0F, 5.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(6.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(11.0F)
          verticalLineTo(6.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _zoomIn24!!
  }

private var _zoomIn24: ImageVector? = null
