package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin12: ImageVector
  get() {
    if (_pin12 != null) {
      return _pin12!!
    }
    _pin12 = fluentIcon(name = "Filled.Pin12", 12f) {
      materialPath {
          moveTo(8.052F, 1.436F)
          curveTo(7.342F, 0.726F, 6.15F, 0.9F, 5.672F, 1.783F)
          lineTo(4.145F, 4.608F)
          lineToRelative(-2.33F, 0.928F)
          curveTo(1.659F, 5.598F, 1.545F, 5.735F, 1.51F, 5.9F)
          curveTo(1.476F, 6.064F, 1.528F, 6.235F, 1.647F, 6.354F)
          lineToRelative(1.646F, 1.647F)
          lineToRelative(-2.146F, 2.146F)
          lineTo(1.0F, 11.001F)
          lineToRelative(0.854F, -0.147F)
          lineTo(4.0F, 8.708F)
          lineToRelative(1.646F, 1.646F)
          curveToRelative(0.12F, 0.119F, 0.29F, 0.17F, 0.455F, 0.136F)
          curveToRelative(0.164F, -0.034F, 0.3F, -0.148F, 0.363F, -0.304F)
          lineToRelative(0.933F, -2.332F)
          lineToRelative(2.821F, -1.526F)
          curveToRelative(0.883F, -0.477F, 1.057F, -1.67F, 0.347F, -2.38F)
          lineTo(8.052F, 1.436F)
          close()        
      }
    }
    return _pin12!!
  }

private var _pin12: ImageVector? = null
