package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Open32: ImageVector
  get() {
    if (_open32 != null) {
      return _open32!!
    }
    _open32 = fluentIcon(name = "Regular.Open32", 32f) {
      materialPath {
          moveTo(8.5F, 5.0F)
          curveTo(6.567F, 5.0F, 5.0F, 6.567F, 5.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveTo(5.0F, 25.433F, 6.567F, 27.0F, 8.5F, 27.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(5.462F, 29.0F, 3.0F, 26.538F, 3.0F, 23.5F)
          verticalLineToRelative(-15.0F)
          curveTo(3.0F, 5.462F, 5.462F, 3.0F, 8.5F, 3.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.5F)
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
    return _open32!!
  }

private var _open32: ImageVector? = null
