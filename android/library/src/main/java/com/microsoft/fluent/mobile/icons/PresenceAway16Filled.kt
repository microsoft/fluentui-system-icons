package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAway16: ImageVector
  get() {
    if (_presenceAway16 != null) {
      return _presenceAway16!!
    }
    _presenceAway16 = fluentIcon(name = "Filled.PresenceAway16", 16f) {
      materialPath {
          moveTo(8.0F, 16.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveTo(8.5F, 4.5F)
          verticalLineToRelative(3.02F)
          lineToRelative(2.125F, 1.7F)
          curveToRelative(0.431F, 0.344F, 0.5F, 0.973F, 0.156F, 1.405F)
          curveToRelative(-0.345F, 0.431F, -0.974F, 0.5F, -1.406F, 0.156F)
          lineToRelative(-2.5F, -2.0F)
          curveTo(6.638F, 8.59F, 6.5F, 8.304F, 6.5F, 8.0F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _presenceAway16!!
  }

private var _presenceAway16: ImageVector? = null
