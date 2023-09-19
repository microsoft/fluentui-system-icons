package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AlignLeft32: ImageVector
  get() {
    if (_alignLeft32 != null) {
      return _alignLeft32!!
    }
    _alignLeft32 = fluentIcon(name = "Regular.AlignLeft32", 32f) {
      materialPath {
          moveTo(3.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(24.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(7.5F, 1.0F)
          curveTo(8.567F, 5.0F, 7.0F, 6.567F, 7.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(15.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-3.0F)
          curveTo(29.0F, 6.567F, 27.433F, 5.0F, 25.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveTo(9.0F, 8.5F)
          curveTo(9.0F, 7.672F, 9.672F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(15.0F)
          curveTo(26.328F, 7.0F, 27.0F, 7.672F, 27.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(9.672F, 13.0F, 9.0F, 12.328F, 9.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(1.5F, 8.5F)
          curveTo(8.567F, 17.0F, 7.0F, 18.567F, 7.0F, 20.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(9.0F, 20.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(9.672F, 25.0F, 9.0F, 24.328F, 9.0F, 23.5F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _alignLeft32!!
  }

private var _alignLeft32: ImageVector? = null
