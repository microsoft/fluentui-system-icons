package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowClockwise48: ImageVector
  get() {
    if (_arrowClockwise48 != null) {
      return _arrowClockwise48!!
    }
    _arrowClockwise48 = fluentIcon(name = "Filled.ArrowClockwise48", 48f) {
      materialPath {
          moveTo(24.0F, 39.0F)
          curveToRelative(8.284F, 0.0F, 15.0F, -6.716F, 15.0F, -15.0F)
          curveToRelative(0.0F, -0.483F, -0.023F, -0.96F, -0.067F, -1.43F)
          curveToRelative(-0.078F, -0.817F, 0.534F, -1.57F, 1.354F, -1.57F)
          curveToRelative(0.845F, 0.0F, 1.576F, 0.61F, 1.647F, 1.452F)
          curveTo(41.978F, 22.962F, 42.0F, 23.478F, 42.0F, 24.0F)
          curveToRelative(0.0F, 9.941F, -8.059F, 18.0F, -18.0F, 18.0F)
          reflectiveCurveTo(6.0F, 33.941F, 6.0F, 24.0F)
          reflectiveCurveTo(14.059F, 6.0F, 24.0F, 6.0F)
          curveToRelative(4.732F, 0.0F, 9.037F, 1.826F, 12.25F, 4.811F)
          verticalLineTo(8.25F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(3.211F)
          curveTo(31.76F, 10.62F, 28.07F, 9.0F, 24.0F, 9.0F)
          curveTo(15.716F, 9.0F, 9.0F, 15.716F, 9.0F, 24.0F)
          curveToRelative(0.0F, 8.284F, 6.716F, 15.0F, 15.0F, 15.0F)
          close()        
      }
    }
    return _arrowClockwise48!!
  }

private var _arrowClockwise48: ImageVector? = null
