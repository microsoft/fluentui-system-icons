package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRightDown48: ImageVector
  get() {
    if (_arrowTurnRightDown48 != null) {
      return _arrowTurnRightDown48!!
    }
    _arrowTurnRightDown48 = fluentIcon(name = "Filled.ArrowTurnRightDown48", 48f) {
      materialPath {
          moveTo(7.5F, 13.0F)
          curveTo(6.672F, 13.0F, 6.0F, 12.328F, 6.0F, 11.5F)
          reflectiveCurveTo(6.672F, 10.0F, 7.5F, 10.0F)
          horizontalLineToRelative(18.0F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          verticalLineToRelative(17.379F)
          lineToRelative(6.44F, -6.44F)
          curveToRelative(0.585F, -0.585F, 1.535F, -0.585F, 2.12F, 0.0F)
          curveToRelative(0.586F, 0.586F, 0.586F, 1.536F, 0.0F, 2.122F)
          lineToRelative(-9.0F, 9.0F)
          curveToRelative(-0.585F, 0.585F, -1.535F, 0.585F, -2.12F, 0.0F)
          lineToRelative(-9.0F, -9.0F)
          curveToRelative(-0.586F, -0.586F, -0.586F, -1.536F, 0.0F, -2.122F)
          curveToRelative(0.585F, -0.585F, 1.535F, -0.585F, 2.12F, 0.0F)
          lineTo(30.0F, 34.88F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          horizontalLineToRelative(-18.0F)
          close()        
      }
    }
    return _arrowTurnRightDown48!!
  }

private var _arrowTurnRightDown48: ImageVector? = null
