package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUndo20: ImageVector
  get() {
    if (_arrowUndo20 != null) {
      return _arrowUndo20!!
    }
    _arrowUndo20 = fluentIcon(name = "Regular.ArrowUndo20", 20f) {
      materialPath {
          moveTo(5.0F, 2.5F)
          curveTo(5.0F, 2.224F, 4.776F, 2.0F, 4.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineToRelative(4.9F)
          curveTo(4.0F, 7.731F, 4.269F, 8.0F, 4.6F, 8.0F)
          horizontalLineToRelative(4.9F)
          curveTo(9.776F, 8.0F, 10.0F, 7.776F, 10.0F, 7.5F)
          reflectiveCurveTo(9.776F, 7.0F, 9.5F, 7.0F)
          horizontalLineTo(5.906F)
          lineToRelative(3.473F, -3.019F)
          curveToRelative(1.667F, -1.45F, 4.194F, -1.272F, 5.643F, 0.395F)
          curveToRelative(1.45F, 1.667F, 1.272F, 4.194F, -0.395F, 5.643F)
          lineToRelative(-8.172F, 7.104F)
          curveToRelative(-0.208F, 0.18F, -0.23F, 0.497F, -0.049F, 0.705F)
          curveToRelative(0.181F, 0.208F, 0.497F, 0.23F, 0.705F, 0.05F)
          lineToRelative(8.172F, -7.104F)
          curveToRelative(2.084F, -1.812F, 2.305F, -4.97F, 0.494F, -7.054F)
          curveToRelative(-1.812F, -2.084F, -4.97F, -2.305F, -7.054F, -0.494F)
          lineTo(5.0F, 6.463F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _arrowUndo20!!
  }

private var _arrowUndo20: ImageVector? = null
