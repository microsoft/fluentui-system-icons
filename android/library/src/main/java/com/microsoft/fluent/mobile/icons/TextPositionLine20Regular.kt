package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextPositionLine20: ImageVector
  get() {
    if (_textPositionLine20 != null) {
      return _textPositionLine20!!
    }
    _textPositionLine20 = fluentIcon(name = "Regular.TextPositionLine20", 20f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          reflectiveCurveTo(3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 4.0F, 17.0F, 3.776F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveTo(3.224F, 15.0F, 3.0F, 15.224F, 3.0F, 15.5F)
          reflectiveCurveTo(3.224F, 16.0F, 3.5F, 16.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 15.0F, 16.5F, 15.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(7.5F, -2.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 13.0F, 16.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveToRelative(-7.0F, -4.0F)
          curveTo(4.0F, 7.12F, 5.12F, 6.0F, 6.5F, 6.0F)
          reflectiveCurveTo(9.0F, 7.12F, 9.0F, 8.5F)
          verticalLineToRelative(5.0F)
          curveTo(9.0F, 13.776F, 9.224F, 14.0F, 9.5F, 14.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveTo(10.0F, 6.567F, 8.433F, 5.0F, 6.5F, 5.0F)
          reflectiveCurveTo(3.0F, 6.567F, 3.0F, 8.5F)
          verticalLineToRelative(5.0F)
          curveTo(3.0F, 13.776F, 3.224F, 14.0F, 3.5F, 14.0F)
          reflectiveCurveTo(4.0F, 13.776F, 4.0F, 13.5F)
          verticalLineToRelative(-5.0F)
          close()        
      }
    }
    return _textPositionLine20!!
  }

private var _textPositionLine20: ImageVector? = null
