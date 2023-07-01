package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Fluent20: ImageVector
  get() {
    if (_fluent20 != null) {
      return _fluent20!!
    }
    _fluent20 = fluentIcon(name = "Filled.Fluent20", 20f) {
      materialPath {
          moveTo(10.724F, 2.053F)
          curveToRelative(-0.141F, -0.07F, -0.307F, -0.07F, -0.448F, 0.0F)
          lineToRelative(-5.0F, 2.5F)
          curveTo(5.107F, 4.638F, 5.0F, 4.81F, 5.0F, 5.0F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.176F, 0.092F, 0.338F, 0.243F, 0.429F)
          lineToRelative(5.0F, 3.0F)
          curveToRelative(0.154F, 0.092F, 0.347F, 0.095F, 0.503F, 0.006F)
          curveTo(10.903F, 17.846F, 11.0F, 17.68F, 11.0F, 17.5F)
          verticalLineToRelative(-4.691F)
          lineToRelative(4.724F, -2.362F)
          curveTo(15.893F, 10.363F, 16.0F, 10.19F, 16.0F, 10.0F)
          reflectiveCurveToRelative(-0.107F, -0.363F, -0.276F, -0.447F)
          lineTo(11.618F, 7.5F)
          lineToRelative(4.106F, -2.053F)
          curveTo(15.893F, 5.362F, 16.0F, 5.19F, 16.0F, 5.0F)
          reflectiveCurveToRelative(-0.107F, -0.362F, -0.276F, -0.447F)
          lineToRelative(-5.0F, -2.5F)
          close()        
      }
    }
    return _fluent20!!
  }

private var _fluent20: ImageVector? = null
