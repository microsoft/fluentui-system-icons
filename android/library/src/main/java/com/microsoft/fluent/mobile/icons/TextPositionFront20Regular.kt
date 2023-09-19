package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextPositionFront20: ImageVector
  get() {
    if (_textPositionFront20 != null) {
      return _textPositionFront20!!
    }
    _textPositionFront20 = fluentIcon(name = "Regular.TextPositionFront20", 20f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          reflectiveCurveTo(3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 4.0F, 17.0F, 3.776F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(3.0F, 8.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(2.5F)
          curveTo(7.5F, 13.776F, 7.276F, 14.0F, 7.0F, 14.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(3.0F, -2.0F)
          curveTo(16.776F, 9.0F, 17.0F, 9.224F, 17.0F, 9.5F)
          reflectiveCurveTo(16.776F, 10.0F, 16.5F, 10.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 10.0F, 3.0F, 9.776F, 3.0F, 9.5F)
          reflectiveCurveTo(3.224F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveTo(10.0F, 5.0F)
          curveToRelative(1.763F, 0.0F, 3.222F, 1.304F, 3.465F, 3.0F)
          horizontalLineTo(12.45F)
          curveTo(12.218F, 6.859F, 11.21F, 6.0F, 10.0F, 6.0F)
          curveTo(8.79F, 6.0F, 7.782F, 6.859F, 7.55F, 8.0F)
          horizontalLineTo(6.535F)
          curveTo(6.778F, 6.304F, 8.237F, 5.0F, 10.0F, 5.0F)
          close()
          moveTo(3.5F, 15.0F)
          curveTo(3.224F, 15.0F, 3.0F, 15.224F, 3.0F, 15.5F)
          reflectiveCurveTo(3.224F, 16.0F, 3.5F, 16.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 15.0F, 16.5F, 15.0F)
          horizontalLineToRelative(-13.0F)
          close()        
      }
    }
    return _textPositionFront20!!
  }

private var _textPositionFront20: ImageVector? = null
