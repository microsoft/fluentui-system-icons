package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PointScan20: ImageVector
  get() {
    if (_pointScan20 != null) {
      return _pointScan20!!
    }
    _pointScan20 = fluentIcon(name = "Regular.PointScan20", 20f) {
      materialPath {
          moveTo(8.5F, 2.0F)
          curveTo(8.776F, 2.0F, 9.0F, 2.224F, 9.0F, 2.5F)
          verticalLineToRelative(4.025F)
          curveToRelative(2.362F, 0.234F, 4.24F, 2.113F, 4.475F, 4.475F)
          horizontalLineTo(17.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 12.0F, 17.5F, 12.0F)
          horizontalLineToRelative(-4.025F)
          curveToRelative(-0.234F, 2.362F, -2.113F, 4.24F, -4.475F, 4.475F)
          verticalLineTo(17.5F)
          curveTo(9.0F, 17.776F, 8.776F, 18.0F, 8.5F, 18.0F)
          reflectiveCurveTo(8.0F, 17.776F, 8.0F, 17.5F)
          verticalLineToRelative(-1.025F)
          curveTo(5.638F, 16.241F, 3.76F, 14.362F, 3.525F, 12.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 12.0F, 2.0F, 11.776F, 2.0F, 11.5F)
          reflectiveCurveTo(2.224F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(1.025F)
          curveTo(3.759F, 8.638F, 5.638F, 6.76F, 8.0F, 6.525F)
          verticalLineTo(2.5F)
          curveTo(8.0F, 2.224F, 8.224F, 2.0F, 8.5F, 2.0F)
          close()
          moveTo(4.531F, 12.0F)
          curveToRelative(0.226F, 1.81F, 1.66F, 3.243F, 3.469F, 3.47F)
          verticalLineTo(12.0F)
          horizontalLineTo(4.531F)
          close()
          moveTo(8.0F, 11.0F)
          verticalLineTo(7.531F)
          curveTo(6.19F, 7.757F, 4.757F, 9.191F, 4.531F, 11.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(1.0F, 1.0F)
          verticalLineToRelative(3.47F)
          curveToRelative(1.81F, -0.227F, 3.243F, -1.66F, 3.47F, -3.47F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(3.47F, -1.0F)
          curveTo(12.242F, 9.19F, 10.81F, 7.757F, 9.0F, 7.531F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(3.47F)
          close()        
      }
    }
    return _pointScan20!!
  }

private var _pointScan20: ImageVector? = null
