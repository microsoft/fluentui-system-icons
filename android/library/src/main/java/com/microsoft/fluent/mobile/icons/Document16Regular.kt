package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Document16: ImageVector
  get() {
    if (_document16 != null) {
      return _document16!!
    }
    _document16 = fluentIcon(name = "Regular.Document16", 16f) {
      materialPath {
          moveTo(5.0F, 1.0F)
          curveTo(3.895F, 1.0F, 3.0F, 1.895F, 3.0F, 3.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.414F)
          curveToRelative(0.0F, -0.398F, -0.158F, -0.78F, -0.44F, -1.06F)
          lineTo(9.647F, 1.439F)
          curveTo(9.367F, 1.158F, 8.984F, 1.0F, 8.586F, 1.0F)
          horizontalLineTo(5.0F)
          close()
          moveTo(4.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.5F)
          curveTo(8.0F, 5.328F, 8.672F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(7.793F, 2.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 5.0F, 9.0F, 4.776F, 9.0F, 4.5F)
          verticalLineTo(2.207F)
          lineTo(11.793F, 5.0F)
          close()        
      }
    }
    return _document16!!
  }

private var _document16: ImageVector? = null
