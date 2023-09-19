package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MyLocation16: ImageVector
  get() {
    if (_myLocation16 != null) {
      return _myLocation16!!
    }
    _myLocation16 = fluentIcon(name = "Filled.MyLocation16", 16f) {
      materialPath {
          moveTo(8.0F, 10.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(9.38F, 5.5F, 8.0F, 5.5F)
          reflectiveCurveTo(5.5F, 6.62F, 5.5F, 8.0F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          close()
          moveToRelative(0.75F, -8.75F)
          curveTo(8.75F, 1.336F, 8.414F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveTo(7.25F, 1.336F, 7.25F, 1.75F)
          verticalLineToRelative(1.306F)
          curveTo(5.089F, 3.38F, 3.38F, 5.089F, 3.056F, 7.25F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 7.25F, 1.0F, 7.586F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(1.306F)
          curveToRelative(0.325F, 2.161F, 2.033F, 3.87F, 4.194F, 4.194F)
          verticalLineToRelative(1.306F)
          curveTo(7.25F, 14.664F, 7.586F, 15.0F, 8.0F, 15.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-1.306F)
          curveToRelative(2.161F, -0.325F, 3.87F, -2.033F, 4.194F, -4.194F)
          horizontalLineToRelative(1.306F)
          curveTo(14.664F, 8.75F, 15.0F, 8.414F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-1.306F)
          curveTo(12.62F, 5.089F, 10.911F, 3.38F, 8.75F, 3.056F)
          verticalLineTo(1.75F)
          close()
          moveTo(8.0F, 11.5F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveTo(6.067F, 4.5F, 8.0F, 4.5F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          reflectiveCurveToRelative(-1.567F, 3.5F, -3.5F, 3.5F)
          close()        
      }
    }
    return _myLocation16!!
  }

private var _myLocation16: ImageVector? = null
