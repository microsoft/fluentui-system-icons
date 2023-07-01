package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingToolAccent20: ImageVector
  get() {
    if (_inkingToolAccent20 != null) {
      return _inkingToolAccent20!!
    }
    _inkingToolAccent20 = fluentIcon(name = "Filled.InkingToolAccent20", 20f) {
      materialPath {
          moveTo(17.0F, 6.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 6.5F, 17.0F, 6.276F, 17.0F, 6.0F)
          close()
          moveToRelative(-4.554F, 1.0F)
          lineToRelative(-2.388F, 4.776F)
          curveTo(9.892F, 12.11F, 10.133F, 12.5F, 10.505F, 12.5F)
          curveToRelative(0.19F, 0.0F, 0.363F, -0.107F, 0.447F, -0.276F)
          lineTo(13.564F, 7.0F)
          lineTo(13.0F, 6.5F)
          lineTo(12.446F, 7.0F)
          close()
          moveTo(10.0F, 17.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.672F, 1.0F, -1.5F)
          reflectiveCurveToRelative(-0.448F, -1.5F, -1.0F, -1.5F)
          reflectiveCurveToRelative(-1.0F, 0.672F, -1.0F, 1.5F)
          reflectiveCurveToRelative(0.448F, 1.5F, 1.0F, 1.5F)
          close()        
      }
    }
    return _inkingToolAccent20!!
  }

private var _inkingToolAccent20: ImageVector? = null
