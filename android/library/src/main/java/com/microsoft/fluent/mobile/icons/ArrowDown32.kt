package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown32: ImageVector
  get() {
    if (_arrowDown32 != null) {
      return _arrowDown32!!
    }
    _arrowDown32 = fluentIcon(name = "Filled.ArrowDown32", 32f) {
      materialPath {
          moveTo(16.0F, 3.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(20.537F)
          lineToRelative(7.628F, -7.432F)
          curveToRelative(0.494F, -0.482F, 1.285F, -0.472F, 1.767F, 0.023F)
          curveToRelative(0.482F, 0.494F, 0.472F, 1.285F, -0.023F, 1.767F)
          lineToRelative(-9.747F, 9.498F)
          curveToRelative(-0.085F, 0.083F, -0.179F, 0.152F, -0.279F, 0.206F)
          curveToRelative(-0.035F, 0.019F, -0.07F, 0.036F, -0.107F, 0.052F)
          lineToRelative(-0.017F, 0.007F)
          curveToRelative(-0.136F, 0.055F, -0.284F, 0.088F, -0.44F, 0.092F)
          horizontalLineToRelative(-0.077F)
          curveToRelative(-0.15F, -0.006F, -0.294F, -0.038F, -0.426F, -0.092F)
          lineToRelative(-0.026F, -0.01F)
          curveToRelative(-0.036F, -0.016F, -0.07F, -0.033F, -0.105F, -0.052F)
          curveToRelative(-0.098F, -0.054F, -0.19F, -0.122F, -0.273F, -0.204F)
          lineToRelative(-9.747F, -9.497F)
          curveToRelative(-0.495F, -0.482F, -0.505F, -1.273F, -0.023F, -1.767F)
          curveToRelative(0.481F, -0.495F, 1.273F, -0.505F, 1.767F, -0.023F)
          lineToRelative(7.628F, 7.432F)
          verticalLineTo(4.25F)
          curveTo(14.75F, 3.56F, 15.31F, 3.0F, 16.0F, 3.0F)
          close()        
      }
    }
    return _arrowDown32!!
  }

private var _arrowDown32: ImageVector? = null
