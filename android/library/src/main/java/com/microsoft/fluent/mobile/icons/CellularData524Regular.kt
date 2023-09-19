package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CellularData524: ImageVector
  get() {
    if (_cellularData524 != null) {
      return _cellularData524!!
    }
    _cellularData524 = fluentIcon(name = "Regular.CellularData524", 524f) {
      materialPath {
          moveTo(3.0F, 17.75F)
          verticalLineToRelative(1.5F)
          curveTo(3.0F, 19.664F, 3.336F, 20.0F, 3.75F, 20.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-1.5F)
          curveTo(4.5F, 17.336F, 4.164F, 17.0F, 3.75F, 17.0F)
          reflectiveCurveTo(3.0F, 17.336F, 3.0F, 17.75F)
          close()        
      }
    }
    return _cellularData524!!
  }

private var _cellularData524: ImageVector? = null
