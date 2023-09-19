package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Alert12: ImageVector
  get() {
    if (_alert12 != null) {
      return _alert12!!
    }
    _alert12 = fluentIcon(name = "Filled.Alert12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(3.79F, 1.0F, 2.0F, 2.79F, 2.0F, 5.0F)
          verticalLineToRelative(1.382F)
          lineTo(1.053F, 8.276F)
          curveToRelative(-0.078F, 0.155F, -0.07F, 0.34F, 0.022F, 0.487F)
          curveTo(1.165F, 8.91F, 1.327F, 9.0F, 1.5F, 9.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.173F, 0.0F, 0.334F, -0.09F, 0.425F, -0.237F)
          curveToRelative(0.091F, -0.147F, 0.1F, -0.332F, 0.022F, -0.487F)
          lineTo(10.0F, 6.382F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(0.0F, 10.5F)
          curveToRelative(-0.932F, 0.0F, -1.715F, -0.637F, -1.937F, -1.5F)
          horizontalLineToRelative(3.874F)
          curveTo(7.715F, 10.863F, 6.932F, 11.5F, 6.0F, 11.5F)
          close()        
      }
    }
    return _alert12!!
  }

private var _alert12: ImageVector? = null
