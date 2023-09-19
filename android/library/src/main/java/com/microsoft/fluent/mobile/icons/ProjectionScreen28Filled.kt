package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ProjectionScreen28: ImageVector
  get() {
    if (_projectionScreen28 != null) {
      return _projectionScreen28!!
    }
    _projectionScreen28 = fluentIcon(name = "Filled.ProjectionScreen28", 28f) {
      materialPath {
          moveTo(4.0F, 3.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          curveToRelative(0.0F, 0.74F, 0.402F, 1.387F, 1.0F, 1.732F)
          verticalLineToRelative(9.518F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(8.336F, 23.5F, 8.0F, 23.836F, 8.0F, 24.25F)
          reflectiveCurveTo(8.336F, 25.0F, 8.75F, 25.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-4.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineTo(6.732F)
          curveTo(25.598F, 6.387F, 26.0F, 5.74F, 26.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _projectionScreen28!!
  }

private var _projectionScreen28: ImageVector? = null
