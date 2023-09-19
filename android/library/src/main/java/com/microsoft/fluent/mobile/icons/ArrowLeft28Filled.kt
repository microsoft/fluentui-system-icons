package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowLeft28: ImageVector
  get() {
    if (_arrowLeft28 != null) {
      return _arrowLeft28!!
    }
    _arrowLeft28 = fluentIcon(name = "Filled.ArrowLeft28", 28f) {
      materialPath {
          moveTo(12.298F, 4.289F)
          curveToRelative(0.393F, -0.388F, 1.026F, -0.385F, 1.415F, 0.008F)
          curveToRelative(0.388F, 0.393F, 0.384F, 1.026F, -0.009F, 1.414F)
          lineTo(6.328F, 13.0F)
          horizontalLineToRelative(17.675F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.33F)
          lineToRelative(7.374F, 7.286F)
          curveToRelative(0.393F, 0.389F, 0.397F, 1.022F, 0.009F, 1.415F)
          curveToRelative(-0.389F, 0.392F, -1.022F, 0.396F, -1.415F, 0.008F)
          lineToRelative(-8.927F, -8.821F)
          curveToRelative(-0.495F, -0.49F, -0.495F, -1.289F, 0.0F, -1.778F)
          lineToRelative(8.927F, -8.821F)
          close()        
      }
    }
    return _arrowLeft28!!
  }

private var _arrowLeft28: ImageVector? = null
