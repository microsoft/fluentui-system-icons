package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Headphones32: ImageVector
  get() {
    if (_headphones32 != null) {
      return _headphones32!!
    }
    _headphones32 = fluentIcon(name = "Filled.Headphones32", 32f) {
      materialPath {
          moveTo(15.5F, 4.0F)
          curveTo(9.149F, 4.0F, 4.0F, 9.149F, 4.0F, 15.5F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.5F)
          curveTo(4.015F, 30.0F, 2.0F, 27.985F, 2.0F, 25.5F)
          verticalLineToRelative(-10.0F)
          curveTo(2.0F, 8.044F, 8.044F, 2.0F, 15.5F, 2.0F)
          reflectiveCurveTo(29.0F, 8.044F, 29.0F, 15.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineTo(20.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(7.0F)
          verticalLineToRelative(-2.5F)
          curveTo(27.0F, 9.149F, 21.851F, 4.0F, 15.5F, 4.0F)
          close()        
      }
    }
    return _headphones32!!
  }

private var _headphones32: ImageVector? = null
