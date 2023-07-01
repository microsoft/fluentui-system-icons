package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin32: ImageVector
  get() {
    if (_pin32 != null) {
      return _pin32!!
    }
    _pin32 = fluentIcon(name = "Filled.Pin32", 32f) {
      materialPath {
          moveTo(15.744F, 4.276F)
          curveToRelative(1.221F, -2.442F, 4.476F, -2.97F, 6.406F, -1.04F)
          lineToRelative(6.614F, 6.614F)
          curveToRelative(1.93F, 1.93F, 1.402F, 5.186F, -1.04F, 6.406F)
          lineToRelative(-6.35F, 3.176F)
          curveToRelative(-0.356F, 0.178F, -0.627F, 0.49F, -0.753F, 0.867F)
          lineToRelative(-1.66F, 4.983F)
          curveToRelative(-0.47F, 1.41F, -2.26F, 1.833F, -3.312F, 0.782F)
          lineToRelative(-4.149F, -4.15F)
          lineToRelative(-6.086F, 6.087F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(-1.415F)
          lineToRelative(6.086F, -6.085F)
          lineToRelative(-4.149F, -4.15F)
          curveToRelative(-1.051F, -1.05F, -0.629F, -2.84F, 0.782F, -3.31F)
          lineToRelative(4.982F, -1.662F)
          curveToRelative(0.378F, -0.125F, 0.69F, -0.396F, 0.868F, -0.752F)
          lineToRelative(3.175F, -6.35F)
          close()        
      }
    }
    return _pin32!!
  }

private var _pin32: ImageVector? = null
