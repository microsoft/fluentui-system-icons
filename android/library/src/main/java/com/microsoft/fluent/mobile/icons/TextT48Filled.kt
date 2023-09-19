package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextT48: ImageVector
  get() {
    if (_textT48 != null) {
      return _textT48!!
    }
    _textT48 = fluentIcon(name = "Filled.TextT48", 48f) {
      materialPath {
          moveTo(10.0F, 9.5F)
          curveTo(10.0F, 8.672F, 10.672F, 8.0F, 11.5F, 8.0F)
          horizontalLineToRelative(25.0F)
          curveTo(37.328F, 8.0F, 38.0F, 8.672F, 38.0F, 9.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(35.0F, 14.328F, 35.0F, 13.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-9.5F)
          verticalLineToRelative(26.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(29.328F, 40.0F, 28.5F, 40.0F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(11.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(10.0F, 14.328F, 10.0F, 13.5F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _textT48!!
  }

private var _textT48: ImageVector? = null
