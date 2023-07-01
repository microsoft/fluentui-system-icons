package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Desktop20: ImageVector
  get() {
    if (_desktop20 != null) {
      return _desktop20!!
    }
    _desktop20 = fluentIcon(name = "Filled.Desktop20", 20f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(10.0F)
          curveTo(2.0F, 14.328F, 2.672F, 15.0F, 3.5F, 15.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 17.0F, 5.0F, 17.224F, 5.0F, 17.5F)
          reflectiveCurveTo(5.224F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 17.0F, 14.5F, 17.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-10.0F)
          curveTo(18.0F, 2.672F, 17.328F, 2.0F, 16.5F, 2.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(12.0F, 15.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          close()        
      }
    }
    return _desktop20!!
  }

private var _desktop20: ImageVector? = null
