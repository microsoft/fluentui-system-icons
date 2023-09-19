package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight28: ImageVector
  get() {
    if (_arrowRight28 != null) {
      return _arrowRight28!!
    }
    _arrowRight28 = fluentIcon(name = "Filled.ArrowRight28", 28f) {
      materialPath {
          moveTo(15.705F, 4.289F)
          curveTo(15.312F, 3.9F, 14.679F, 3.904F, 14.29F, 4.297F)
          reflectiveCurveToRelative(-0.385F, 1.026F, 0.008F, 1.414F)
          lineTo(21.675F, 13.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(17.673F)
          lineToRelative(-7.374F, 7.286F)
          curveToRelative(-0.393F, 0.389F, -0.396F, 1.022F, -0.008F, 1.415F)
          curveToRelative(0.388F, 0.392F, 1.021F, 0.396F, 1.414F, 0.008F)
          lineToRelative(8.927F, -8.821F)
          curveToRelative(0.495F, -0.49F, 0.495F, -1.289F, 0.0F, -1.778F)
          lineToRelative(-8.927F, -8.821F)
          close()        
      }
    }
    return _arrowRight28!!
  }

private var _arrowRight28: ImageVector? = null
