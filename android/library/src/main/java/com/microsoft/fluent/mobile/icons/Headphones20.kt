package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Headphones20: ImageVector
  get() {
    if (_headphones20 != null) {
      return _headphones20!!
    }
    _headphones20 = fluentIcon(name = "Regular.Headphones20", 20f) {
      materialPath {
          moveTo(3.0F, 10.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.5F)
          curveTo(6.776F, 18.0F, 7.0F, 17.776F, 7.0F, 17.5F)
          verticalLineToRelative(-6.0F)
          curveTo(7.0F, 11.224F, 6.776F, 11.0F, 6.5F, 11.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(14.0F, 0.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(3.0F)
          close()        
      }
    }
    return _headphones20!!
  }

private var _headphones20: ImageVector? = null
