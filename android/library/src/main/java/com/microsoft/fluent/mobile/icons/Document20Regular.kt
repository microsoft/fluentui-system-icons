package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Document20: ImageVector
  get() {
    if (_document20 != null) {
      return _document20!!
    }
    _document20 = fluentIcon(name = "Regular.Document20", 20f) {
      materialPath {
          moveTo(6.0F, 2.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.414F)
          curveToRelative(0.0F, -0.398F, -0.158F, -0.78F, -0.44F, -1.06F)
          lineToRelative(-3.914F, -3.915F)
          curveTo(11.366F, 2.158F, 10.984F, 2.0F, 10.586F, 2.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(5.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.5F)
          curveTo(10.0F, 7.328F, 10.672F, 8.0F, 11.5F, 8.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(9.793F, 3.0F)
          horizontalLineTo(11.5F)
          curveTo(11.224F, 7.0F, 11.0F, 6.776F, 11.0F, 6.5F)
          verticalLineTo(3.207F)
          lineTo(14.793F, 7.0F)
          close()        
      }
    }
    return _document20!!
  }

private var _document20: ImageVector? = null
