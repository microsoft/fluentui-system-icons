package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pause12: ImageVector
  get() {
    if (_pause12 != null) {
      return _pause12!!
    }
    _pause12 = fluentIcon(name = "Filled.Pause12", 12f) {
      materialPath {
          moveTo(3.0F, 2.0F)
          curveTo(2.448F, 2.0F, 2.0F, 2.448F, 2.0F, 3.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveTo(7.448F, 2.0F, 7.0F, 2.448F, 7.0F, 3.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _pause12!!
  }

private var _pause12: ImageVector? = null
