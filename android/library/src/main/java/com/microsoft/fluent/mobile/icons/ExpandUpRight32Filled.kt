package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ExpandUpRight32: ImageVector
  get() {
    if (_expandUpRight32 != null) {
      return _expandUpRight32!!
    }
    _expandUpRight32 = fluentIcon(name = "Filled.ExpandUpRight32", 32f) {
      materialPath {
          moveTo(7.5F, 5.0F)
          curveTo(6.12F, 5.0F, 5.0F, 6.12F, 5.0F, 7.5F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(7.23F)
          curveToRelative(2.082F, 0.0F, 3.77F, 1.688F, 3.77F, 3.77F)
          verticalLineTo(27.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          curveTo(3.0F, 5.015F, 5.015F, 3.0F, 7.5F, 3.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.5F)
          close()
          moveTo(18.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.553F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, -0.447F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.414F)
          lineToRelative(-7.293F, 7.293F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.023F, 0.0F, -1.414F)
          lineTo(25.586F, 5.0F)
          horizontalLineTo(19.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          close()        
      }
    }
    return _expandUpRight32!!
  }

private var _expandUpRight32: ImageVector? = null
