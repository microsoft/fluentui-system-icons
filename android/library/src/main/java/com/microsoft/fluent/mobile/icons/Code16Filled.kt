package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Code16: ImageVector
  get() {
    if (_code16 != null) {
      return _code16!!
    }
    _code16 = fluentIcon(name = "Filled.Code16", 16f) {
      materialPath {
          moveTo(9.905F, 2.815F)
          curveToRelative(0.378F, 0.168F, 0.549F, 0.611F, 0.38F, 0.99F)
          lineToRelative(-4.0F, 9.0F)
          curveToRelative(-0.168F, 0.378F, -0.611F, 0.549F, -0.99F, 0.38F)
          curveToRelative(-0.378F, -0.168F, -0.549F, -0.61F, -0.38F, -0.99F)
          lineToRelative(4.0F, -9.0F)
          curveToRelative(0.168F, -0.378F, 0.611F, -0.548F, 0.99F, -0.38F)
          close()
          moveTo(4.498F, 5.19F)
          curveToRelative(0.31F, 0.275F, 0.338F, 0.749F, 0.063F, 1.058F)
          lineTo(3.003F, 8.0F)
          lineToRelative(1.558F, 1.752F)
          curveToRelative(0.275F, 0.31F, 0.247F, 0.784F, -0.063F, 1.059F)
          curveToRelative(-0.31F, 0.275F, -0.783F, 0.247F, -1.059F, -0.063F)
          lineToRelative(-2.0F, -2.25F)
          curveToRelative(-0.252F, -0.284F, -0.252F, -0.712F, 0.0F, -0.996F)
          lineToRelative(2.0F, -2.25F)
          curveTo(3.715F, 4.942F, 4.19F, 4.914F, 4.5F, 5.19F)
          close()
          moveToRelative(7.004F, 0.0F)
          curveToRelative(0.31F, -0.276F, 0.783F, -0.248F, 1.059F, 0.062F)
          lineToRelative(2.0F, 2.25F)
          curveToRelative(0.252F, 0.284F, 0.252F, 0.712F, 0.0F, 0.997F)
          lineToRelative(-2.0F, 2.25F)
          curveToRelative(-0.276F, 0.309F, -0.75F, 0.337F, -1.06F, 0.062F)
          curveToRelative(-0.309F, -0.275F, -0.337F, -0.75F, -0.062F, -1.06F)
          lineToRelative(1.557F, -1.75F)
          lineToRelative(-1.557F, -1.752F)
          curveToRelative(-0.275F, -0.31F, -0.247F, -0.784F, 0.063F, -1.06F)
          close()        
      }
    }
    return _code16!!
  }

private var _code16: ImageVector? = null
