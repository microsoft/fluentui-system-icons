package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Lightbulb48: ImageVector
  get() {
    if (_lightbulb48 != null) {
      return _lightbulb48!!
    }
    _lightbulb48 = fluentIcon(name = "Filled.Lightbulb48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveTo(15.992F, 4.0F, 9.5F, 10.492F, 9.5F, 18.5F)
          curveToRelative(0.0F, 4.235F, 1.817F, 8.047F, 4.71F, 10.696F)
          curveToRelative(0.448F, 0.41F, 0.748F, 0.873F, 0.87F, 1.349F)
          lineToRelative(1.27F, 4.955F)
          horizontalLineToRelative(15.3F)
          lineToRelative(1.27F, -4.955F)
          curveToRelative(0.122F, -0.476F, 0.422F, -0.938F, 0.87F, -1.35F)
          curveToRelative(2.893F, -2.648F, 4.71F, -6.46F, 4.71F, -10.695F)
          curveTo(38.5F, 10.492F, 32.008F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(7.008F, 34.0F)
          horizontalLineTo(16.992F)
          lineToRelative(0.623F, 2.43F)
          curveToRelative(0.538F, 2.1F, 2.432F, 3.57F, 4.6F, 3.57F)
          horizontalLineToRelative(3.57F)
          curveToRelative(2.168F, 0.0F, 4.062F, -1.47F, 4.6F, -3.57F)
          lineTo(31.008F, 38.0F)
          close()        
      }
    }
    return _lightbulb48!!
  }

private var _lightbulb48: ImageVector? = null
