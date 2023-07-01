package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Folder32: ImageVector
  get() {
    if (_folder32 != null) {
      return _folder32!!
    }
    _folder32 = fluentIcon(name = "Regular.Folder32", 32f) {
      materialPath {
          moveTo(4.0F, 10.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineToRelative(-9.65F)
          lineToRelative(-2.225F, -1.78F)
          curveTo(11.947F, 6.076F, 11.727F, 6.0F, 11.5F, 6.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          close()
          moveToRelative(2.0F, 0.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(3.15F)
          lineToRelative(1.736F, 1.389F)
          lineTo(11.113F, 11.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(9.187F, 0.0F)
          horizontalLineTo(24.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-9.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.249F, 0.0F, 0.489F, -0.093F, 0.673F, -0.26F)
          lineTo(15.187F, 10.0F)
          close()        
      }
    }
    return _folder32!!
  }

private var _folder32: ImageVector? = null
