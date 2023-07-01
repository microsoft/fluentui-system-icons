package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ExpandUpLeft20: ImageVector
  get() {
    if (_expandUpLeft20 != null) {
      return _expandUpLeft20!!
    }
    _expandUpLeft20 = fluentIcon(name = "Filled.ExpandUpLeft20", 20f) {
      materialPath {
          moveTo(14.0F, 4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-2.5F)
          curveTo(4.0F, 11.224F, 3.776F, 11.0F, 3.5F, 11.0F)
          reflectiveCurveTo(3.0F, 11.224F, 3.0F, 11.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(11.224F, 3.0F, 11.0F, 3.224F, 11.0F, 3.5F)
          reflectiveCurveTo(11.224F, 4.0F, 11.5F, 4.0F)
          horizontalLineTo(14.0F)
          close()
          moveTo(9.0F, 3.5F)
          curveTo(9.0F, 3.224F, 8.776F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(5.0F)
          curveTo(3.0F, 8.776F, 3.224F, 9.0F, 3.5F, 9.0F)
          reflectiveCurveTo(4.0F, 8.776F, 4.0F, 8.5F)
          verticalLineTo(4.707F)
          lineToRelative(4.146F, 4.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.707F)
          lineTo(4.708F, 4.0F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 4.0F, 9.0F, 3.776F, 9.0F, 3.5F)
          close()        
      }
    }
    return _expandUpLeft20!!
  }

private var _expandUpLeft20: ImageVector? = null
