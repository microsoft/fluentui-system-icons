package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pi24: ImageVector
  get() {
    if (_pi24 != null) {
      return _pi24!!
    }
    _pi24 = fluentIcon(name = "Filled.Pi24", 24f) {
      materialPath {
          moveTo(2.0F, 7.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(15.25F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(10.703F)
          curveToRelative(0.0F, 1.037F, 1.028F, 1.761F, 2.005F, 1.412F)
          lineToRelative(0.159F, -0.057F)
          curveToRelative(0.52F, -0.186F, 1.092F, 0.086F, 1.278F, 0.606F)
          curveToRelative(0.186F, 0.52F, -0.086F, 1.092F, -0.606F, 1.278F)
          lineToRelative(-0.159F, 0.057F)
          curveTo(17.397F, 20.813F, 15.0F, 19.123F, 15.0F, 16.703F)
          verticalLineTo(6.0F)
          horizontalLineTo(9.979F)
          curveTo(9.968F, 6.22F, 9.95F, 6.514F, 9.928F, 6.868F)
          curveToRelative(-0.056F, 0.83F, -0.151F, 1.995F, -0.31F, 3.343F)
          curveToRelative(-0.316F, 2.682F, -0.888F, 6.141F, -1.924F, 9.117F)
          curveToRelative(-0.18F, 0.522F, -0.75F, 0.798F, -1.272F, 0.617F)
          curveToRelative(-0.522F, -0.182F, -0.798F, -0.752F, -0.616F, -1.273F)
          curveToRelative(0.964F, -2.774F, 1.516F, -6.066F, 1.826F, -8.695F)
          curveToRelative(0.154F, -1.308F, 0.246F, -2.44F, 0.3F, -3.243F)
          curveTo(7.952F, 6.444F, 7.966F, 6.197F, 7.976F, 6.0F)
          horizontalLineTo(5.0F)
          curveTo(4.448F, 6.0F, 4.0F, 6.448F, 4.0F, 7.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(7.0F)
          close()        
      }
    }
    return _pi24!!
  }

private var _pi24: ImageVector? = null
