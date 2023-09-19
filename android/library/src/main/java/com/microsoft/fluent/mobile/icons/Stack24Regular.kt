package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Stack24: ImageVector
  get() {
    if (_stack24 != null) {
      return _stack24!!
    }
    _stack24 = fluentIcon(name = "Regular.Stack24", 24f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(11.0F, 1.5F)
          horizontalLineTo(4.0F)
          curveTo(3.724F, 5.5F, 3.5F, 5.724F, 3.5F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()
          moveTo(4.563F, 16.0F)
          curveToRelative(0.222F, 0.863F, 1.005F, 1.5F, 1.937F, 1.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.932F, -0.637F, -1.715F, -1.5F, -1.937F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(4.563F)
          close()
          moveToRelative(2.5F, 2.5F)
          curveTo(7.285F, 19.363F, 8.068F, 20.0F, 9.0F, 20.0F)
          horizontalLineToRelative(7.25F)
          curveToRelative(3.176F, 0.0F, 5.75F, -2.574F, 5.75F, -5.75F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -0.932F, -0.637F, -1.715F, -1.5F, -1.937F)
          verticalLineToRelative(5.187F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineTo(7.063F)
          close()        
      }
    }
    return _stack24!!
  }

private var _stack24: ImageVector? = null
