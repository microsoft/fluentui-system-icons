package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Doctor12: ImageVector
  get() {
    if (_doctor12 != null) {
      return _doctor12!!
    }
    _doctor12 = fluentIcon(name = "Regular.Doctor12", 12f) {
      materialPath {
          moveTo(4.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 8.0F, 2.0F, 7.552F, 2.0F, 7.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.5F)
          curveTo(5.0F, 4.776F, 4.776F, 5.0F, 4.5F, 5.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.5F)
          curveTo(4.776F, 7.0F, 5.0F, 7.224F, 5.0F, 7.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(7.5F)
          curveTo(7.0F, 7.224F, 7.224F, 7.0F, 7.5F, 7.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 5.0F, 7.0F, 4.776F, 7.0F, 4.5F)
          verticalLineTo(3.0F)
          close()        
      }
    }
    return _doctor12!!
  }

private var _doctor12: ImageVector? = null
