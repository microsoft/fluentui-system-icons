package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardShiftUppercase24: ImageVector
  get() {
    if (_keyboardShiftUppercase24 != null) {
      return _keyboardShiftUppercase24!!
    }
    _keyboardShiftUppercase24 = fluentIcon(name = "Filled.KeyboardShiftUppercase24", 24f) {
      materialPath {
          moveTo(13.32F, 2.603F)
          curveToRelative(-0.697F, -0.804F, -1.945F, -0.804F, -2.643F, 0.0F)
          lineToRelative(-8.245F, 9.504F)
          curveToRelative(-0.984F, 1.133F, -0.179F, 2.897F, 1.321F, 2.897F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.247F)
          curveTo(7.0F, 18.217F, 7.783F, 19.0F, 8.75F, 19.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-2.247F)
          horizontalLineToRelative(3.245F)
          curveToRelative(1.5F, 0.0F, 2.305F, -1.764F, 1.322F, -2.897F)
          lineToRelative(-8.245F, -9.504F)
          close()
          moveTo(7.75F, 20.5F)
          curveTo(7.336F, 20.5F, 7.0F, 20.836F, 7.0F, 21.25F)
          reflectiveCurveTo(7.336F, 22.0F, 7.75F, 22.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _keyboardShiftUppercase24!!
  }

private var _keyboardShiftUppercase24: ImageVector? = null
