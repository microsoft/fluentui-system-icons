package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.OpenFolder16: ImageVector
  get() {
    if (_openFolder16 != null) {
      return _openFolder16!!
    }
    _openFolder16 = fluentIcon(name = "Regular.OpenFolder16", 16f) {
      materialPath {
          moveTo(2.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(2.5F)
          curveTo(14.0F, 7.776F, 13.776F, 8.0F, 13.5F, 8.0F)
          reflectiveCurveTo(13.0F, 7.776F, 13.0F, 7.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(3.5F)
          curveTo(8.776F, 13.0F, 9.0F, 13.224F, 9.0F, 13.5F)
          reflectiveCurveTo(8.776F, 14.0F, 8.5F, 14.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(4.507F, 1.0F)
          curveToRelative(-0.13F, -0.002F, -0.261F, 0.047F, -0.36F, 0.146F)
          curveTo(6.092F, 6.2F, 6.054F, 6.261F, 6.03F, 6.328F)
          curveTo(6.01F, 6.38F, 6.0F, 6.439F, 6.0F, 6.5F)
          verticalLineToRelative(4.0F)
          curveTo(6.0F, 10.776F, 6.224F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveTo(7.0F, 10.776F, 7.0F, 10.5F)
          verticalLineTo(7.707F)
          lineToRelative(5.146F, 5.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(7.707F, 7.0F)
          horizontalLineTo(10.5F)
          curveTo(10.776F, 7.0F, 11.0F, 6.776F, 11.0F, 6.5F)
          reflectiveCurveTo(10.776F, 6.0F, 10.5F, 6.0F)
          horizontalLineTo(6.507F)
          close()        
      }
    }
    return _openFolder16!!
  }

private var _openFolder16: ImageVector? = null
