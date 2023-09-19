package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Send32: ImageVector
  get() {
    if (_send32 != null) {
      return _send32!!
    }
    _send32 = fluentIcon(name = "Filled.Send32", 32f) {
      materialPath {
          moveTo(4.176F, 2.164F)
          curveTo(2.988F, 1.57F, 1.67F, 2.7F, 2.077F, 3.965F)
          lineToRelative(2.858F, 8.883F)
          curveToRelative(0.114F, 0.357F, 0.418F, 0.62F, 0.787F, 0.68F)
          lineToRelative(11.869F, 1.979F)
          curveToRelative(0.557F, 0.093F, 0.557F, 0.893F, 0.0F, 0.986F)
          lineTo(5.723F, 18.471F)
          curveToRelative(-0.37F, 0.062F, -0.673F, 0.324F, -0.788F, 0.68F)
          lineToRelative(-2.858F, 8.886F)
          curveToRelative(-0.406F, 1.265F, 0.91F, 2.395F, 2.099F, 1.801F)
          lineTo(29.17F, 17.343F)
          curveToRelative(1.106F, -0.553F, 1.106F, -2.13F, 0.0F, -2.684F)
          lineTo(4.176F, 2.164F)
          close()        
      }
    }
    return _send32!!
  }

private var _send32: ImageVector? = null
