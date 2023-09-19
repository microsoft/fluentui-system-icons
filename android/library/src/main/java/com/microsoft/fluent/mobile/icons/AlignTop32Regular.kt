package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AlignTop32: ImageVector
  get() {
    if (_alignTop32 != null) {
      return _alignTop32!!
    }
    _alignTop32 = fluentIcon(name = "Regular.AlignTop32", 32f) {
      materialPath {
          moveTo(4.0F, 3.0F)
          curveTo(3.448F, 3.0F, 3.0F, 3.448F, 3.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(24.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(1.0F, 7.5F)
          curveTo(5.0F, 8.567F, 6.567F, 7.0F, 8.5F, 7.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.567F, 29.0F, 5.0F, 27.433F, 5.0F, 25.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveTo(8.5F, 9.0F)
          curveTo(7.672F, 9.0F, 7.0F, 9.672F, 7.0F, 10.5F)
          verticalLineToRelative(15.0F)
          curveTo(7.0F, 26.328F, 7.672F, 27.0F, 8.5F, 27.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-15.0F)
          curveTo(13.0F, 9.672F, 12.328F, 9.0F, 11.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(8.5F, 1.5F)
          curveTo(17.0F, 8.567F, 18.567F, 7.0F, 20.5F, 7.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(20.5F, 9.0F)
          curveTo(19.672F, 9.0F, 19.0F, 9.672F, 19.0F, 10.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(25.0F, 9.672F, 24.328F, 9.0F, 23.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _alignTop32!!
  }

private var _alignTop32: ImageVector? = null
