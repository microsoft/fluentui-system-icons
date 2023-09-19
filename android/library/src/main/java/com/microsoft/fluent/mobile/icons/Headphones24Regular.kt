package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Headphones24: ImageVector
  get() {
    if (_headphones24 != null) {
      return _headphones24!!
    }
    _headphones24 = fluentIcon(name = "Regular.Headphones24", 24f) {
      materialPath {
          moveTo(22.0F, 12.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.598F, -1.249F, 2.904F, -2.824F, 2.995F)
          lineTo(19.0F, 22.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(15.0F, 21.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.935F, 0.883F, -0.993F)
          lineTo(16.0F, 14.0F)
          horizontalLineToRelative(4.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineToRelative(-7.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          verticalLineToRelative(7.0F)
          close()
          moveTo(7.5F, 15.5F)
          horizontalLineToRelative(-4.0F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(13.0F, 0.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(19.0F)
          curveToRelative(0.78F, 0.0F, 1.42F, -0.595F, 1.493F, -1.355F)
          lineTo(20.5F, 19.0F)
          verticalLineToRelative(-3.5F)
          close()        
      }
    }
    return _headphones24!!
  }

private var _headphones24: ImageVector? = null
