package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleDown12: ImageVector
  get() {
    if (_arrowCircleDown12 != null) {
      return _arrowCircleDown12!!
    }
    _arrowCircleDown12 = fluentIcon(name = "Regular.ArrowCircleDown12", 12f) {
      materialPath {
          moveTo(8.354F, 6.098F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineTo(6.5F, 7.244F)
          verticalLineTo(3.5F)
          curveTo(6.5F, 3.224F, 6.276F, 3.0F, 6.0F, 3.0F)
          reflectiveCurveTo(5.5F, 3.224F, 5.5F, 3.5F)
          verticalLineToRelative(3.744F)
          lineTo(4.354F, 6.098F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(2.0F, 2.0F)
          curveTo(5.842F, 9.0F, 6.159F, 9.0F, 6.354F, 8.805F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()
          moveTo(6.0F, 11.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(8.761F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveTo(1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveToRelative(4.0F, -5.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveTo(2.0F, 8.21F, 2.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()        
      }
    }
    return _arrowCircleDown12!!
  }

private var _arrowCircleDown12: ImageVector? = null
