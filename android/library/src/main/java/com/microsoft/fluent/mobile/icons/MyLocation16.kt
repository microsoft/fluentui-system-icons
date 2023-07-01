package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MyLocation16: ImageVector
  get() {
    if (_myLocation16 != null) {
      return _myLocation16!!
    }
    _myLocation16 = fluentIcon(name = "Regular.MyLocation16", 16f) {
      materialPath {
          moveTo(8.0F, 10.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(9.38F, 5.5F, 8.0F, 5.5F)
          reflectiveCurveTo(5.5F, 6.62F, 5.5F, 8.0F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          close()
          moveToRelative(0.5F, -9.0F)
          curveTo(8.5F, 1.224F, 8.276F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveTo(7.5F, 1.224F, 7.5F, 1.5F)
          verticalLineToRelative(1.525F)
          curveTo(5.138F, 3.259F, 3.26F, 5.138F, 3.025F, 7.5F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 7.5F, 1.0F, 7.724F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(1.525F)
          curveToRelative(0.234F, 2.362F, 2.113F, 4.241F, 4.475F, 4.476F)
          verticalLineTo(14.5F)
          curveTo(7.5F, 14.776F, 7.724F, 15.0F, 8.0F, 15.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.524F)
          curveToRelative(2.362F, -0.235F, 4.24F, -2.114F, 4.475F, -4.476F)
          horizontalLineTo(14.5F)
          curveTo(14.776F, 8.5F, 15.0F, 8.276F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-1.525F)
          curveTo(12.741F, 5.138F, 10.862F, 3.26F, 8.5F, 3.025F)
          verticalLineTo(1.5F)
          close()
          moveTo(8.0F, 12.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          curveToRelative(0.0F, -2.209F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.791F, 4.0F, 4.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          close()        
      }
    }
    return _myLocation16!!
  }

private var _myLocation16: ImageVector? = null
