package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareArrowForward48: ImageVector
  get() {
    if (_squareArrowForward48 != null) {
      return _squareArrowForward48!!
    }
    _squareArrowForward48 = fluentIcon(name = "Filled.SquareArrowForward48", 48f) {
      materialPath {
          moveTo(11.25F, 6.0F)
          curveTo(8.35F, 6.0F, 6.0F, 8.35F, 6.0F, 11.25F)
          verticalLineToRelative(25.5F)
          curveTo(6.0F, 39.65F, 8.35F, 42.0F, 11.25F, 42.0F)
          horizontalLineToRelative(12.794F)
          curveTo(22.75F, 39.98F, 22.0F, 37.577F, 22.0F, 35.0F)
          curveToRelative(0.0F, -7.18F, 5.82F, -13.0F, 13.0F, -13.0F)
          curveToRelative(2.577F, 0.0F, 4.98F, 0.75F, 7.0F, 2.044F)
          verticalLineTo(11.25F)
          curveTo(42.0F, 8.35F, 39.65F, 6.0F, 36.75F, 6.0F)
          horizontalLineToRelative(-25.5F)
          close()
          moveTo(24.0F, 35.0F)
          curveToRelative(0.0F, 6.075F, 4.925F, 11.0F, 11.0F, 11.0F)
          reflectiveCurveToRelative(11.0F, -4.925F, 11.0F, -11.0F)
          reflectiveCurveToRelative(-4.925F, -11.0F, -11.0F, -11.0F)
          reflectiveCurveToRelative(-11.0F, 4.925F, -11.0F, 11.0F)
          close()
          moveToRelative(14.293F, -3.293F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(39.586F, 35.0F)
          horizontalLineTo(34.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          horizontalLineToRelative(5.586F)
          lineToRelative(-1.293F, -1.293F)
          close()        
      }
    }
    return _squareArrowForward48!!
  }

private var _squareArrowForward48: ImageVector? = null
