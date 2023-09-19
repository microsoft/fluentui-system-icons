package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Drop16: ImageVector
  get() {
    if (_drop16 != null) {
      return _drop16!!
    }
    _drop16 = fluentIcon(name = "Regular.Drop16", 16f) {
      materialPath {
          moveTo(7.646F, 1.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.261F, 0.261F, 1.408F, 1.45F, 2.493F, 3.002F)
          curveTo(11.917F, 5.68F, 13.0F, 7.665F, 13.0F, 9.5F)
          curveToRelative(0.0F, 1.78F, -0.577F, 3.165F, -1.516F, 4.105F)
          curveTo(10.549F, 14.542F, 9.291F, 15.0F, 8.0F, 15.0F)
          reflectiveCurveToRelative(-2.548F, -0.458F, -3.484F, -1.395F)
          curveTo(3.577F, 12.665F, 3.0F, 11.281F, 3.0F, 9.5F)
          curveToRelative(0.0F, -1.835F, 1.083F, -3.82F, 2.153F, -5.35F)
          curveToRelative(1.085F, -1.554F, 2.232F, -2.742F, 2.494F, -3.004F)
          close()
          moveTo(5.973F, 4.722F)
          curveTo(4.916F, 6.232F, 4.0F, 7.997F, 4.0F, 9.5F)
          curveToRelative(0.0F, 1.557F, 0.5F, 2.673F, 1.224F, 3.398F)
          curveTo(5.95F, 13.628F, 6.944F, 14.0F, 8.0F, 14.0F)
          curveToRelative(1.056F, 0.0F, 2.049F, -0.373F, 2.776F, -1.102F)
          curveTo(11.501F, 12.173F, 12.0F, 11.058F, 12.0F, 9.5F)
          curveToRelative(0.0F, -1.503F, -0.916F, -3.267F, -1.972F, -4.778F)
          curveTo(9.263F, 3.628F, 8.464F, 2.721F, 8.0F, 2.222F)
          curveToRelative(-0.464F, 0.499F, -1.263F, 1.406F, -2.028F, 2.5F)
          close()        
      }
    }
    return _drop16!!
  }

private var _drop16: ImageVector? = null
