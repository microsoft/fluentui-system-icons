package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideEraser24: ImageVector
  get() {
    if (_slideEraser24 != null) {
      return _slideEraser24!!
    }
    _slideEraser24 = fluentIcon(name = "Filled.SlideEraser24", 24f) {
      materialPath {
          moveTo(4.75F, 4.0F)
          curveTo(3.231F, 4.0F, 2.0F, 5.231F, 2.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 18.769F, 3.231F, 20.0F, 4.75F, 20.0F)
          horizontalLineToRelative(7.826F)
          curveToRelative(-0.803F, -0.982F, -0.746F, -2.432F, 0.17F, -3.348F)
          lineToRelative(4.917F, -4.917F)
          curveToRelative(0.977F, -0.977F, 2.56F, -0.977F, 3.536F, 0.0F)
          lineToRelative(0.801F, 0.8F)
          verticalLineTo(6.75F)
          curveTo(22.0F, 5.231F, 20.769F, 4.0F, 19.25F, 4.0F)
          horizontalLineTo(4.75F)
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
