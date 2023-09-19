package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowEdit16: ImageVector
  get() {
    if (_windowEdit16 != null) {
      return _windowEdit16!!
    }
    _windowEdit16 = fluentIcon(name = "Filled.WindowEdit16", 16f) {
      materialPath {
          moveTo(4.75F, 2.0F)
          curveTo(3.231F, 2.0F, 2.0F, 3.231F, 2.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 12.769F, 3.231F, 14.0F, 4.75F, 14.0F)
          horizontalLineToRelative(1.297F)
          lineToRelative(0.302F, -1.209F)
          curveToRelative(0.025F, -0.098F, 0.053F, -0.195F, 0.086F, -0.291F)
          horizontalLineTo(4.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(9.0F)
          verticalLineToRelative(1.177F)
          curveToRelative(0.479F, -0.19F, 1.003F, -0.228F, 1.5F, -0.118F)
          verticalLineTo(4.75F)
          curveTo(14.0F, 3.231F, 12.769F, 2.0F, 11.25F, 2.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(9.795F, 5.455F)
          curveToRelative(-0.61F, -0.61F, -1.598F, -0.61F, -2.207F, 0.0F)
          lineToRelative(-4.289F, 4.288F)
          curveToRelative(-0.356F, 0.356F, -0.608F, 0.802F, -0.73F, 1.29F)
          lineToRelative(-0.303F, 1.212F)
          curveToRelative(-0.112F, 0.446F, 0.293F, 0.85F, 0.739F, 0.739F)
          lineToRelative(1.211F, -0.303F)
          curveToRelative(0.488F, -0.122F, 0.934F, -0.375F, 1.29F, -0.73F)
          lineToRelative(4.289F, -4.289F)
          curveToRelative(0.61F, -0.61F, 0.61F, -1.598F, 0.0F, -2.207F)
          close()        
      }
    }
    return _windowEdit16!!
  }

private var _windowEdit16: ImageVector? = null
