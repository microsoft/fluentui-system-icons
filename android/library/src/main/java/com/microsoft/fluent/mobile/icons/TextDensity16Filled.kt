package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextDensity16: ImageVector
  get() {
    if (_textDensity16 != null) {
      return _textDensity16!!
    }
    _textDensity16 = fluentIcon(name = "Filled.TextDensity16", 16f) {
      materialPath {
          moveTo(8.5F, 1.0F)
          curveTo(8.776F, 1.0F, 9.0F, 1.224F, 9.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(9.0F, 14.776F, 8.776F, 15.0F, 8.5F, 15.0F)
          reflectiveCurveTo(8.0F, 14.776F, 8.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          curveTo(8.0F, 1.224F, 8.224F, 1.0F, 8.5F, 1.0F)
          close()
          moveTo(7.0F, 3.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          reflectiveCurveTo(2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 6.0F, 2.0F, 6.224F, 2.0F, 6.5F)
          reflectiveCurveTo(2.224F, 7.0F, 2.5F, 7.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 9.0F, 2.0F, 9.224F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 12.0F, 2.0F, 12.224F, 2.0F, 12.5F)
          reflectiveCurveTo(2.224F, 13.0F, 2.5F, 13.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(5.5F, 0.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(13.328F, 12.0F, 12.5F, 12.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(2.5F)
          curveTo(13.328F, 4.0F, 14.0F, 4.672F, 14.0F, 5.5F)
          reflectiveCurveTo(13.328F, 7.0F, 12.5F, 7.0F)
          close()        
      }
    }
    return _textDensity16!!
  }

private var _textDensity16: ImageVector? = null
