package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Desktop16: ImageVector
  get() {
    if (_desktop16 != null) {
      return _desktop16!!
    }
    _desktop16 = fluentIcon(name = "Regular.Desktop16", 16f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(5.997F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.005F)
          verticalLineToRelative(1.011F)
          horizontalLineTo(4.506F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(6.996F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(-1.01F)
          horizontalLineTo(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.896F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(5.003F, 9.997F)
          verticalLineToRelative(1.011F)
          horizontalLineTo(7.005F)
          verticalLineToRelative(-1.01F)
          horizontalLineToRelative(1.998F)
          close()
          moveTo(3.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.997F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.447F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _desktop16!!
  }

private var _desktop16: ImageVector? = null
