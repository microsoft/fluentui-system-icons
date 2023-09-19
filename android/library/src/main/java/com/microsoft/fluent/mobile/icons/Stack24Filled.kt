package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stack24: ImageVector
  get() {
    if (_stack24 != null) {
      return _stack24!!
    }
    _stack24 = fluentIcon(name = "Filled.Stack24", 24f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(2.5F, 13.5F)
          curveToRelative(-0.932F, 0.0F, -1.715F, -0.637F, -1.937F, -1.5F)
          horizontalLineTo(15.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(6.563F)
          curveToRelative(0.863F, 0.222F, 1.5F, 1.005F, 1.5F, 1.937F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(9.0F, 20.0F)
          curveToRelative(-0.932F, 0.0F, -1.715F, -0.637F, -1.937F, -1.5F)
          horizontalLineToRelative(9.187F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineTo(9.063F)
          curveTo(21.363F, 9.285F, 22.0F, 10.068F, 22.0F, 11.0F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 3.176F, -2.574F, 5.75F, -5.75F, 5.75F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _stack24!!
  }

private var _stack24: ImageVector? = null
