package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HourglassHalf16: ImageVector
  get() {
    if (_hourglassHalf16 != null) {
      return _hourglassHalf16!!
    }
    _hourglassHalf16 = fluentIcon(name = "Filled.HourglassHalf16", 16f) {
      materialPath {
          moveTo(5.025F, 13.0F)
          horizontalLineToRelative(5.946F)
          curveToRelative(-0.054F, -0.52F, -0.179F, -0.868F, -0.31F, -1.114F)
          curveToRelative(-0.164F, -0.31F, -0.386F, -0.55F, -0.681F, -0.806F)
          curveToRelative(-0.11F, -0.095F, -0.209F, -0.174F, -0.323F, -0.267F)
          lineToRelative(-0.186F, -0.151F)
          curveToRelative(-0.181F, -0.149F, -0.405F, -0.338F, -0.613F, -0.56F)
          curveTo(8.401F, 9.614F, 8.0F, 8.937F, 8.0F, 8.0F)
          curveToRelative(0.0F, 0.938F, -0.402F, 1.614F, -0.86F, 2.103F)
          curveToRelative(-0.208F, 0.222F, -0.431F, 0.41F, -0.613F, 0.56F)
          lineToRelative(-0.186F, 0.15F)
          curveToRelative(-0.115F, 0.093F, -0.213F, 0.173F, -0.323F, 0.268F)
          curveToRelative(-0.296F, 0.256F, -0.518F, 0.495F, -0.683F, 0.805F)
          curveToRelative(-0.13F, 0.247F, -0.256F, 0.595F, -0.31F, 1.114F)
          close()        
      }
    }
    return _hourglassHalf16!!
  }

private var _hourglassHalf16: ImageVector? = null
