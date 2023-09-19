package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BinFull20: ImageVector
  get() {
    if (_binFull20 != null) {
      return _binFull20!!
    }
    _binFull20 = fluentIcon(name = "Filled.BinFull20", 20f) {
      materialPath {
          moveTo(14.752F, 2.932F)
          curveToRelative(0.239F, -0.14F, 0.319F, -0.445F, 0.18F, -0.684F)
          curveToRelative(-0.14F, -0.238F, -0.445F, -0.319F, -0.684F, -0.18F)
          lineToRelative(-12.0F, 7.0F)
          curveTo(2.094F, 9.158F, 2.0F, 9.322F, 2.0F, 9.5F)
          verticalLineToRelative(6.0F)
          curveTo(2.0F, 16.88F, 3.12F, 18.0F, 4.5F, 18.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-6.0F)
          curveTo(18.0F, 9.224F, 17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineTo(17.0F)
          verticalLineTo(6.5F)
          curveTo(17.0F, 5.672F, 16.328F, 5.0F, 15.5F, 5.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(12.672F, 5.0F, 12.0F, 5.672F, 12.0F, 6.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(9.5F)
          curveTo(8.672F, 7.0F, 8.0F, 7.672F, 8.0F, 8.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(4.35F)
          lineToRelative(10.402F, -6.068F)
          close()
          moveTo(12.0F, 8.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.5F)
          curveTo(9.0F, 8.224F, 9.224F, 8.0F, 9.5F, 8.0F)
          horizontalLineTo(12.0F)
          close()
          moveToRelative(1.0F, 1.0F)
          verticalLineTo(6.5F)
          curveTo(13.0F, 6.224F, 13.224F, 6.0F, 13.5F, 6.0F)
          horizontalLineToRelative(2.0F)
          curveTo(15.776F, 6.0F, 16.0F, 6.224F, 16.0F, 6.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _binFull20!!
  }

private var _binFull20: ImageVector? = null
