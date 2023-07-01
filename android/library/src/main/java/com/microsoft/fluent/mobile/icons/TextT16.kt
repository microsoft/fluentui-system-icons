package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextT16: ImageVector
  get() {
    if (_textT16 != null) {
      return _textT16!!
    }
    _textT16 = fluentIcon(name = "Regular.TextT16", 16f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveTo(11.776F, 2.0F, 12.0F, 2.224F, 12.0F, 2.5F)
          verticalLineToRelative(2.0F)
          curveTo(12.0F, 4.776F, 11.776F, 5.0F, 11.5F, 5.0F)
          reflectiveCurveTo(11.0F, 4.776F, 11.0F, 4.5F)
          verticalLineTo(3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.276F, 14.0F, 9.0F, 14.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(5.724F, 13.0F, 6.0F, 13.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 4.776F, 3.776F, 5.0F, 3.5F, 5.0F)
          reflectiveCurveTo(3.0F, 4.776F, 3.0F, 4.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _textT16!!
  }

private var _textT16: ImageVector? = null
