package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonStar48: ImageVector
  get() {
    if (_personStar48 != null) {
      return _personStar48!!
    }
    _personStar48 = fluentIcon(name = "Filled.PersonStar48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(-5.523F, 0.0F, -10.0F, 4.477F, -10.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(29.523F, 4.0F, 24.0F, 4.0F)
          close()
          moveTo(12.25F, 28.0F)
          curveTo(9.903F, 28.0F, 8.0F, 29.901F, 8.0F, 32.249F)
          verticalLineTo(33.0F)
          curveToRelative(0.0F, 3.755F, 1.942F, 6.567F, 4.92F, 8.38F)
          curveTo(15.85F, 43.163F, 19.786F, 44.0F, 24.0F, 44.0F)
          curveToRelative(0.532F, 0.0F, 1.06F, -0.013F, 1.58F, -0.04F)
          curveTo(23.363F, 41.628F, 22.0F, 38.473F, 22.0F, 35.0F)
          curveToRelative(0.0F, -2.577F, 0.75F, -4.98F, 2.044F, -7.0F)
          horizontalLineTo(12.25F)
          close()
          moveTo(46.0F, 35.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveToRelative(-11.0F, -4.925F, -11.0F, -11.0F)
          reflectiveCurveToRelative(4.925F, -11.0F, 11.0F, -11.0F)
          reflectiveCurveToRelative(11.0F, 4.925F, 11.0F, 11.0F)
          close()
          moveToRelative(-9.81F, -6.599F)
          curveToRelative(-0.374F, -1.201F, -2.005F, -1.201F, -2.38F, 0.0F)
          lineToRelative(-1.194F, 3.83F)
          horizontalLineToRelative(-3.862F)
          curveToRelative(-1.213F, 0.0F, -1.716F, 1.617F, -0.736F, 2.36F)
          lineToRelative(3.125F, 2.366F)
          lineToRelative(-1.194F, 3.83F)
          curveToRelative(-0.374F, 1.201F, 0.945F, 2.2F, 1.926F, 1.458F)
          lineTo(35.0F, 39.878F)
          lineToRelative(3.125F, 2.367F)
          curveToRelative(0.98F, 0.743F, 2.3F, -0.257F, 1.925F, -1.458F)
          lineToRelative(-1.193F, -3.83F)
          lineToRelative(3.125F, -2.367F)
          curveToRelative(0.98F, -0.742F, 0.477F, -2.36F, -0.736F, -2.36F)
          horizontalLineToRelative(-3.862F)
          lineToRelative(-1.194F, -3.829F)
          close()        
      }
    }
    return _personStar48!!
  }

private var _personStar48: ImageVector? = null
