package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleUp32: ImageVector
  get() {
    if (_chevronCircleUp32 != null) {
      return _chevronCircleUp32!!
    }
    _chevronCircleUp32 = fluentIcon(name = "Regular.ChevronCircleUp32", 32f) {
      materialPath {
          moveTo(4.0F, 16.0F)
          curveToRelative(0.0F, 6.627F, 5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(22.627F, 4.0F, 16.0F, 4.0F)
          reflectiveCurveTo(4.0F, 9.373F, 4.0F, 16.0F)
          close()
          moveToRelative(12.0F, 14.0F)
          curveTo(8.268F, 30.0F, 2.0F, 23.732F, 2.0F, 16.0F)
          reflectiveCurveTo(8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          close()
          moveTo(9.293F, 18.707F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(5.878F, -5.878F)
          curveToRelative(0.052F, -0.052F, 0.06F, -0.06F, 0.11F, -0.102F)
          curveToRelative(0.235F, -0.196F, 0.46F, -0.296F, 0.719F, -0.293F)
          curveToRelative(0.26F, -0.003F, 0.519F, 0.095F, 0.717F, 0.293F)
          curveToRelative(0.036F, 0.036F, 0.072F, 0.066F, 0.112F, 0.101F)
          lineToRelative(5.878F, 5.879F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(16.0F, 13.414F)
          lineToRelative(-5.293F, 5.293F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          close()        
      }
    }
    return _chevronCircleUp32!!
  }

private var _chevronCircleUp32: ImageVector? = null
