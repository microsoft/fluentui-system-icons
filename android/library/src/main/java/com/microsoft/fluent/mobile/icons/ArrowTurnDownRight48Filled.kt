package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnDownRight48: ImageVector
  get() {
    if (_arrowTurnDownRight48 != null) {
      return _arrowTurnDownRight48!!
    }
    _arrowTurnDownRight48 = fluentIcon(name = "Filled.ArrowTurnDownRight48", 48f) {
      materialPath {
          moveTo(13.0F, 7.5F)
          curveTo(13.0F, 6.672F, 12.328F, 6.0F, 11.5F, 6.0F)
          reflectiveCurveTo(10.0F, 6.672F, 10.0F, 7.5F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          horizontalLineToRelative(17.379F)
          lineToRelative(-6.44F, 6.44F)
          curveToRelative(-0.585F, 0.585F, -0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(0.586F, 0.586F, 1.536F, 0.586F, 2.122F, 0.0F)
          lineToRelative(9.0F, -9.0F)
          curveToRelative(0.585F, -0.585F, 0.585F, -1.535F, 0.0F, -2.12F)
          lineToRelative(-9.0F, -9.0F)
          curveToRelative(-0.586F, -0.586F, -1.536F, -0.586F, -2.122F, 0.0F)
          curveToRelative(-0.585F, 0.585F, -0.585F, 1.535F, 0.0F, 2.12F)
          lineTo(34.88F, 30.0F)
          horizontalLineTo(17.5F)
          curveToRelative(-2.485F, 0.0F, -4.5F, -2.015F, -4.5F, -4.5F)
          verticalLineToRelative(-18.0F)
          close()        
      }
    }
    return _arrowTurnDownRight48!!
  }

private var _arrowTurnDownRight48: ImageVector? = null
