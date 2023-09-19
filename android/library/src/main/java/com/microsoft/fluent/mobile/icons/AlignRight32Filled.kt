package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignRight32: ImageVector
  get() {
    if (_alignRight32 != null) {
      return _alignRight32!!
    }
    _alignRight32 = fluentIcon(name = "Filled.AlignRight32", 32f) {
      materialPath {
          moveTo(29.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(24.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(-7.5F, 1.0F)
          curveTo(23.433F, 5.0F, 25.0F, 6.567F, 25.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(4.567F, 15.0F, 3.0F, 13.433F, 3.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          curveTo(3.0F, 6.567F, 4.567F, 5.0F, 6.5F, 5.0F)
          horizontalLineToRelative(15.0F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(10.567F, 27.0F, 9.0F, 25.433F, 9.0F, 23.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.933F, 1.567F, -3.5F, 3.5F, -3.5F)
          horizontalLineToRelative(9.0F)
          close()        
      }
    }
    return _alignRight32!!
  }

private var _alignRight32: ImageVector? = null
