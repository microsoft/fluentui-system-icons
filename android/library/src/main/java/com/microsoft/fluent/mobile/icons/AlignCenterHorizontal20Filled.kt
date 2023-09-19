package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterHorizontal20: ImageVector
  get() {
    if (_alignCenterHorizontal20 != null) {
      return _alignCenterHorizontal20!!
    }
    _alignCenterHorizontal20 = fluentIcon(name = "Filled.AlignCenterHorizontal20", 20f) {
      materialPath {
          moveTo(18.0F, 9.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.5F)
          curveTo(17.776F, 9.0F, 18.0F, 9.224F, 18.0F, 9.5F)
          close()        
      }
    }
    return _alignCenterHorizontal20!!
  }

private var _alignCenterHorizontal20: ImageVector? = null
