package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHover48: ImageVector
  get() {
    if (_cursorHover48 != null) {
      return _cursorHover48!!
    }
    _cursorHover48 = fluentIcon(name = "Filled.CursorHover48", 48f) {
      materialPath {
          moveTo(8.75F, 9.25F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineTo(18.0F)
          verticalLineToRelative(-13.5F)
          curveToRelative(0.0F, -1.314F, 0.792F, -2.5F, 2.006F, -3.003F)
          curveToRelative(1.215F, -0.503F, 2.613F, -0.224F, 3.542F, 0.705F)
          lineToRelative(15.5F, 15.5F)
          curveToRelative(0.095F, 0.095F, 0.183F, 0.194F, 0.263F, 0.297F)
          curveToRelative(1.905F, -0.032F, 3.439F, -1.587F, 3.439F, -3.499F)
          verticalLineToRelative(-18.5F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineTo(8.75F)
          close()
          moveToRelative(13.384F, 11.116F)
          curveToRelative(-0.358F, -0.357F, -0.895F, -0.464F, -1.362F, -0.27F)
          curveTo(20.305F, 20.288F, 20.0F, 20.743F, 20.0F, 21.25F)
          verticalLineToRelative(21.5F)
          curveToRelative(0.0F, 0.55F, 0.359F, 1.034F, 0.884F, 1.195F)
          curveToRelative(0.525F, 0.161F, 1.094F, -0.04F, 1.401F, -0.495F)
          lineToRelative(4.961F, -7.333F)
          curveToRelative(0.178F, -0.262F, 0.5F, -0.385F, 0.808F, -0.306F)
          lineToRelative(8.386F, 2.15F)
          curveToRelative(0.545F, 0.14F, 1.117F, -0.102F, 1.396F, -0.592F)
          curveToRelative(0.279F, -0.49F, 0.196F, -1.105F, -0.202F, -1.503F)
          lineToRelative(-15.5F, -15.5F)
          close()        
      }
    }
    return _cursorHover48!!
  }

private var _cursorHover48: ImageVector? = null
