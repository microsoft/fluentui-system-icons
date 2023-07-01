package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Send24: ImageVector
  get() {
    if (_send24 != null) {
      return _send24!!
    }
    _send24 = fluentIcon(name = "Regular.Send24", 24f) {
      materialPath {
          moveTo(5.694F, 12.0F)
          lineTo(2.299F, 3.27F)
          curveTo(2.063F, 2.664F, 2.655F, 2.083F, 3.241F, 2.29F)
          lineToRelative(0.093F, 0.039F)
          lineToRelative(18.0F, 9.0F)
          curveToRelative(0.518F, 0.259F, 0.55F, 0.968F, 0.097F, 1.284F)
          lineToRelative(-0.097F, 0.058F)
          lineToRelative(-18.0F, 9.0F)
          curveToRelative(-0.583F, 0.291F, -1.216F, -0.245F, -1.065F, -0.848F)
          lineToRelative(0.03F, -0.095F)
          lineTo(5.694F, 12.0F)
          lineTo(2.299F, 3.27F)
          lineTo(5.694F, 12.0F)
          close()
          moveTo(4.402F, 4.54F)
          lineToRelative(2.61F, 6.71F)
          horizontalLineToRelative(6.627F)
          curveToRelative(0.38F, 0.0F, 0.693F, 0.282F, 0.743F, 0.648F)
          lineTo(14.389F, 12.0F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.649F, 0.743F)
          lineToRelative(-0.1F, 0.007F)
          horizontalLineTo(7.01F)
          lineToRelative(-2.609F, 6.71F)
          lineTo(19.322F, 12.0F)
          lineTo(4.401F, 4.54F)
          close()        
      }
    }
    return _send24!!
  }

private var _send24: ImageVector? = null
