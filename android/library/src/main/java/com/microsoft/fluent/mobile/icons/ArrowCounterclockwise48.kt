package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCounterclockwise48: ImageVector
  get() {
    if (_arrowCounterclockwise48 != null) {
      return _arrowCounterclockwise48!!
    }
    _arrowCounterclockwise48 = fluentIcon(name = "Filled.ArrowCounterclockwise48", 48f) {
      materialPath {
          moveTo(24.0F, 39.0F)
          curveToRelative(-8.284F, 0.0F, -15.0F, -6.716F, -15.0F, -15.0F)
          curveToRelative(0.0F, -0.483F, 0.023F, -0.96F, 0.067F, -1.43F)
          curveTo(9.145F, 21.752F, 8.533F, 21.0F, 7.713F, 21.0F)
          curveToRelative(-0.845F, 0.0F, -1.576F, 0.61F, -1.647F, 1.452F)
          curveTo(6.022F, 22.962F, 6.0F, 23.478F, 6.0F, 24.0F)
          curveToRelative(0.0F, 9.941F, 8.059F, 18.0F, 18.0F, 18.0F)
          reflectiveCurveToRelative(18.0F, -8.059F, 18.0F, -18.0F)
          reflectiveCurveTo(33.941F, 6.0F, 24.0F, 6.0F)
          curveToRelative(-4.732F, 0.0F, -9.037F, 1.826F, -12.25F, 4.811F)
          verticalLineTo(8.25F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveToRelative(-0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-3.211F)
          curveTo(16.24F, 10.62F, 19.93F, 9.0F, 24.0F, 9.0F)
          curveToRelative(8.284F, 0.0F, 15.0F, 6.716F, 15.0F, 15.0F)
          curveToRelative(0.0F, 8.284F, -6.716F, 15.0F, -15.0F, 15.0F)
          close()        
      }
    }
    return _arrowCounterclockwise48!!
  }

private var _arrowCounterclockwise48: ImageVector? = null
