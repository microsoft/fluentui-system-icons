package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlideEraser24: ImageVector
  get() {
    if (_slideEraser24 != null) {
      return _slideEraser24!!
    }
    _slideEraser24 = fluentIcon(name = "Regular.SlideEraser24", 24f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(14.5F)
          curveTo(20.769F, 4.0F, 22.0F, 5.231F, 22.0F, 6.75F)
          verticalLineToRelative(5.786F)
          lineToRelative(-0.8F, -0.801F)
          curveToRelative(-0.21F, -0.21F, -0.447F, -0.374F, -0.7F, -0.493F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(4.75F)
          curveTo(4.06F, 5.5F, 3.5F, 6.06F, 3.5F, 6.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(7.265F)
          curveToRelative(0.017F, 0.534F, 0.204F, 1.063F, 0.561F, 1.5F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 20.0F, 2.0F, 18.769F, 2.0F, 17.25F)
          verticalLineTo(6.75F)
          close()
          moveTo(20.492F, 12.442F)
          curveToRelative(-0.586F, -0.586F, -1.536F, -0.586F, -2.121F, 0.0F)
          lineToRelative(-3.111F, 3.11F)
          lineToRelative(4.207F, 4.207F)
          lineToRelative(3.11F, -3.11F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          lineToRelative(-2.085F, -2.085F)
          close()
          moveToRelative(-7.039F, 4.918F)
          lineToRelative(1.1F, -1.1F)
          lineToRelative(4.207F, 4.207F)
          lineToRelative(-1.1F, 1.1F)
          curveToRelative(-0.586F, 0.585F, -1.535F, 0.585F, -2.121F, 0.0F)
          lineToRelative(-2.086F, -2.086F)
          curveToRelative(-0.586F, -0.586F, -0.586F, -1.536F, 0.0F, -2.122F)
          close()        
      }
    }
    return _slideEraser24!!
  }

private var _slideEraser24: ImageVector? = null
