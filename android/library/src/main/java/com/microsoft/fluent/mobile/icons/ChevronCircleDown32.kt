package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleDown32: ImageVector
  get() {
    if (_chevronCircleDown32 != null) {
      return _chevronCircleDown32!!
    }
    _chevronCircleDown32 = fluentIcon(name = "Filled.ChevronCircleDown32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveToRelative(7.732F, 0.0F, 14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          reflectiveCurveTo(2.0F, 23.732F, 2.0F, 16.0F)
          reflectiveCurveTo(8.268F, 2.0F, 16.0F, 2.0F)
          close()
          moveToRelative(6.707F, 12.707F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(16.0F, 18.586F)
          lineToRelative(-5.293F, -5.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(5.878F, 5.879F)
          lineToRelative(0.033F, 0.028F)
          curveToRelative(0.027F, 0.024F, 0.053F, 0.047F, 0.08F, 0.073F)
          curveToRelative(0.197F, 0.198F, 0.457F, 0.296F, 0.716F, 0.293F)
          curveToRelative(0.26F, 0.003F, 0.484F, -0.097F, 0.718F, -0.293F)
          curveToRelative(0.05F, -0.041F, 0.06F, -0.05F, 0.11F, -0.1F)
          verticalLineToRelative(-0.002F)
          lineToRelative(5.88F, -5.878F)
          close()        
      }
    }
    return _chevronCircleDown32!!
  }

private var _chevronCircleDown32: ImageVector? = null
