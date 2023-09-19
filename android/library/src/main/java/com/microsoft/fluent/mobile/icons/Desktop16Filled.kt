package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Desktop16: ImageVector
  get() {
    if (_desktop16 != null) {
      return _desktop16!!
    }
    _desktop16 = fluentIcon(name = "Filled.Desktop16", 16f) {
      materialPath {
          moveTo(3.501F, 2.0F)
          curveToRelative(-0.829F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(6.997F)
          curveToRelative(0.0F, 0.829F, 0.671F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.495F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(4.22F, 14.0F, 4.496F, 14.0F)
          horizontalLineTo(11.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 13.0F, 11.5F, 13.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-1.003F)
          horizontalLineToRelative(2.501F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(5.5F, 9.997F)
          verticalLineTo(13.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-1.003F)
          horizontalLineToRelative(2.0F)
          close()        
      }
    }
    return _desktop16!!
  }

private var _desktop16: ImageVector? = null
