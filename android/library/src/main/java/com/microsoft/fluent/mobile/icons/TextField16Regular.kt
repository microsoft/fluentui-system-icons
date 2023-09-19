package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextField16: ImageVector
  get() {
    if (_textField16 != null) {
      return _textField16!!
    }
    _textField16 = fluentIcon(name = "Regular.TextField16", 16f) {
      materialPath {
          moveTo(6.5F, 11.5F)
          curveTo(6.5F, 11.224F, 6.724F, 11.0F, 7.0F, 11.0F)
          horizontalLineToRelative(0.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(0.5F)
          curveTo(5.0F, 5.776F, 4.776F, 6.0F, 4.5F, 6.0F)
          reflectiveCurveTo(4.0F, 5.776F, 4.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(4.0F, 4.224F, 4.224F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(7.0F)
          curveTo(11.776F, 4.0F, 12.0F, 4.224F, 12.0F, 4.5F)
          verticalLineToRelative(1.0F)
          curveTo(12.0F, 5.776F, 11.776F, 6.0F, 11.5F, 6.0F)
          reflectiveCurveTo(11.0F, 5.776F, 11.0F, 5.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.276F, 12.0F, 9.0F, 12.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveTo(1.0F, 4.5F)
          curveTo(1.0F, 3.12F, 2.12F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.88F, 2.0F, 15.0F, 3.12F, 15.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.12F, 14.0F, 1.0F, 12.88F, 1.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(3.5F, 3.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.328F, 2.672F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.672F, 13.328F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _textField16!!
  }

private var _textField16: ImageVector? = null
