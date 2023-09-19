package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnDownLeft48: ImageVector
  get() {
    if (_arrowTurnDownLeft48 != null) {
      return _arrowTurnDownLeft48!!
    }
    _arrowTurnDownLeft48 = fluentIcon(name = "Filled.ArrowTurnDownLeft48", 48f) {
      materialPath {
          moveTo(35.0F, 7.5F)
          curveTo(35.0F, 6.672F, 35.672F, 6.0F, 36.5F, 6.0F)
          reflectiveCurveTo(38.0F, 6.672F, 38.0F, 7.5F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          horizontalLineTo(13.121F)
          lineToRelative(6.44F, 6.44F)
          curveToRelative(0.585F, 0.585F, 0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(-0.586F, 0.586F, -1.536F, 0.586F, -2.122F, 0.0F)
          lineToRelative(-9.0F, -9.0F)
          curveToRelative(-0.585F, -0.585F, -0.585F, -1.535F, 0.0F, -2.12F)
          lineToRelative(9.0F, -9.0F)
          curveToRelative(0.586F, -0.586F, 1.536F, -0.586F, 2.122F, 0.0F)
          curveToRelative(0.585F, 0.585F, 0.585F, 1.535F, 0.0F, 2.12F)
          lineTo(13.12F, 30.0F)
          horizontalLineTo(30.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-18.0F)
          close()        
      }
    }
    return _arrowTurnDownLeft48!!
  }

private var _arrowTurnDownLeft48: ImageVector? = null
