package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpRight32: ImageVector
  get() {
    if (_arrowUpRight32 != null) {
      return _arrowUpRight32!!
    }
    _arrowUpRight32 = fluentIcon(name = "Regular.ArrowUpRight32", 32f) {
      materialPath {
          moveTo(15.0F, 3.0F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.447F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(10.585F)
          lineTo(3.297F, 27.288F)
          curveToRelative(-0.39F, 0.391F, -0.39F, 1.024F, 0.0F, 1.415F)
          curveToRelative(0.39F, 0.39F, 1.023F, 0.39F, 1.414F, 0.0F)
          lineTo(27.0F, 6.414F)
          verticalLineTo(17.0F)
          curveToRelative(0.0F, 0.552F, 0.447F, 1.0F, 1.0F, 1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(15.0F)
          close()        
      }
    }
    return _arrowUpRight32!!
  }

private var _arrowUpRight32: ImageVector? = null
