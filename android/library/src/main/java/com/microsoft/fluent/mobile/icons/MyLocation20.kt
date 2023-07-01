package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MyLocation20: ImageVector
  get() {
    if (_myLocation20 != null) {
      return _myLocation20!!
    }
    _myLocation20 = fluentIcon(name = "Filled.MyLocation20", 20f) {
      materialPath {
          moveTo(10.0F, 13.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()
          moveToRelative(0.75F, -10.25F)
          curveTo(10.75F, 2.336F, 10.414F, 2.0F, 10.0F, 2.0F)
          reflectiveCurveTo(9.25F, 2.336F, 9.25F, 2.75F)
          verticalLineToRelative(1.296F)
          curveTo(6.536F, 4.385F, 4.385F, 6.536F, 4.046F, 9.25F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 9.25F, 2.0F, 9.586F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(1.296F)
          curveToRelative(0.339F, 2.714F, 2.49F, 4.865F, 5.204F, 5.204F)
          verticalLineToRelative(1.296F)
          curveTo(9.25F, 17.664F, 9.586F, 18.0F, 10.0F, 18.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-1.296F)
          curveToRelative(2.714F, -0.339F, 4.865F, -2.49F, 5.204F, -5.204F)
          horizontalLineToRelative(1.296F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-1.296F)
          curveToRelative(-0.339F, -2.714F, -2.49F, -4.865F, -5.204F, -5.204F)
          verticalLineTo(2.75F)
          close()
          moveTo(10.0F, 14.5F)
          curveToRelative(-2.485F, 0.0F, -4.5F, -2.015F, -4.5F, -4.5F)
          reflectiveCurveTo(7.515F, 5.5F, 10.0F, 5.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveToRelative(-2.015F, 4.5F, -4.5F, 4.5F)
          close()        
      }
    }
    return _myLocation20!!
  }

private var _myLocation20: ImageVector? = null
