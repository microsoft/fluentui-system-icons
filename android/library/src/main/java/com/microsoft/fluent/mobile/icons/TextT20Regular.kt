package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextT20: ImageVector
  get() {
    if (_textT20 != null) {
      return _textT20!!
    }
    _textT20 = fluentIcon(name = "Regular.TextT20", 20f) {
      materialPath {
          moveTo(4.0F, 3.5F)
          curveTo(4.0F, 3.224F, 4.224F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(10.0F)
          curveTo(14.776F, 3.0F, 15.0F, 3.224F, 15.0F, 3.5F)
          verticalLineToRelative(2.0F)
          curveTo(15.0F, 5.776F, 14.776F, 6.0F, 14.5F, 6.0F)
          reflectiveCurveTo(14.0F, 5.776F, 14.0F, 5.5F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(12.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.776F, 17.0F, 11.5F, 17.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(7.224F, 17.0F, 7.0F, 16.776F, 7.0F, 16.5F)
          reflectiveCurveTo(7.224F, 16.0F, 7.5F, 16.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.5F)
          curveTo(5.0F, 5.776F, 4.776F, 6.0F, 4.5F, 6.0F)
          reflectiveCurveTo(4.0F, 5.776F, 4.0F, 5.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _textT20!!
  }

private var _textT20: ImageVector? = null
