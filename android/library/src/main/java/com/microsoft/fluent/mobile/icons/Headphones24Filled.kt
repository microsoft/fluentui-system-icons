package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Headphones24: ImageVector
  get() {
    if (_headphones24 != null) {
      return _headphones24!!
    }
    _headphones24 = fluentIcon(name = "Filled.Headphones24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(4.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineToRelative(-7.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          close()        
      }
    }
    return _headphones24!!
  }

private var _headphones24: ImageVector? = null
