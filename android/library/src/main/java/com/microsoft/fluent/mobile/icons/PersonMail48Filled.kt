package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonMail48: ImageVector
  get() {
    if (_personMail48 != null) {
      return _personMail48!!
    }
    _personMail48 = fluentIcon(name = "Filled.PersonMail48", 48f) {
      materialPath {
          moveTo(22.0F, 4.0F)
          curveToRelative(-5.523F, 0.0F, -10.0F, 4.477F, -10.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(27.523F, 4.0F, 22.0F, 4.0F)
          close()
          moveTo(10.25F, 28.0F)
          curveTo(7.903F, 28.0F, 6.0F, 29.901F, 6.0F, 32.249F)
          verticalLineTo(33.0F)
          curveToRelative(0.0F, 3.755F, 1.942F, 6.567F, 4.92F, 8.38F)
          curveTo(13.85F, 43.163F, 17.786F, 44.0F, 22.0F, 44.0F)
          verticalLineTo(30.0F)
          curveToRelative(0.0F, -0.729F, 0.195F, -1.412F, 0.535F, -2.0F)
          horizontalLineTo(10.25F)
          close()
          moveTo(24.0F, 31.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(0.79F)
          lineToRelative(-11.0F, 5.108F)
          lineToRelative(-11.0F, -5.108F)
          verticalLineTo(31.0F)
          close()
          moveToRelative(11.421F, 7.907F)
          lineTo(46.0F, 33.995F)
          verticalLineTo(43.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(27.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineToRelative(-9.005F)
          lineToRelative(10.579F, 4.912F)
          curveToRelative(0.267F, 0.124F, 0.575F, 0.124F, 0.842F, 0.0F)
          close()        
      }
    }
    return _personMail48!!
  }

private var _personMail48: ImageVector? = null
