package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wrench16: ImageVector
  get() {
    if (_wrench16 != null) {
      return _wrench16!!
    }
    _wrench16 = fluentIcon(name = "Filled.Wrench16", 16f) {
      materialPath {
          moveTo(11.0F, 1.0F)
          curveTo(8.79F, 1.0F, 7.0F, 2.79F, 7.0F, 5.0F)
          curveToRelative(0.0F, 0.313F, 0.035F, 0.618F, 0.104F, 0.91F)
          lineToRelative(-5.051F, 5.235F)
          curveToRelative(-0.813F, 0.842F, -0.725F, 2.2F, 0.19F, 2.93F)
          curveToRelative(0.794F, 0.635F, 1.938F, 0.568F, 2.652F, -0.156F)
          lineToRelative(5.007F, -5.072F)
          curveTo(10.25F, 8.947F, 10.619F, 9.0F, 11.0F, 9.0F)
          curveToRelative(2.209F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          curveToRelative(0.0F, -0.181F, -0.013F, -0.36F, -0.036F, -0.535F)
          curveToRelative(-0.025F, -0.189F, -0.155F, -0.346F, -0.335F, -0.407F)
          curveToRelative(-0.18F, -0.061F, -0.38F, -0.015F, -0.514F, 0.12F)
          lineTo(12.0F, 6.293F)
          lineTo(9.707F, 4.0F)
          lineToRelative(2.115F, -2.115F)
          curveToRelative(0.135F, -0.135F, 0.181F, -0.334F, 0.12F, -0.514F)
          curveToRelative(-0.06F, -0.18F, -0.219F, -0.31F, -0.407F, -0.335F)
          curveTo(11.36F, 1.012F, 11.18F, 1.0F, 10.999F, 1.0F)
          close()        
      }
    }
    return _wrench16!!
  }

private var _wrench16: ImageVector? = null
