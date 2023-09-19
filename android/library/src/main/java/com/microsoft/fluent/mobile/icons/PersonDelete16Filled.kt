package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonDelete16: ImageVector
  get() {
    if (_personDelete16 != null) {
      return _personDelete16!!
    }
    _personDelete16 = fluentIcon(name = "Filled.PersonDelete16", 16f) {
      materialPath {
          moveTo(9.5F, 9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.971F, -1.86F, 4.0F, -5.0F, 4.0F)
          curveToRelative(-3.14F, 0.0F, -5.0F, -2.029F, -5.0F, -4.0F)
          verticalLineToRelative(-0.5F)
          curveTo(1.0F, 9.672F, 1.672F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveTo(6.0F, 2.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveTo(7.519F, 8.0F, 6.0F, 8.0F)
          reflectiveCurveTo(3.25F, 6.769F, 3.25F, 5.25F)
          reflectiveCurveTo(4.481F, 2.5F, 6.0F, 2.5F)
          close()
          moveToRelative(4.784F, -1.411F)
          lineToRelative(0.07F, 0.058F)
          lineTo(12.5F, 2.792F)
          lineToRelative(1.646F, -1.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(13.207F, 3.5F)
          lineToRelative(1.647F, 1.646F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          curveTo(14.68F, 6.027F, 14.41F, 6.046F, 14.216F, 5.91F)
          lineToRelative(-0.07F, -0.057F)
          lineTo(12.5F, 4.207F)
          lineToRelative(-1.646F, 1.647F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(11.793F, 3.5F)
          lineToRelative(-1.647F, -1.647F)
          curveTo(9.973F, 1.68F, 9.954F, 1.411F, 10.09F, 1.216F)
          lineToRelative(0.057F, -0.07F)
          curveToRelative(0.152F, -0.151F, 0.378F, -0.185F, 0.562F, -0.1F)
          lineToRelative(0.076F, 0.043F)
          close()        
      }
    }
    return _personDelete16!!
  }

private var _personDelete16: ImageVector? = null
