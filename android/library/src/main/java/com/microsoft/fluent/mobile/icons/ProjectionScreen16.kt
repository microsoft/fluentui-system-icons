package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ProjectionScreen16: ImageVector
  get() {
    if (_projectionScreen16 != null) {
      return _projectionScreen16!!
    }
    _projectionScreen16 = fluentIcon(name = "Regular.ProjectionScreen16", 16f) {
      materialPath {
          moveTo(3.0F, 2.0F)
          curveTo(2.448F, 2.0F, 2.0F, 2.448F, 2.0F, 3.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          verticalLineToRelative(4.5F)
          curveTo(3.0F, 9.88F, 4.12F, 11.0F, 5.5F, 11.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(5.224F, 13.0F, 5.0F, 13.224F, 5.0F, 13.5F)
          reflectiveCurveTo(5.224F, 14.0F, 5.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 13.0F, 10.5F, 13.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(1.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.672F, 10.0F, 4.0F, 9.328F, 4.0F, 8.5F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _projectionScreen16!!
  }

private var _projectionScreen16: ImageVector? = null
