package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRightUp48: ImageVector
  get() {
    if (_arrowTurnRightUp48 != null) {
      return _arrowTurnRightUp48!!
    }
    _arrowTurnRightUp48 = fluentIcon(name = "Filled.ArrowTurnRightUp48", 48f) {
      materialPath {
          moveTo(7.5F, 35.0F)
          curveTo(6.672F, 35.0F, 6.0F, 35.672F, 6.0F, 36.5F)
          reflectiveCurveTo(6.672F, 38.0F, 7.5F, 38.0F)
          horizontalLineToRelative(18.0F)
          curveToRelative(4.142F, 0.0F, 7.5F, -3.358F, 7.5F, -7.5F)
          verticalLineTo(13.121F)
          lineToRelative(6.44F, 6.44F)
          curveToRelative(0.585F, 0.585F, 1.535F, 0.585F, 2.12F, 0.0F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          lineToRelative(-9.0F, -9.0F)
          curveToRelative(-0.585F, -0.585F, -1.535F, -0.585F, -2.12F, 0.0F)
          lineToRelative(-9.0F, 9.0F)
          curveToRelative(-0.586F, 0.586F, -0.586F, 1.536F, 0.0F, 2.122F)
          curveToRelative(0.585F, 0.585F, 1.535F, 0.585F, 2.12F, 0.0F)
          lineTo(30.0F, 13.12F)
          verticalLineTo(30.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-18.0F)
          close()        
      }
    }
    return _arrowTurnRightUp48!!
  }

private var _arrowTurnRightUp48: ImageVector? = null
