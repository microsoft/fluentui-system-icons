package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Previous32: ImageVector
  get() {
    if (_previous32 != null) {
      return _previous32!!
    }
    _previous32 = fluentIcon(name = "Filled.Previous32", 32f) {
      materialPath {
          moveTo(6.0F, 5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveTo(4.0F, 4.448F, 4.0F, 5.0F)
          verticalLineToRelative(22.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(22.003F, 1.504F)
          curveToRelative(0.0F, -2.002F, -2.236F, -3.192F, -3.897F, -2.073F)
          lineToRelative(-14.003F, 9.432F)
          curveTo(8.637F, 14.85F, 8.63F, 17.005F, 10.09F, 18.0F)
          lineToRelative(14.003F, 9.56F)
          curveToRelative(1.66F, 1.132F, 3.91F, -0.056F, 3.91F, -2.066F)
          verticalLineTo(6.506F)
          close()        
      }
    }
    return _previous32!!
  }

private var _previous32: ImageVector? = null
