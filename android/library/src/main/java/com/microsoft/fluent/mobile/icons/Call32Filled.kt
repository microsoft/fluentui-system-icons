package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Call32: ImageVector
  get() {
    if (_call32 != null) {
      return _call32!!
    }
    _call32 = fluentIcon(name = "Filled.Call32", 32f) {
      materialPath {
          moveTo(13.512F, 14.045F)
          lineToRelative(2.146F, -1.968F)
          curveToRelative(1.202F, -1.102F, 1.614F, -2.824F, 1.042F, -4.35F)
          lineToRelative(-0.917F, -2.448F)
          curveToRelative(-0.71F, -1.896F, -2.773F, -2.912F, -4.709F, -2.32F)
          curveToRelative(-3.432F, 1.05F, -6.07F, 4.24F, -5.258F, 8.029F)
          curveToRelative(0.534F, 2.492F, 1.555F, 5.62F, 3.492F, 8.949F)
          curveToRelative(1.94F, 3.335F, 4.156F, 5.8F, 6.055F, 7.53F)
          curveToRelative(2.87F, 2.612F, 6.97F, 1.959F, 9.608F, -0.5F)
          curveToRelative(1.467F, -1.37F, 1.617F, -3.643F, 0.342F, -5.192F)
          lineToRelative(-1.681F, -2.042F)
          curveToRelative(-1.037F, -1.26F, -2.734F, -1.763F, -4.29F, -1.274F)
          lineToRelative(-2.776F, 0.875F)
          curveToRelative(-0.107F, -0.11F, -0.23F, -0.241F, -0.366F, -0.392F)
          curveToRelative(-0.456F, -0.509F, -1.027F, -1.222F, -1.507F, -2.053F)
          reflectiveCurveToRelative(-0.812F, -1.682F, -1.024F, -2.332F)
          curveToRelative(-0.063F, -0.192F, -0.115F, -0.364F, -0.157F, -0.512F)
          close()        
      }
    }
    return _call32!!
  }

private var _call32: ImageVector? = null
