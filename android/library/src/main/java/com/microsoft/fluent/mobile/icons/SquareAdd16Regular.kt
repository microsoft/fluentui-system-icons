package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SquareAdd16: ImageVector
  get() {
    if (_squareAdd16 != null) {
      return _squareAdd16!!
    }
    _squareAdd16 = fluentIcon(name = "Regular.SquareAdd16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(1.757F)
          curveToRelative(-0.307F, -0.253F, -0.642F, -0.474F, -1.0F, -0.657F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(1.1F)
          curveToRelative(0.183F, 0.358F, 0.404F, 0.693F, 0.657F, 1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(13.0F, 6.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(11.0F, 8.224F, 10.776F, 8.0F, 10.5F, 8.0F)
          reflectiveCurveTo(10.0F, 8.224F, 10.0F, 8.5F)
          verticalLineTo(10.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 10.0F, 8.0F, 10.224F, 8.0F, 10.5F)
          reflectiveCurveTo(8.224F, 11.0F, 8.5F, 11.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 10.0F, 12.5F, 10.0F)
          horizontalLineTo(11.0F)
          verticalLineTo(8.5F)
          close()        
      }
    }
    return _squareAdd16!!
  }

private var _squareAdd16: ImageVector? = null
