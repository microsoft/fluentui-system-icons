package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.OpenFolder20: ImageVector
  get() {
    if (_openFolder20 != null) {
      return _openFolder20!!
    }
    _openFolder20 = fluentIcon(name = "Regular.OpenFolder20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 16.0F, 10.5F, 16.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.5F)
          curveTo(16.0F, 8.776F, 16.224F, 9.0F, 16.5F, 9.0F)
          reflectiveCurveTo(17.0F, 8.776F, 17.0F, 8.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(2.146F, 5.146F)
          curveToRelative(0.1F, -0.099F, 0.23F, -0.148F, 0.36F, -0.146F)
          horizontalLineTo(13.5F)
          curveTo(13.776F, 8.0F, 14.0F, 8.224F, 14.0F, 8.5F)
          reflectiveCurveTo(13.776F, 9.0F, 13.5F, 9.0F)
          horizontalLineTo(9.707F)
          lineToRelative(6.147F, 6.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(9.0F, 9.707F)
          verticalLineTo(13.5F)
          curveTo(9.0F, 13.776F, 8.776F, 14.0F, 8.5F, 14.0F)
          reflectiveCurveTo(8.0F, 13.776F, 8.0F, 13.5F)
          verticalLineTo(8.494F)
          curveTo(8.0F, 8.435F, 8.011F, 8.38F, 8.03F, 8.328F)
          curveTo(8.055F, 8.262F, 8.093F, 8.2F, 8.147F, 8.147F)
          close()        
      }
    }
    return _openFolder20!!
  }

private var _openFolder20: ImageVector? = null
