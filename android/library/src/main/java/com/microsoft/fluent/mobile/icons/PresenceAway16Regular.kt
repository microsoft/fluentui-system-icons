package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAway16: ImageVector
  get() {
    if (_presenceAway16 != null) {
      return _presenceAway16!!
    }
    _presenceAway16 = fluentIcon(name = "Regular.PresenceAway16", 16f) {
      materialPath {
          moveTo(8.5F, 7.52F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.304F, 0.138F, 0.591F, 0.375F, 0.78F)
          lineToRelative(2.5F, 2.0F)
          curveToRelative(0.432F, 0.346F, 1.06F, 0.276F, 1.406F, -0.155F)
          curveToRelative(0.345F, -0.432F, 0.275F, -1.06F, -0.156F, -1.406F)
          lineTo(8.5F, 7.52F)
          close()
          moveTo(8.0F, 0.0F)
          curveTo(3.582F, 0.0F, 0.0F, 3.582F, 0.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()        
      }
    }
    return _presenceAway16!!
  }

private var _presenceAway16: ImageVector? = null
