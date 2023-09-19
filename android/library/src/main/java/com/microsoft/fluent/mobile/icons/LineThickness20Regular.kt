package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LineThickness20: ImageVector
  get() {
    if (_lineThickness20 != null) {
      return _lineThickness20!!
    }
    _lineThickness20 = fluentIcon(name = "Regular.LineThickness20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 4.224F, 2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 4.0F, 18.0F, 4.224F, 18.0F, 4.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveTo(2.0F, 13.672F, 2.672F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(17.328F, 16.0F, 16.5F, 16.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.672F, 16.0F, 2.0F, 15.328F, 2.0F, 14.5F)
          close()
          moveTo(3.0F, 8.0F)
          curveTo(2.448F, 8.0F, 2.0F, 8.448F, 2.0F, 9.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _lineThickness20!!
  }

private var _lineThickness20: ImageVector? = null
