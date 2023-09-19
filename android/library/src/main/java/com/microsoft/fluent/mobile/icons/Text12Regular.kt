package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Text12: ImageVector
  get() {
    if (_text12 != null) {
      return _text12!!
    }
    _text12 = fluentIcon(name = "Regular.Text12", 12f) {
      materialPath {
          moveTo(2.0F, 2.5F)
          curveTo(2.0F, 2.224F, 2.224F, 2.0F, 2.5F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveTo(8.776F, 2.0F, 9.0F, 2.224F, 9.0F, 2.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(8.0F, 4.276F, 8.0F, 4.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(0.5F)
          curveTo(6.776F, 9.0F, 7.0F, 9.224F, 7.0F, 9.5F)
          reflectiveCurveTo(6.776F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.224F, 10.0F, 4.0F, 9.776F, 4.0F, 9.5F)
          reflectiveCurveTo(4.224F, 9.0F, 4.5F, 9.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(2.0F, 4.276F, 2.0F, 4.0F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _text12!!
  }

private var _text12: ImageVector? = null
