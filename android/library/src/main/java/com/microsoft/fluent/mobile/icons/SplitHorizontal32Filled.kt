package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitHorizontal32: ImageVector
  get() {
    if (_splitHorizontal32 != null) {
      return _splitHorizontal32!!
    }
    _splitHorizontal32 = fluentIcon(name = "Filled.SplitHorizontal32", 32f) {
      materialPath {
          moveTo(3.0F, 15.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(26.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(3.0F, 11.5F)
          verticalLineToRelative(-8.0F)
          horizontalLineToRelative(20.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(7.567F, 30.0F, 6.0F, 28.433F, 6.0F, 26.5F)
          close()
          moveToRelative(20.0F, -13.0F)
          verticalLineToRelative(-8.0F)
          curveTo(26.0F, 3.567F, 24.433F, 2.0F, 22.5F, 2.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(7.567F, 2.0F, 6.0F, 3.567F, 6.0F, 5.5F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(20.0F)
          close()        
      }
    }
    return _splitHorizontal32!!
  }

private var _splitHorizontal32: ImageVector? = null
