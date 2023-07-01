package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PlayCircle16: ImageVector
  get() {
    if (_playCircle16 != null) {
      return _playCircle16!!
    }
    _playCircle16 = fluentIcon(name = "Filled.PlayCircle16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(8.5F, 0.0F)
          curveToRelative(0.0F, -0.18F, -0.097F, -0.346F, -0.254F, -0.435F)
          lineTo(7.62F, 6.076F)
          curveTo(7.12F, 5.793F, 6.5F, 6.155F, 6.5F, 6.73F)
          verticalLineToRelative(2.542F)
          curveToRelative(0.0F, 0.575F, 0.62F, 0.936F, 1.12F, 0.652F)
          lineToRelative(2.626F, -1.488F)
          curveTo(10.403F, 8.346F, 10.5F, 8.18F, 10.5F, 8.0F)
          close()        
      }
    }
    return _playCircle16!!
  }

private var _playCircle16: ImageVector? = null
