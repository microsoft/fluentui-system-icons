package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextUnderline24: ImageVector
  get() {
    if (_textUnderline24 != null) {
      return _textUnderline24!!
    }
    _textUnderline24 = fluentIcon(name = "Filled.TextUnderline24", 24f) {
      materialPath {
          moveTo(6.0F, 4.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(6.001F)
          curveTo(7.997F, 13.964F, 9.32F, 15.5F, 12.247F, 15.5F)
          curveToRelative(2.928F, 0.0F, 4.253F, -1.537F, 4.253F, -5.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 4.54F, -2.18F, 7.0F, -6.253F, 7.0F)
          reflectiveCurveTo(5.996F, 15.039F, 6.0F, 10.5F)
          verticalLineToRelative(-6.0F)
          close()
          moveTo(7.0F, 21.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _textUnderline24!!
  }

private var _textUnderline24: ImageVector? = null
