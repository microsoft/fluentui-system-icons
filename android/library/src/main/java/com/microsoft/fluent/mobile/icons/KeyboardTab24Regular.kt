package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.KeyboardTab24: ImageVector
  get() {
    if (_keyboardTab24 != null) {
      return _keyboardTab24!!
    }
    _keyboardTab24 = fluentIcon(name = "Regular.KeyboardTab24", 24f) {
      materialPath {
          moveTo(18.03F, 11.47F)
          lineToRelative(-6.5F, -6.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.267F, 0.266F, -0.29F, 0.683F, -0.073F, 0.976F)
          lineTo(10.47F, 6.03F)
          lineToRelative(5.22F, 5.22F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.38F, 0.0F, -0.693F, 0.282F, -0.743F, 0.648F)
          lineTo(3.0F, 12.0F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(3.75F, 12.75F)
          horizontalLineToRelative(11.94F)
          lineToRelative(-5.22F, 5.22F)
          curveToRelative(-0.267F, 0.266F, -0.29F, 0.683F, -0.073F, 0.976F)
          lineToRelative(0.073F, 0.084F)
          curveToRelative(0.266F, 0.267F, 0.683F, 0.29F, 0.976F, 0.073F)
          lineToRelative(0.084F, -0.073F)
          lineToRelative(6.5F, -6.5F)
          curveToRelative(0.267F, -0.266F, 0.29F, -0.683F, 0.073F, -0.976F)
          lineTo(18.03F, 11.47F)
          lineToRelative(-6.5F, -6.5F)
          lineToRelative(6.5F, 6.5F)
          close()
          moveTo(21.0F, 18.5F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(19.5F, 5.086F, 19.5F, 5.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(21.0F, 18.914F, 21.0F, 18.5F)
          close()        
      }
    }
    return _keyboardTab24!!
  }

private var _keyboardTab24: ImageVector? = null
