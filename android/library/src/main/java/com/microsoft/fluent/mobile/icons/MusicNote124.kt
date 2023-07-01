package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MusicNote124: ImageVector
  get() {
    if (_musicNote124 != null) {
      return _musicNote124!!
    }
    _musicNote124 = fluentIcon(name = "Filled.MusicNote124", 124f) {
      materialPath {
          moveTo(11.513F, 2.048F)
          curveToRelative(-0.23F, -0.087F, -0.488F, -0.054F, -0.69F, 0.086F)
          curveTo(10.62F, 2.274F, 10.5F, 2.504F, 10.5F, 2.75F)
          verticalLineToRelative(12.127F)
          curveTo(9.815F, 14.328F, 8.946F, 14.0F, 8.0F, 14.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          curveToRelative(2.061F, 0.0F, 3.758F, -1.56F, 3.976F, -3.562F)
          curveTo(11.992F, 18.378F, 12.0F, 18.315F, 12.0F, 18.25F)
          verticalLineTo(8.832F)
          lineToRelative(6.987F, 2.62F)
          curveToRelative(0.23F, 0.087F, 0.488F, 0.055F, 0.69F, -0.086F)
          curveTo(19.88F, 11.226F, 20.0F, 10.996F, 20.0F, 10.75F)
          verticalLineTo(7.482F)
          curveToRelative(0.0F, -1.354F, -0.84F, -2.567F, -2.109F, -3.043F)
          lineToRelative(-6.378F, -2.391F)
          close()        
      }
    }
    return _musicNote124!!
  }

private var _musicNote124: ImageVector? = null
