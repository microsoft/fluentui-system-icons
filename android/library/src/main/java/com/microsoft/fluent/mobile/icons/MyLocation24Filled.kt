package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MyLocation24: ImageVector
  get() {
    if (_myLocation24 != null) {
      return _myLocation24!!
    }
    _myLocation24 = fluentIcon(name = "Filled.MyLocation24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(13.0F, 3.0F)
          verticalLineToRelative(1.314F)
          curveToRelative(3.48F, 0.449F, 6.238F, 3.206F, 6.686F, 6.687F)
          lineTo(21.0F, 11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.935F, -0.883F, 0.993F)
          lineTo(21.0F, 13.0F)
          horizontalLineToRelative(-1.314F)
          curveToRelative(-0.448F, 3.48F, -3.206F, 6.238F, -6.686F, 6.686F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(11.0F, 21.0F)
          verticalLineToRelative(-1.314F)
          curveTo(7.52F, 19.238F, 4.764F, 16.481F, 4.315F, 13.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.935F, 0.883F, -0.993F)
          lineTo(3.0F, 11.0F)
          horizontalLineToRelative(1.314F)
          curveTo(4.762F, 7.52F, 7.52F, 4.763F, 11.0F, 4.315F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.0F, 4.25F)
          curveToRelative(-3.176F, 0.0F, -5.75F, 2.574F, -5.75F, 5.75F)
          reflectiveCurveToRelative(2.574F, 5.75F, 5.75F, 5.75F)
          reflectiveCurveToRelative(5.75F, -2.574F, 5.75F, -5.75F)
          reflectiveCurveTo(15.176F, 6.25F, 12.0F, 6.25F)
          close()
          moveTo(12.0F, 8.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          close()        
      }
    }
    return _myLocation24!!
  }

private var _myLocation24: ImageVector? = null
