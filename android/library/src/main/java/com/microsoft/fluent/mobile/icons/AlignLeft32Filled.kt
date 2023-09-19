package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignLeft32: ImageVector
  get() {
    if (_alignLeft32 != null) {
      return _alignLeft32!!
    }
    _alignLeft32 = fluentIcon(name = "Filled.AlignLeft32", 32f) {
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
          moveToRelative(0.0F, 12.0F)
          curveTo(8.567F, 17.0F, 7.0F, 18.567F, 7.0F, 20.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _alignLeft32!!
  }

private var _alignLeft32: ImageVector? = null
