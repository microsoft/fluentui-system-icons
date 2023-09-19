package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShapeSubtract16: ImageVector
  get() {
    if (_shapeSubtract16 != null) {
      return _shapeSubtract16!!
    }
    _shapeSubtract16 = fluentIcon(name = "Filled.ShapeSubtract16", 16f) {
      materialPath {
          moveTo(3.0F, 2.268F)
          curveTo(2.402F, 2.613F, 2.0F, 3.26F, 2.0F, 4.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.046F, 0.002F, 0.093F, 0.005F, 0.138F)
          lineTo(2.01F, 9.204F)
          curveToRelative(0.037F, 0.361F, 0.17F, 0.693F, 0.372F, 0.972F)
          curveToRelative(0.247F, 0.339F, 0.598F, 0.598F, 1.006F, 0.729F)
          lineToRelative(0.017F, 0.005F)
          curveTo(3.593F, 10.97F, 3.793F, 11.0F, 4.0F, 11.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          curveTo(3.636F, 2.0F, 3.294F, 2.097F, 3.0F, 2.268F)
          close()
          moveTo(6.0F, 7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(7.0F)
          close()        
      }
    }
    return _shapeSubtract16!!
  }

private var _shapeSubtract16: ImageVector? = null
