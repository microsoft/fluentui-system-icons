package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pin24: ImageVector
  get() {
    if (_pin24 != null) {
      return _pin24!!
    }
    _pin24 = fluentIcon(name = "Regular.Pin24", 24f) {
      materialPath {
          moveTo(16.242F, 2.932F)
          lineToRelative(4.826F, 4.826F)
          curveToRelative(1.327F, 1.327F, 0.964F, 3.564F, -0.715F, 4.404F)
          lineToRelative(-4.87F, 2.435F)
          curveToRelative(-0.176F, 0.088F, -0.31F, 0.24F, -0.374F, 0.426F)
          lineToRelative(-1.44F, 4.166F)
          curveToRelative(-0.3F, 0.873F, -1.412F, 1.13F, -2.065F, 0.476F)
          lineTo(8.5F, 16.561F)
          lineTo(4.06F, 21.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(-1.062F)
          lineTo(7.44F, 15.5F)
          lineToRelative(-3.105F, -3.104F)
          curveToRelative(-0.653F, -0.653F, -0.397F, -1.764F, 0.476F, -2.066F)
          lineToRelative(4.166F, -1.439F)
          curveToRelative(0.185F, -0.064F, 0.338F, -0.198F, 0.426F, -0.373F)
          lineToRelative(2.435F, -4.871F)
          curveToRelative(0.84F, -1.68F, 3.077F, -2.042F, 4.405F, -0.715F)
          close()
          moveToRelative(3.766F, 5.886F)
          lineToRelative(-4.826F, -4.825F)
          curveToRelative(-0.604F, -0.604F, -1.62F, -0.439F, -2.002F, 0.324F)
          lineToRelative(-2.435F, 4.871F)
          curveToRelative(-0.264F, 0.526F, -0.722F, 0.929F, -1.278F, 1.12F)
          lineToRelative(-3.789F, 1.31F)
          lineToRelative(6.705F, 6.704F)
          lineToRelative(1.308F, -3.788F)
          curveToRelative(0.192F, -0.557F, 0.595F, -1.015F, 1.12F, -1.278F)
          lineToRelative(4.872F, -2.436F)
          curveToRelative(0.763F, -0.381F, 0.928F, -1.398F, 0.325F, -2.002F)
          close()        
      }
    }
    return _pin24!!
  }

private var _pin24: ImageVector? = null
