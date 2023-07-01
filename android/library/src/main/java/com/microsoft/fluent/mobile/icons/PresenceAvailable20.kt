package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAvailable20: ImageVector
  get() {
    if (_presenceAvailable20 != null) {
      return _presenceAvailable20!!
    }
    _presenceAvailable20 = fluentIcon(name = "Filled.PresenceAvailable20", 20f) {
      materialPath {
          moveTo(10.0F, 20.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(15.523F, 0.0F, 10.0F, 0.0F)
          reflectiveCurveTo(0.0F, 4.477F, 0.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(4.207F, -11.793F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(9.0F, 10.586F)
          lineToRelative(3.793F, -3.793F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          close()        
      }
    }
    return _presenceAvailable20!!
  }

private var _presenceAvailable20: ImageVector? = null
