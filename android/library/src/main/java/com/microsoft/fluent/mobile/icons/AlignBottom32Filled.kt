package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignBottom32: ImageVector
  get() {
    if (_alignBottom32 != null) {
      return _alignBottom32!!
    }
    _alignBottom32 = fluentIcon(name = "Filled.AlignBottom32", 32f) {
      materialPath {
          moveTo(4.0F, 29.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(24.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(1.0F, -7.5F)
          curveTo(5.0F, 23.433F, 6.567F, 25.0F, 8.5F, 25.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-15.0F)
          curveTo(15.0F, 4.567F, 13.433F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.567F, 3.0F, 5.0F, 4.567F, 5.0F, 6.5F)
          verticalLineToRelative(15.0F)
          close()
          moveToRelative(12.0F, 0.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-9.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          verticalLineToRelative(9.0F)
          close()        
      }
    }
    return _alignBottom32!!
  }

private var _alignBottom32: ImageVector? = null
