package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LineHorizontal120: ImageVector
  get() {
    if (_lineHorizontal120 != null) {
      return _lineHorizontal120!!
    }
    _lineHorizontal120 = fluentIcon(name = "Regular.LineHorizontal120", 120f) {
      materialPath {
          moveTo(2.0F, 9.5F)
          curveTo(2.0F, 9.224F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 9.0F, 18.0F, 9.224F, 18.0F, 9.5F)
          reflectiveCurveTo(17.776F, 10.0F, 17.5F, 10.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          close()        
      }
    }
    return _lineHorizontal120!!
  }

private var _lineHorizontal120: ImageVector? = null
