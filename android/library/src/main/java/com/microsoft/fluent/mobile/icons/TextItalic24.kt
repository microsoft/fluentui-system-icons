package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextItalic24: ImageVector
  get() {
    if (_textItalic24 != null) {
      return _textItalic24!!
    }
    _textItalic24 = fluentIcon(name = "Filled.TextItalic24", 24f) {
      materialPath {
          moveTo(10.649F, 18.5F)
          horizontalLineToRelative(3.847F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(4.446F, 20.5F, 4.0F, 20.052F, 4.0F, 19.5F)
          reflectiveCurveToRelative(0.445F, -1.0F, 0.997F, -1.0F)
          horizontalLineToRelative(3.509F)
          lineTo(13.332F, 6.0F)
          horizontalLineTo(9.997F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineTo(18.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-3.025F)
          lineTo(10.65F, 18.5F)
          close()        
      }
    }
    return _textItalic24!!
  }

private var _textItalic24: ImageVector? = null
