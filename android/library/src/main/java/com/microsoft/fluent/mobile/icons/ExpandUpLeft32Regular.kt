package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ExpandUpLeft32: ImageVector
  get() {
    if (_expandUpLeft32 != null) {
      return _expandUpLeft32!!
    }
    _expandUpLeft32 = fluentIcon(name = "Regular.ExpandUpLeft32", 32f) {
      materialPath {
          moveTo(14.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.0F)
          curveTo(3.446F, 3.0F, 3.0F, 3.448F, 3.0F, 4.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, 0.447F, 1.0F, 1.0F, 1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.414F)
          lineToRelative(7.293F, 7.293F)
          curveToRelative(0.39F, 0.39F, 1.023F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(6.414F, 5.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          close()
          moveToRelative(13.0F, 3.5F)
          curveTo(27.0F, 6.12F, 25.88F, 5.0F, 24.5F, 5.0F)
          horizontalLineTo(19.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.5F)
          curveTo(26.985F, 3.0F, 29.0F, 5.015F, 29.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(5.014F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -0.552F, 0.447F, -1.0F, 1.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.5F)
          curveTo(5.0F, 25.88F, 6.12F, 27.0F, 7.5F, 27.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(-7.23F)
          curveToRelative(0.0F, -2.082F, 1.687F, -3.77F, 3.769F, -3.77F)
          horizontalLineToRelative(7.23F)
          verticalLineTo(7.5F)
          close()
          moveTo(27.0F, 18.0F)
          horizontalLineToRelative(-7.231F)
          curveToRelative(-0.977F, 0.0F, -1.77F, 0.792F, -1.77F, 1.77F)
          verticalLineTo(27.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(1.382F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(18.0F)
          close()        
      }
    }
    return _expandUpLeft32!!
  }

private var _expandUpLeft32: ImageVector? = null
