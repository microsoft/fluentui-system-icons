package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DatabaseStack16: ImageVector
  get() {
    if (_databaseStack16 != null) {
      return _databaseStack16!!
    }
    _databaseStack16 = fluentIcon(name = "Filled.DatabaseStack16", 16f) {
      materialPath {
          moveTo(3.0F, 5.487F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 1.355F, 2.29F, 2.5F, 5.0F, 2.5F)
          reflectiveCurveToRelative(5.0F, -1.145F, 5.0F, -2.5F)
          verticalLineTo(5.487F)
          curveTo(11.943F, 6.413F, 10.136F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveTo(4.057F, 6.413F, 3.0F, 5.487F)
          close()
          moveTo(8.0F, 6.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -1.119F, 5.0F, -2.5F)
          reflectiveCurveTo(10.761F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveTo(3.0F, 2.119F, 3.0F, 3.5F)
          reflectiveCurveTo(5.239F, 6.0F, 8.0F, 6.0F)
          close()
          moveTo(3.0F, 9.959F)
          verticalLineTo(12.5F)
          curveTo(3.0F, 13.925F, 5.149F, 15.0F, 8.0F, 15.0F)
          reflectiveCurveToRelative(5.0F, -1.075F, 5.0F, -2.5F)
          verticalLineTo(9.959F)
          curveToRelative(-1.066F, 0.936F, -2.889F, 1.541F, -5.0F, 1.541F)
          reflectiveCurveToRelative(-3.934F, -0.606F, -5.0F, -1.541F)
          close()        
      }
    }
    return _databaseStack16!!
  }

private var _databaseStack16: ImageVector? = null
