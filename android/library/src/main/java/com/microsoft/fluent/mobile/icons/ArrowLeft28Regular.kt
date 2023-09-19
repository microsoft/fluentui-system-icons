package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowLeft28: ImageVector
  get() {
    if (_arrowLeft28 != null) {
      return _arrowLeft28!!
    }
    _arrowLeft28 = fluentIcon(name = "Regular.ArrowLeft28", 28f) {
      materialPath {
          moveTo(12.735F, 4.21F)
          curveToRelative(0.298F, -0.288F, 0.773F, -0.278F, 1.06F, 0.02F)
          curveToRelative(0.287F, 0.299F, 0.278F, 0.773F, -0.02F, 1.06F)
          lineTo(5.5F, 13.25F)
          horizontalLineToRelative(18.753F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(5.501F)
          lineToRelative(8.274F, 7.959F)
          curveToRelative(0.298F, 0.287F, 0.307F, 0.762F, 0.02F, 1.06F)
          curveToRelative(-0.287F, 0.299F, -0.762F, 0.308F, -1.06F, 0.02F)
          lineTo(3.307F, 14.72F)
          curveToRelative(-0.41F, -0.393F, -0.41F, -1.048F, 0.0F, -1.441F)
          lineToRelative(9.428F, -9.07F)
          close()        
      }
    }
    return _arrowLeft28!!
  }

private var _arrowLeft28: ImageVector? = null
