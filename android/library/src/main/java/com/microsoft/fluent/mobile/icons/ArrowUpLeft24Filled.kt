package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpLeft24: ImageVector
  get() {
    if (_arrowUpLeft24 != null) {
      return _arrowUpLeft24!!
    }
    _arrowUpLeft24 = fluentIcon(name = "Filled.ArrowUpLeft24", 24f) {
      materialPath {
          moveTo(13.0F, 3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.414F)
          lineToRelative(14.293F, 14.293F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.023F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(5.0F, 6.414F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(9.0F)
          close()        
      }
    }
    return _arrowUpLeft24!!
  }

private var _arrowUpLeft24: ImageVector? = null
