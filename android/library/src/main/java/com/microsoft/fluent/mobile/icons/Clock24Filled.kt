package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clock24: ImageVector
  get() {
    if (_clock24 != null) {
      return _clock24!!
    }
    _clock24 = fluentIcon(name = "Filled.Clock24", 24f) {
      materialPath {
          moveTo(15.25F, 13.5F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-6.0F)
          curveTo(10.5F, 6.336F, 10.836F, 6.0F, 11.25F, 6.0F)
          reflectiveCurveTo(12.0F, 6.336F, 12.0F, 6.75F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.478F, 2.0F, 2.0F, 6.478F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.478F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.478F, 10.0F, -10.0F)
          reflectiveCurveTo(17.522F, 2.0F, 12.0F, 2.0F)
          close()        
      }
    }
    return _clock24!!
  }

private var _clock24: ImageVector? = null
