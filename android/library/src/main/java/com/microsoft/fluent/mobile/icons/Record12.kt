package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Record12: ImageVector
  get() {
    if (_record12 != null) {
      return _record12!!
    }
    _record12 = fluentIcon(name = "Filled.Record12", 12f) {
      materialPath {
          moveTo(6.0F, 11.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(8.761F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveTo(1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveToRelative(0.0F, -2.0F)
          curveTo(4.343F, 9.0F, 3.0F, 7.657F, 3.0F, 6.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          close()        
      }
    }
    return _record12!!
  }

private var _record12: ImageVector? = null
