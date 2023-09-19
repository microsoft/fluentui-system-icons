package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Battery024: ImageVector
  get() {
    if (_battery024 != null) {
      return _battery024!!
    }
    _battery024 = fluentIcon(name = "Regular.Battery024", 024f) {
      materialPath {
          moveTo(17.0F, 6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.182F, 0.0F, 0.353F, 0.049F, 0.5F, 0.134F)
          curveTo(21.8F, 10.307F, 22.0F, 10.63F, 22.0F, 11.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.37F, -0.2F, 0.693F, -0.5F, 0.866F)
          curveTo(21.353F, 13.951F, 21.182F, 14.0F, 21.0F, 14.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveToRelative(-0.002F, 1.5F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.78F, 0.0F, -1.42F, 0.595F, -1.494F, 1.355F)
          lineTo(3.5F, 9.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.78F, 0.595F, 1.42F, 1.355F, 1.493F)
          lineTo(5.0F, 16.5F)
          horizontalLineToRelative(11.998F)
          curveToRelative(0.78F, 0.0F, 1.42F, -0.595F, 1.493F, -1.355F)
          lineTo(18.498F, 15.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.78F, -0.595F, -1.42F, -1.355F, -1.493F)
          lineTo(16.998F, 7.5F)
          close()        
      }
    }
    return _battery024!!
  }

private var _battery024: ImageVector? = null
