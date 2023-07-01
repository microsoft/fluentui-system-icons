package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CellularData524: ImageVector
  get() {
    if (_cellularData524 != null) {
      return _cellularData524!!
    }
    _cellularData524 = fluentIcon(name = "Filled.CellularData524", 524f) {
      materialPath {
          moveTo(4.0F, 17.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.44F, 1.0F, 0.984F)
          verticalLineToRelative(1.032F)
          curveTo(5.0F, 19.56F, 4.552F, 20.0F, 4.0F, 20.0F)
          reflectiveCurveToRelative(-1.0F, -0.44F, -1.0F, -0.984F)
          verticalLineToRelative(-1.032F)
          curveTo(3.0F, 17.44F, 3.448F, 17.0F, 4.0F, 17.0F)
          close()        
      }
    }
    return _cellularData524!!
  }

private var _cellularData524: ImageVector? = null
