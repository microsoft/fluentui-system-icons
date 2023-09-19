package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ruler32: ImageVector
  get() {
    if (_ruler32 != null) {
      return _ruler32!!
    }
    _ruler32 = fluentIcon(name = "Regular.Ruler32", 32f) {
      materialPath {
          moveTo(12.5F, 2.0F)
          curveTo(10.567F, 2.0F, 9.0F, 3.567F, 9.0F, 5.5F)
          verticalLineToRelative(21.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-21.0F)
          curveTo(23.0F, 3.567F, 21.433F, 2.0F, 19.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(11.0F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(5.5F)
          curveTo(11.0F, 4.672F, 11.672F, 4.0F, 12.5F, 4.0F)
          horizontalLineToRelative(7.0F)
          curveTo(20.328F, 4.0F, 21.0F, 4.672F, 21.0F, 5.5F)
          verticalLineToRelative(21.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(26.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(-2.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(-2.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _ruler32!!
  }

private var _ruler32: ImageVector? = null
