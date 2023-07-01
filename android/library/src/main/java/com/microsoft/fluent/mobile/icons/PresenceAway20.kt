package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAway20: ImageVector
  get() {
    if (_presenceAway20 != null) {
      return _presenceAway20!!
    }
    _presenceAway20 = fluentIcon(name = "Filled.PresenceAway20", 20f) {
      materialPath {
          moveTo(10.0F, 20.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(15.523F, 0.0F, 10.0F, 0.0F)
          reflectiveCurveTo(0.0F, 4.477F, 0.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(0.0F, -13.992F)
          verticalLineToRelative(3.578F)
          lineToRelative(2.707F, 2.707F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.415F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveTo(8.105F, 10.52F, 8.0F, 10.265F, 8.0F, 10.0F)
          verticalLineTo(6.008F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _presenceAway20!!
  }

private var _presenceAway20: ImageVector? = null
