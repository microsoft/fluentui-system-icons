package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CursorHover24: ImageVector
  get() {
    if (_cursorHover24 != null) {
      return _cursorHover24!!
    }
    _cursorHover24 = fluentIcon(name = "Regular.CursorHover24", 24f) {
      materialPath {
          moveTo(19.5F, 5.5F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(18.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 18.0F, 2.0F, 16.88F, 2.0F, 15.5F)
          verticalLineToRelative(-9.0F)
          curveTo(2.0F, 5.12F, 3.12F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(20.88F, 4.0F, 22.0F, 5.12F, 22.0F, 6.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.218F, -0.872F, 2.233F, -2.025F, 2.455F)
          curveToRelative(-0.075F, -0.437F, -0.315F, -0.841F, -0.69F, -1.116F)
          lineTo(18.946F, 16.5F)
          horizontalLineTo(19.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-9.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-8.22F, 4.72F)
          curveToRelative(-0.214F, -0.215F, -0.537F, -0.279F, -0.817F, -0.163F)
          curveTo(10.183F, 10.173F, 10.0F, 10.447F, 10.0F, 10.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.328F, 0.214F, 0.619F, 0.527F, 0.716F)
          curveToRelative(0.314F, 0.098F, 0.655F, -0.02F, 0.841F, -0.291F)
          lineToRelative(2.467F, -3.588F)
          lineToRelative(4.26F, 0.897F)
          curveToRelative(0.325F, 0.068F, 0.656F, -0.085F, 0.815F, -0.377F)
          curveToRelative(0.157F, -0.292F, 0.105F, -0.653F, -0.13F, -0.887F)
          lineToRelative(-7.5F, -7.5F)
          close()
          moveToRelative(0.22F, 8.615F)
          verticalLineToRelative(-6.274F)
          lineToRelative(4.436F, 4.435F)
          lineToRelative(-2.281F, -0.48F)
          curveToRelative(-0.297F, -0.062F, -0.601F, 0.06F, -0.773F, 0.31F)
          lineToRelative(-1.382F, 2.01F)
          close()        
      }
    }
    return _cursorHover24!!
  }

private var _cursorHover24: ImageVector? = null
