package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnLeftDown48: ImageVector
  get() {
    if (_arrowTurnLeftDown48 != null) {
      return _arrowTurnLeftDown48!!
    }
    _arrowTurnLeftDown48 = fluentIcon(name = "Filled.ArrowTurnLeftDown48", 48f) {
      materialPath {
          moveTo(40.5F, 13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(41.328F, 10.0F, 40.5F, 10.0F)
          horizontalLineToRelative(-18.0F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          verticalLineToRelative(17.379F)
          lineToRelative(-6.44F, -6.44F)
          curveToRelative(-0.585F, -0.585F, -1.535F, -0.585F, -2.12F, 0.0F)
          curveToRelative(-0.587F, 0.586F, -0.587F, 1.536F, 0.0F, 2.122F)
          lineToRelative(9.0F, 9.0F)
          curveToRelative(0.585F, 0.585F, 1.535F, 0.585F, 2.12F, 0.0F)
          lineToRelative(9.0F, -9.0F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          curveToRelative(-0.585F, -0.585F, -1.535F, -0.585F, -2.12F, 0.0F)
          lineTo(18.0F, 34.88F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          horizontalLineToRelative(18.0F)
          close()        
      }
    }
    return _arrowTurnLeftDown48!!
  }

private var _arrowTurnLeftDown48: ImageVector? = null
