package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Premium12: ImageVector
  get() {
    if (_premium12 != null) {
      return _premium12!!
    }
    _premium12 = fluentIcon(name = "Filled.Premium12", 12f) {
      materialPath {
          moveTo(3.0F, 1.0F)
          horizontalLineToRelative(1.046F)
          lineTo(2.997F, 4.0F)
          horizontalLineTo(1.191F)
          lineToRelative(1.362F, -2.724F)
          curveTo(2.638F, 1.107F, 2.811F, 1.0F, 3.0F, 1.0F)
          close()
          moveTo(1.228F, 5.0F)
          lineTo(4.24F, 9.687F)
          lineTo(2.97F, 5.0F)
          horizontalLineTo(1.226F)
          close()
          moveToRelative(2.778F, 0.0F)
          lineToRelative(1.53F, 5.645F)
          curveTo(5.594F, 10.855F, 5.785F, 11.0F, 6.002F, 11.0F)
          curveToRelative(0.216F, 0.0F, 0.407F, -0.145F, 0.463F, -0.355F)
          lineTo(7.998F, 5.0F)
          horizontalLineTo(4.006F)
          close()
          moveToRelative(5.028F, 0.0F)
          lineTo(7.76F, 9.685F)
          lineTo(10.773F, 5.0F)
          horizontalLineToRelative(-1.74F)
          close()
          moveToRelative(1.775F, -1.0F)
          horizontalLineTo(9.006F)
          lineToRelative(-1.05F, -3.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.19F, 0.0F, 0.363F, 0.107F, 0.448F, 0.276F)
          lineTo(10.809F, 4.0F)
          close()
          moveTo(7.947F, 4.0F)
          horizontalLineToRelative(-3.89F)
          lineToRelative(1.048F, -3.0F)
          horizontalLineToRelative(1.79F)
          lineToRelative(1.052F, 3.0F)
          close()        
      }
    }
    return _premium12!!
  }

private var _premium12: ImageVector? = null
