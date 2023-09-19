package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Archive16: ImageVector
  get() {
    if (_archive16 != null) {
      return _archive16!!
    }
    _archive16 = fluentIcon(name = "Filled.Archive16", 16f) {
      materialPath {
          moveTo(1.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(2.0F)
          curveTo(1.448F, 5.0F, 1.0F, 4.552F, 1.0F, 4.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(1.0F, 3.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(4.5F, 2.0F)
          curveTo(6.224F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          reflectiveCurveTo(6.224F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(3.0F)
          curveTo(9.776F, 9.0F, 10.0F, 8.776F, 10.0F, 8.5F)
          reflectiveCurveTo(9.776F, 8.0F, 9.5F, 8.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _archive16!!
  }

private var _archive16: ImageVector? = null
