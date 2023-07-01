package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSplit20: ImageVector
  get() {
    if (_arrowSplit20 != null) {
      return _arrowSplit20!!
    }
    _arrowSplit20 = fluentIcon(name = "Filled.ArrowSplit20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(2.245F)
          curveToRelative(1.104F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.443F)
          lineToRelative(1.225F, -1.223F)
          curveToRelative(0.293F, -0.292F, 0.768F, -0.292F, 1.06F, 0.002F)
          curveToRelative(0.293F, 0.293F, 0.292F, 0.768F, -0.001F, 1.06F)
          lineToRelative(-2.505F, 2.5F)
          curveToRelative(-0.292F, 0.292F, -0.767F, 0.291F, -1.06F, -0.001F)
          lineToRelative(-2.499F, -2.5F)
          curveToRelative(-0.293F, -0.292F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.22F, 1.219F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(6.999F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(4.44F)
          lineToRelative(1.22F, -1.219F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(-2.5F, 2.5F)
          curveTo(6.14F, 16.92F, 5.95F, 17.0F, 5.75F, 17.0F)
          curveToRelative(-0.199F, 0.0F, -0.39F, -0.08F, -0.53F, -0.22F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.292F, -0.292F, -0.292F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.294F, -0.293F, 0.768F, -0.293F, 1.061F, 0.0F)
          lineTo(5.0F, 14.44F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(2.25F)
          verticalLineTo(3.75F)
          curveTo(9.25F, 3.336F, 9.584F, 3.0F, 10.0F, 3.0F)
          close()        
      }
    }
    return _arrowSplit20!!
  }

private var _arrowSplit20: ImageVector? = null
