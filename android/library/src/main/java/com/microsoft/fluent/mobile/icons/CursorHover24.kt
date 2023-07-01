package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHover24: ImageVector
  get() {
    if (_cursorHover24 != null) {
      return _cursorHover24!!
    }
    _cursorHover24 = fluentIcon(name = "Filled.CursorHover24", 24f) {
      materialPath {
          moveTo(4.5F, 4.0F)
          curveTo(3.12F, 4.0F, 2.0F, 5.12F, 2.0F, 6.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 16.88F, 3.12F, 18.0F, 4.5F, 18.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-7.25F)
          curveToRelative(0.0F, -0.66F, 0.37F, -1.263F, 0.959F, -1.561F)
          curveToRelative(0.588F, -0.298F, 1.294F, -0.24F, 1.826F, 0.15F)
          lineToRelative(7.5F, 7.5F)
          curveToRelative(0.375F, 0.275F, 0.615F, 0.679F, 0.69F, 1.116F)
          curveTo(21.128F, 17.733F, 22.0F, 16.718F, 22.0F, 15.5F)
          verticalLineToRelative(-9.0F)
          curveTo(22.0F, 5.12F, 20.88F, 4.0F, 19.5F, 4.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveToRelative(6.78F, 6.22F)
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
      }
    }
    return _cursorHover24!!
  }

private var _cursorHover24: ImageVector? = null
