package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BowlChopsticks20: ImageVector
  get() {
    if (_bowlChopsticks20 != null) {
      return _bowlChopsticks20!!
    }
    _bowlChopsticks20 = fluentIcon(name = "Filled.BowlChopsticks20", 20f) {
      materialPath {
          moveTo(4.238F, 2.074F)
          curveTo(4.473F, 1.93F, 4.78F, 2.003F, 4.926F, 2.238F)
          lineTo(9.087F, 9.0F)
          horizontalLineToRelative(1.826F)
          lineTo(7.074F, 2.762F)
          curveTo(6.93F, 2.527F, 7.003F, 2.22F, 7.238F, 2.074F)
          curveTo(7.473F, 1.93F, 7.78F, 2.003F, 7.926F, 2.238F)
          lineTo(12.087F, 9.0F)
          horizontalLineTo(17.5F)
          curveTo(17.776F, 9.0F, 18.0F, 9.224F, 18.0F, 9.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.69F, -0.087F, 1.36F, -0.252F, 2.0F)
          horizontalLineTo(2.252F)
          curveTo(2.088F, 11.36F, 2.0F, 10.69F, 2.0F, 10.0F)
          verticalLineTo(9.5F)
          curveTo(2.0F, 9.224F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(5.413F)
          lineTo(4.074F, 2.762F)
          curveTo(3.93F, 2.527F, 4.003F, 2.22F, 4.238F, 2.074F)
          close()
          moveTo(10.0F, 18.0F)
          curveToRelative(-3.357F, 0.0F, -6.232F, -2.068F, -7.418F, -5.0F)
          horizontalLineToRelative(14.837F)
          curveToRelative(-1.187F, 2.932F, -4.062F, 5.0F, -7.419F, 5.0F)
          close()        
      }
    }
    return _bowlChopsticks20!!
  }

private var _bowlChopsticks20: ImageVector? = null
