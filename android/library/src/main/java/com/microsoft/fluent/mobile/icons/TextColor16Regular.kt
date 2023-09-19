package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColor16: ImageVector
  get() {
    if (_textColor16 != null) {
      return _textColor16!!
    }
    _textColor16 = fluentIcon(name = "Regular.TextColor16", 16f) {
      materialPath {
          moveTo(8.46F, 1.303F)
          curveTo(8.38F, 1.119F, 8.2F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveTo(7.62F, 1.12F, 7.54F, 1.303F)
          lineToRelative(-3.0F, 7.0F)
          curveTo(4.433F, 8.557F, 4.55F, 8.851F, 4.804F, 8.96F)
          curveTo(5.057F, 9.068F, 5.351F, 8.95F, 5.46F, 8.697F)
          lineTo(6.187F, 7.0F)
          horizontalLineToRelative(3.626F)
          lineToRelative(0.728F, 1.697F)
          curveToRelative(0.108F, 0.254F, 0.402F, 0.371F, 0.656F, 0.263F)
          curveToRelative(0.254F, -0.11F, 0.372F, -0.403F, 0.263F, -0.657F)
          lineToRelative(-3.0F, -7.0F)
          close()
          moveTo(9.385F, 6.0F)
          horizontalLineToRelative(-2.77F)
          lineTo(8.0F, 2.77F)
          lineTo(9.385F, 6.0F)
          close()
          moveTo(3.5F, 10.0F)
          curveTo(2.672F, 10.0F, 2.0F, 10.672F, 2.0F, 11.5F)
          verticalLineToRelative(2.0F)
          curveTo(2.0F, 14.328F, 2.672F, 15.0F, 3.5F, 15.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(3.0F, 11.5F)
          curveTo(3.0F, 11.224F, 3.224F, 11.0F, 3.5F, 11.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.224F, 14.0F, 3.0F, 13.776F, 3.0F, 13.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _textColor16!!
  }

private var _textColor16: ImageVector? = null
