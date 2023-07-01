package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rhombus20: ImageVector
  get() {
    if (_rhombus20 != null) {
      return _rhombus20!!
    }
    _rhombus20 = fluentIcon(name = "Regular.Rhombus20", 20f) {
      materialPath {
          moveTo(4.89F, 4.296F)
          curveTo(5.182F, 3.516F, 5.927F, 3.0F, 6.76F, 3.0F)
          horizontalLineToRelative(10.237F)
          curveToRelative(1.397F, 0.0F, 2.364F, 1.396F, 1.872F, 2.704F)
          lineToRelative(-3.76F, 10.0F)
          curveTo(14.817F, 16.484F, 14.071F, 17.0F, 13.238F, 17.0F)
          horizontalLineTo(3.001F)
          curveToRelative(-1.397F, 0.0F, -2.363F, -1.396F, -1.872F, -2.704F)
          lineToRelative(3.76F, -10.0F)
          close()
          moveTo(6.76F, 4.0F)
          curveTo(6.344F, 4.0F, 5.97F, 4.258F, 5.824F, 4.648F)
          lineToRelative(-3.76F, 10.0F)
          curveTo(1.82F, 15.302F, 2.303F, 16.0F, 3.001F, 16.0F)
          horizontalLineToRelative(10.237F)
          curveToRelative(0.417F, 0.0F, 0.79F, -0.258F, 0.936F, -0.648F)
          lineToRelative(3.76F, -10.0F)
          curveTo(18.18F, 4.698F, 17.697F, 4.0F, 16.998F, 4.0F)
          horizontalLineTo(6.761F)
          close()        
      }
    }
    return _rhombus20!!
  }

private var _rhombus20: ImageVector? = null
