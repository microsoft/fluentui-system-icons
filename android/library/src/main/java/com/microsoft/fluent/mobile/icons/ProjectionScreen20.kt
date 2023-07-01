package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ProjectionScreen20: ImageVector
  get() {
    if (_projectionScreen20 != null) {
      return _projectionScreen20!!
    }
    _projectionScreen20 = fluentIcon(name = "Filled.ProjectionScreen20", 20f) {
      materialPath {
          moveTo(3.0F, 3.0F)
          curveTo(2.448F, 3.0F, 2.0F, 3.448F, 2.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(7.224F, 16.0F, 7.0F, 16.224F, 7.0F, 16.5F)
          reflectiveCurveTo(7.224F, 17.0F, 7.5F, 17.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 16.0F, 12.5F, 16.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _projectionScreen20!!
  }

private var _projectionScreen20: ImageVector? = null
