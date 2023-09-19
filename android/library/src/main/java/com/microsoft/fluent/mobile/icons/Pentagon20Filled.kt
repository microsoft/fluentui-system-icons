package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pentagon20: ImageVector
  get() {
    if (_pentagon20 != null) {
      return _pentagon20!!
    }
    _pentagon20 = fluentIcon(name = "Filled.Pentagon20", 20f) {
      materialPath {
          moveTo(11.761F, 1.658F)
          curveTo(10.81F, 0.785F, 9.35F, 0.78F, 8.391F, 1.648F)
          lineTo(2.822F, 6.7F)
          curveTo(2.07F, 7.381F, 1.804F, 8.448F, 2.149F, 9.402F)
          lineToRelative(2.149F, 5.947F)
          curveToRelative(0.358F, 0.99F, 1.298F, 1.65F, 2.351F, 1.65F)
          horizontalLineToRelative(6.827F)
          curveToRelative(1.073F, 0.0F, 2.026F, -0.685F, 2.369F, -1.702F)
          lineTo(17.87F, 9.28F)
          curveToRelative(0.316F, -0.937F, 0.05F, -1.972F, -0.68F, -2.64F)
          lineToRelative(-5.43F, -4.981F)
          close()        
      }
    }
    return _pentagon20!!
  }

private var _pentagon20: ImageVector? = null
