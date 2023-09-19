package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRight48: ImageVector
  get() {
    if (_arrowTurnRight48 != null) {
      return _arrowTurnRight48!!
    }
    _arrowTurnRight48 = fluentIcon(name = "Filled.ArrowTurnRight48", 48f) {
      materialPath {
          moveTo(30.56F, 26.56F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          curveToRelative(-0.586F, -0.585F, -0.586F, -1.535F, 0.0F, -2.12F)
          lineTo(34.877F, 18.0F)
          horizontalLineTo(17.5F)
          curveToRelative(-2.485F, 0.0F, -4.5F, 2.015F, -4.5F, 4.5F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 0.83F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(10.0F, 41.33F, 10.0F, 40.5F)
          verticalLineToRelative(-18.0F)
          curveToRelative(0.0F, -4.141F, 3.358F, -7.5F, 7.5F, -7.5F)
          horizontalLineToRelative(17.38F)
          lineToRelative(-6.44F, -6.44F)
          curveToRelative(-0.586F, -0.585F, -0.586F, -1.535F, 0.0F, -2.12F)
          curveToRelative(0.585F, -0.587F, 1.535F, -0.587F, 2.12F, 0.0F)
          lineToRelative(9.0F, 9.0F)
          curveToRelative(0.586F, 0.585F, 0.586F, 1.535F, 0.0F, 2.12F)
          lineToRelative(-9.0F, 9.0F)
          close()        
      }
    }
    return _arrowTurnRight48!!
  }

private var _arrowTurnRight48: ImageVector? = null
