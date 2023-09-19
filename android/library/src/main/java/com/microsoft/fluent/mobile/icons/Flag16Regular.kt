package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flag16: ImageVector
  get() {
    if (_flag16 != null) {
      return _flag16!!
    }
    _flag16 = fluentIcon(name = "Regular.Flag16", 16f) {
      materialPath {
          moveTo(4.0F, 9.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(8.028F)
          lineToRelative(-1.935F, 2.71F)
          curveToRelative(-0.124F, 0.173F, -0.124F, 0.407F, 0.0F, 0.58F)
          lineTo(12.028F, 9.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.407F, 0.0F, 0.643F, -0.46F, 0.407F, -0.79F)
          lineTo(11.114F, 6.0F)
          lineToRelative(2.293F, -3.21F)
          curveTo(13.643F, 2.46F, 13.407F, 2.0F, 13.0F, 2.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 2.0F, 3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 13.776F, 3.224F, 14.0F, 3.5F, 14.0F)
          reflectiveCurveTo(4.0F, 13.776F, 4.0F, 13.5F)
          verticalLineTo(10.0F)
          close()        
      }
    }
    return _flag16!!
  }

private var _flag16: ImageVector? = null
