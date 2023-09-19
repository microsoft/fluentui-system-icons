package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextField20: ImageVector
  get() {
    if (_textField20 != null) {
      return _textField20!!
    }
    _textField20 = fluentIcon(name = "Regular.TextField20", 20f) {
      materialPath {
          moveTo(10.5F, 6.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(0.5F)
          curveTo(13.0F, 6.776F, 13.224F, 7.0F, 13.5F, 7.0F)
          reflectiveCurveTo(14.0F, 6.776F, 14.0F, 6.5F)
          verticalLineToRelative(-1.0F)
          curveTo(14.0F, 5.224F, 13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 5.0F, 6.0F, 5.224F, 6.0F, 5.5F)
          verticalLineToRelative(1.0F)
          curveTo(6.0F, 6.776F, 6.224F, 7.0F, 6.5F, 7.0F)
          reflectiveCurveTo(7.0F, 6.776F, 7.0F, 6.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(2.5F)
          verticalLineToRelative(8.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(8.724F, 15.0F, 9.0F, 15.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.276F, 14.0F, 11.0F, 14.0F)
          horizontalLineToRelative(-0.5F)
          verticalLineTo(6.0F)
          close()
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, -2.0F)
          curveTo(3.895F, 4.0F, 3.0F, 4.895F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _textField20!!
  }

private var _textField20: ImageVector? = null
