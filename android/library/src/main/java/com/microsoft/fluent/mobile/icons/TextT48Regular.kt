package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextT48: ImageVector
  get() {
    if (_textT48 != null) {
      return _textT48!!
    }
    _textT48 = fluentIcon(name = "Regular.TextT48", 48f) {
      materialPath {
          moveTo(10.0F, 9.25F)
          curveTo(10.0F, 8.56F, 10.56F, 8.0F, 11.25F, 8.0F)
          horizontalLineToRelative(25.5F)
          curveTo(37.44F, 8.0F, 38.0F, 8.56F, 38.0F, 9.25F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(35.5F, 14.69F, 35.5F, 14.0F)
          verticalLineToRelative(-3.5F)
          horizontalLineTo(25.25F)
          verticalLineToRelative(27.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(29.44F, 40.0F, 28.75F, 40.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(18.56F, 40.0F, 18.0F, 39.44F, 18.0F, 38.75F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(-27.0F)
          horizontalLineTo(12.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(10.0F, 14.69F, 10.0F, 14.0F)
          verticalLineTo(9.25F)
          close()        
      }
    }
    return _textT48!!
  }

private var _textT48: ImageVector? = null
