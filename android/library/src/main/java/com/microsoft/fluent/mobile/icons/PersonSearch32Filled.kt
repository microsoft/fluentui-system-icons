package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonSearch32: ImageVector
  get() {
    if (_personSearch32 != null) {
      return _personSearch32!!
    }
    _personSearch32 = fluentIcon(name = "Filled.PersonSearch32", 32f) {
      materialPath {
          moveTo(18.0F, 16.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          close()
          moveToRelative(0.0F, 14.0F)
          curveToRelative(-0.337F, 0.0F, -0.67F, -0.01F, -1.0F, -0.027F)
          curveToRelative(-0.007F, -0.63F, -0.25F, -1.26F, -0.732F, -1.74F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(0.47F, -0.98F, 0.732F, -2.077F, 0.732F, -3.233F)
          curveToRelative(0.0F, -1.688F, -0.558F, -3.247F, -1.5F, -4.5F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, 2.393F, -1.523F, 4.417F, -3.685F, 5.793F)
          curveTo(24.141F, 29.177F, 21.198F, 30.0F, 18.0F, 30.0F)
          close()
          moveTo(7.0F, 28.5F)
          curveToRelative(1.296F, 0.0F, 2.496F, -0.41F, 3.476F, -1.11F)
          lineToRelative(3.317F, 3.317F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-3.316F, -3.316F)
          curveTo(12.589F, 24.995F, 13.0F, 23.796F, 13.0F, 22.5F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveToRelative(-6.0F, 2.686F, -6.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()
          moveToRelative(0.0F, -2.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          close()        
      }
    }
    return _personSearch32!!
  }

private var _personSearch32: ImageVector? = null
