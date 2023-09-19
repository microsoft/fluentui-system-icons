package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LineHorizontal120: ImageVector
  get() {
    if (_lineHorizontal120 != null) {
      return _lineHorizontal120!!
    }
    _lineHorizontal120 = fluentIcon(name = "Filled.LineHorizontal120", 120f) {
      materialPath {
          moveTo(2.0F, 9.75F)
          curveTo(2.0F, 9.336F, 2.336F, 9.0F, 2.75F, 9.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 9.0F, 18.0F, 9.336F, 18.0F, 9.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.5F, 2.0F, 10.164F, 2.0F, 9.75F)
          close()        
      }
    }
    return _lineHorizontal120!!
  }

private var _lineHorizontal120: ImageVector? = null
