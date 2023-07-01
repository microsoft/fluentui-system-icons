package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Doctor12: ImageVector
  get() {
    if (_doctor12 != null) {
      return _doctor12!!
    }
    _doctor12 = fluentIcon(name = "Filled.Doctor12", 12f) {
      materialPath {
          moveTo(5.0F, 2.0F)
          curveTo(4.448F, 2.0F, 4.0F, 2.448F, 4.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 4.0F, 2.0F, 4.448F, 2.0F, 5.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _doctor12!!
  }

private var _doctor12: ImageVector? = null
