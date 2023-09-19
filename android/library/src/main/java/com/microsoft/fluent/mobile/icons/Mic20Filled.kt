package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mic20: ImageVector
  get() {
    if (_mic20 != null) {
      return _mic20!!
    }
    _mic20 = fluentIcon(name = "Filled.Mic20", 20f) {
      materialPath {
          moveTo(5.5F, 10.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(4.5F, 9.724F, 4.5F, 10.0F)
          curveToRelative(0.0F, 2.869F, 2.197F, 5.225F, 5.0F, 5.478F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.022F)
          curveToRelative(2.803F, -0.253F, 5.0F, -2.609F, 5.0F, -5.478F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(5.5F, 12.485F, 5.5F, 10.0F)
          close()
          moveToRelative(7.5F, 0.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(5.0F)
          close()        
      }
    }
    return _mic20!!
  }

private var _mic20: ImageVector? = null
