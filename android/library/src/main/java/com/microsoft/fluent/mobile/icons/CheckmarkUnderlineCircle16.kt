package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckmarkUnderlineCircle16: ImageVector
  get() {
    if (_checkmarkUnderlineCircle16 != null) {
      return _checkmarkUnderlineCircle16!!
    }
    _checkmarkUnderlineCircle16 = fluentIcon(name = "Regular.CheckmarkUnderlineCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 13.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveToRelative(-6.0F, 2.686F, -6.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()
          moveToRelative(2.856F, -8.85F)
          curveToRelative(0.192F, 0.198F, 0.192F, 0.52F, 0.0F, 0.719F)
          lineTo(7.972F, 8.85F)
          curveTo(7.88F, 8.946F, 7.755F, 9.0F, 7.624F, 9.0F)
          curveTo(7.494F, 9.0F, 7.37F, 8.946F, 7.276F, 8.85F)
          lineTo(6.144F, 7.68F)
          curveToRelative(-0.192F, -0.199F, -0.192F, -0.52F, 0.0F, -0.72F)
          curveToRelative(0.192F, -0.198F, 0.504F, -0.198F, 0.696F, 0.0F)
          lineToRelative(0.784F, 0.811F)
          lineTo(10.16F, 5.15F)
          curveToRelative(0.192F, -0.199F, 0.504F, -0.199F, 0.696F, 0.0F)
          close()
          moveTo(6.0F, 10.5F)
          curveTo(6.0F, 10.224F, 6.224F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(2.998F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.774F, 11.0F, 9.498F, 11.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 11.0F, 6.0F, 10.776F, 6.0F, 10.5F)
          close()        
      }
    }
    return _checkmarkUnderlineCircle16!!
  }

private var _checkmarkUnderlineCircle16: ImageVector? = null
