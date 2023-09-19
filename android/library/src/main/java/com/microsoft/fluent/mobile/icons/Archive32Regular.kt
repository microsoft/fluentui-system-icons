package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Archive32: ImageVector
  get() {
    if (_archive32 != null) {
      return _archive32!!
    }
    _archive32 = fluentIcon(name = "Regular.Archive32", 32f) {
      materialPath {
          moveTo(13.0F, 14.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(20.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.889F, -0.386F, 1.687F, -1.0F, 2.236F)
          verticalLineTo(23.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(6.462F, 29.0F, 4.0F, 26.538F, 4.0F, 23.5F)
          verticalLineTo(10.236F)
          curveTo(3.386F, 9.686F, 3.0F, 8.888F, 3.0F, 8.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, 5.0F)
          verticalLineToRelative(12.5F)
          curveTo(6.0F, 25.433F, 7.567F, 27.0F, 9.5F, 27.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(0.0F, -6.0F)
          curveTo(5.448F, 5.0F, 5.0F, 5.448F, 5.0F, 6.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(20.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _archive32!!
  }

private var _archive32: ImageVector? = null
