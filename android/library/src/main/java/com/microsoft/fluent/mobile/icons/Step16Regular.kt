package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Step16: ImageVector
  get() {
    if (_step16 != null) {
      return _step16!!
    }
    _step16 = fluentIcon(name = "Regular.Step16", 16f) {
      materialPath {
          moveTo(9.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 1.381F, -1.119F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(4.0F, 0.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          verticalLineTo(3.0F)
          close()        
      }
    }
    return _step16!!
  }

private var _step16: ImageVector? = null
