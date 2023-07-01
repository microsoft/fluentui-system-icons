package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp28: ImageVector
  get() {
    if (_arrowUp28 != null) {
      return _arrowUp28!!
    }
    _arrowUp28 = fluentIcon(name = "Filled.ArrowUp28", 28f) {
      materialPath {
          moveTo(4.29F, 12.296F)
          curveToRelative(-0.388F, 0.393F, -0.384F, 1.027F, 0.01F, 1.415F)
          curveToRelative(0.392F, 0.388F, 1.025F, 0.384F, 1.413F, -0.009F)
          lineToRelative(7.289F, -7.376F)
          verticalLineToRelative(17.675F)
          curveToRelative(0.0F, 0.553F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.447F, 1.0F, -1.0F)
          verticalLineTo(6.328F)
          lineToRelative(7.286F, 7.374F)
          curveToRelative(0.389F, 0.393F, 1.022F, 0.397F, 1.415F, 0.009F)
          curveToRelative(0.392F, -0.389F, 0.396F, -1.022F, 0.008F, -1.415F)
          lineTo(14.89F, 3.37F)
          curveToRelative(-0.49F, -0.496F, -1.289F, -0.496F, -1.778F, 0.0F)
          lineTo(4.29F, 12.296F)
          close()        
      }
    }
    return _arrowUp28!!
  }

private var _arrowUp28: ImageVector? = null
