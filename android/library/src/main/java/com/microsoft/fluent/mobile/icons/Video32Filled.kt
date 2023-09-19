package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Video32: ImageVector
  get() {
    if (_video32 != null) {
      return _video32!!
    }
    _video32 = fluentIcon(name = "Filled.Video32", 32f) {
      materialPath {
          moveTo(20.5F, 10.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          horizontalLineTo(6.5F)
          curveTo(4.015F, 5.5F, 2.0F, 7.515F, 2.0F, 10.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineTo(16.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(1.5F, 9.8F)
          lineToRelative(5.013F, 3.76F)
          curveTo(28.243F, 24.483F, 30.0F, 23.605F, 30.0F, 22.067F)
          verticalLineTo(9.934F)
          curveToRelative(0.0F, -1.539F, -1.756F, -2.417F, -2.987F, -1.494F)
          lineTo(22.0F, 12.2F)
          verticalLineToRelative(7.6F)
          close()        
      }
    }
    return _video32!!
  }

private var _video32: ImageVector? = null
