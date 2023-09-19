package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRight28: ImageVector
  get() {
    if (_arrowRight28 != null) {
      return _arrowRight28!!
    }
    _arrowRight28 = fluentIcon(name = "Regular.ArrowRight28", 28f) {
      materialPath {
          moveTo(15.268F, 4.21F)
          curveToRelative(-0.298F, -0.288F, -0.773F, -0.278F, -1.06F, 0.02F)
          curveToRelative(-0.287F, 0.299F, -0.278F, 0.773F, 0.02F, 1.06F)
          lineToRelative(8.275F, 7.96F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 13.25F, 3.0F, 13.586F, 3.0F, 14.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(18.752F)
          lineToRelative(-8.273F, 7.959F)
          curveToRelative(-0.299F, 0.287F, -0.308F, 0.762F, -0.021F, 1.06F)
          curveToRelative(0.287F, 0.299F, 0.762F, 0.308F, 1.06F, 0.02F)
          lineToRelative(9.428F, -9.069F)
          curveToRelative(0.41F, -0.393F, 0.41F, -1.048F, 0.0F, -1.441F)
          lineToRelative(-9.428F, -9.07F)
          close()        
      }
    }
    return _arrowRight28!!
  }

private var _arrowRight28: ImageVector? = null
