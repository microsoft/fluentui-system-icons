package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextT32: ImageVector
  get() {
    if (_textT32 != null) {
      return _textT32!!
    }
    _textT32 = fluentIcon(name = "Regular.TextT32", 32f) {
      materialPath {
          moveTo(6.0F, 5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(18.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(20.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(6.0F, 9.552F, 6.0F, 9.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _textT32!!
  }

private var _textT32: ImageVector? = null
