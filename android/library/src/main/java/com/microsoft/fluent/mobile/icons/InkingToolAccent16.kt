package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingToolAccent16: ImageVector
  get() {
    if (_inkingToolAccent16 != null) {
      return _inkingToolAccent16!!
    }
    _inkingToolAccent16 = fluentIcon(name = "Filled.InkingToolAccent16", 16f) {
      materialPath {
          moveTo(14.5F, 2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(2.0F)
          curveTo(1.724F, 4.5F, 1.5F, 4.276F, 1.5F, 4.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveToRelative(-4.0F, 2.5F)
          lineToRelative(0.52F, 0.476F)
          lineToRelative(-2.398F, 4.75F)
          curveTo(8.537F, 9.893F, 8.364F, 10.0F, 8.176F, 10.0F)
          curveTo(7.803F, 10.0F, 7.56F, 9.607F, 7.729F, 9.275F)
          lineToRelative(2.17F, -4.3F)
          lineTo(10.5F, 4.5F)
          close()
          moveTo(9.0F, 13.0F)
          curveToRelative(0.0F, 0.828F, -0.448F, 1.5F, -1.0F, 1.5F)
          reflectiveCurveTo(7.0F, 13.828F, 7.0F, 13.0F)
          reflectiveCurveToRelative(0.448F, -1.5F, 1.0F, -1.5F)
          reflectiveCurveToRelative(1.0F, 0.672F, 1.0F, 1.5F)
          close()        
      }
    }
    return _inkingToolAccent16!!
  }

private var _inkingToolAccent16: ImageVector? = null
