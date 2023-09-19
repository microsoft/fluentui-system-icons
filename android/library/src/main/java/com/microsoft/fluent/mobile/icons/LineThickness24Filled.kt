package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LineThickness24: ImageVector
  get() {
    if (_lineThickness24 != null) {
      return _lineThickness24!!
    }
    _lineThickness24 = fluentIcon(name = "Filled.LineThickness24", 24f) {
      materialPath {
          moveTo(3.0F, 3.0F)
          curveTo(2.448F, 3.0F, 2.0F, 3.448F, 2.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(18.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(-1.0F, 7.5F)
          curveTo(2.0F, 9.672F, 2.672F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(21.328F, 12.0F, 20.5F, 12.0F)
          horizontalLineToRelative(-17.0F)
          curveTo(2.672F, 12.0F, 2.0F, 11.328F, 2.0F, 10.5F)
          close()
          moveTo(2.0F, 18.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()        
      }
    }
    return _lineThickness24!!
  }

private var _lineThickness24: ImageVector? = null
