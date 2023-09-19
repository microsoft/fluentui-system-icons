package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tag16: ImageVector
  get() {
    if (_tag16 != null) {
      return _tag16!!
    }
    _tag16 = fluentIcon(name = "Filled.Tag16", 16f) {
      materialPath {
          moveTo(2.587F, 7.314F)
          curveToRelative(-0.783F, 0.78F, -0.783F, 2.043F, 0.0F, 2.822F)
          lineToRelative(3.296F, 3.28F)
          curveToRelative(0.783F, 0.779F, 2.053F, 0.779F, 2.836F, 0.0F)
          lineToRelative(4.67F, -4.647F)
          curveToRelative(0.372F, -0.37F, 0.583F, -0.872F, 0.587F, -1.397F)
          lineTo(14.0F, 4.01F)
          curveToRelative(0.008F, -1.111F, -0.897F, -2.015F, -2.013F, -2.01F)
          lineToRelative(-3.25F, 0.014F)
          curveTo(8.206F, 2.015F, 7.7F, 2.226F, 7.326F, 2.598F)
          lineToRelative(-4.74F, 4.716F)
          close()
          moveTo(11.0F, 6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()        
      }
    }
    return _tag16!!
  }

private var _tag16: ImageVector? = null
