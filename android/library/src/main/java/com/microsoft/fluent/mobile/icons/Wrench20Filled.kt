package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wrench20: ImageVector
  get() {
    if (_wrench20 != null) {
      return _wrench20!!
    }
    _wrench20 = fluentIcon(name = "Filled.Wrench20", 20f) {
      materialPath {
          moveTo(13.5F, 2.0F)
          curveTo(11.016F, 2.0F, 9.0F, 4.015F, 9.0F, 6.5F)
          curveToRelative(0.0F, 0.293F, 0.03F, 0.58F, 0.083F, 0.86F)
          lineToRelative(-6.425F, 6.658F)
          curveToRelative(-0.964F, 1.0F, -0.86F, 2.612F, 0.225F, 3.479F)
          curveToRelative(0.943F, 0.753F, 2.302F, 0.673F, 3.15F, -0.186F)
          lineToRelative(6.364F, -6.448F)
          curveTo(12.75F, 10.953F, 13.12F, 11.0F, 13.5F, 11.0F)
          curveToRelative(2.486F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          curveToRelative(0.0F, -0.347F, -0.039F, -0.685F, -0.114F, -1.01F)
          curveToRelative(-0.04F, -0.178F, -0.174F, -0.32F, -0.349F, -0.37F)
          curveToRelative(-0.175F, -0.05F, -0.363F, -0.001F, -0.491F, 0.127F)
          lineTo(14.5F, 7.793F)
          lineTo(12.208F, 5.5F)
          lineToRelative(2.545F, -2.545F)
          curveToRelative(0.129F, -0.129F, 0.177F, -0.317F, 0.127F, -0.492F)
          curveToRelative(-0.05F, -0.175F, -0.192F, -0.308F, -0.369F, -0.349F)
          curveTo(14.186F, 2.04F, 13.848F, 2.0F, 13.501F, 2.0F)
          close()        
      }
    }
    return _wrench20!!
  }

private var _wrench20: ImageVector? = null
