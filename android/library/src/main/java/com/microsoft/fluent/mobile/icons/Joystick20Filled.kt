package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Joystick20: ImageVector
  get() {
    if (_joystick20 != null) {
      return _joystick20!!
    }
    _joystick20 = fluentIcon(name = "Filled.Joystick20", 20f) {
      materialPath {
          moveTo(10.5F, 7.958F)
          curveTo(11.919F, 7.721F, 13.0F, 6.487F, 13.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveTo(7.0F, 3.343F, 7.0F, 5.0F)
          curveToRelative(0.0F, 1.487F, 1.081F, 2.72F, 2.5F, 2.958F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(6.672F, 11.0F, 6.0F, 11.672F, 6.0F, 12.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(7.958F)
          close()
          moveTo(3.0F, 16.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 18.0F, 3.0F, 17.776F, 3.0F, 17.5F)
          verticalLineTo(16.0F)
          close()        
      }
    }
    return _joystick20!!
  }

private var _joystick20: ImageVector? = null
