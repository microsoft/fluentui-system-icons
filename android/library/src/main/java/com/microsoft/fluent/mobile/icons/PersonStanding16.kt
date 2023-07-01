package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonStanding16: ImageVector
  get() {
    if (_personStanding16 != null) {
      return _personStanding16!!
    }
    _personStanding16 = fluentIcon(name = "Filled.PersonStanding16", 16f) {
      materialPath {
          moveTo(7.5F, 4.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, -0.783F, 1.75F, -1.75F)
          reflectiveCurveTo(8.467F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(5.75F, 1.783F, 5.75F, 2.75F)
          reflectiveCurveTo(6.534F, 4.5F, 7.5F, 4.5F)
          close()
          moveToRelative(3.5F, 2.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.551F, -0.448F, 1.0F, -1.0F, 1.0F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(7.0F, 10.724F, 7.0F, 11.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.449F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.916F, 0.623F, -1.682F, 1.464F, -1.918F)
          curveTo(5.968F, 5.141F, 6.69F, 5.5F, 7.5F, 5.5F)
          reflectiveCurveToRelative(1.532F, -0.359F, 2.036F, -0.918F)
          curveTo(10.378F, 4.818F, 11.0F, 5.584F, 11.0F, 6.5F)
          close()        
      }
    }
    return _personStanding16!!
  }

private var _personStanding16: ImageVector? = null
