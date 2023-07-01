package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Open20: ImageVector
  get() {
    if (_open20 != null) {
      return _open20!!
    }
    _open20 = fluentIcon(name = "Regular.Open20", 20f) {
      materialPath {
          moveTo(6.0F, 4.0F)
          curveTo(4.895F, 4.0F, 4.0F, 4.895F, 4.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(2.5F)
          curveTo(8.776F, 3.0F, 9.0F, 3.224F, 9.0F, 3.5F)
          reflectiveCurveTo(8.776F, 4.0F, 8.5F, 4.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(5.0F, -0.5F)
          curveTo(11.0F, 3.224F, 11.224F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(16.776F, 3.0F, 17.0F, 3.224F, 17.0F, 3.5F)
          verticalLineToRelative(5.0F)
          curveTo(17.0F, 8.776F, 16.776F, 9.0F, 16.5F, 9.0F)
          reflectiveCurveTo(16.0F, 8.776F, 16.0F, 8.5F)
          verticalLineTo(4.707F)
          lineToRelative(-4.146F, 4.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(15.293F, 4.0F)
          horizontalLineTo(11.5F)
          curveTo(11.224F, 4.0F, 11.0F, 3.776F, 11.0F, 3.5F)
          close()        
      }
    }
    return _open20!!
  }

private var _open20: ImageVector? = null
