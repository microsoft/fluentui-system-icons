package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LineStyle24: ImageVector
  get() {
    if (_lineStyle24 != null) {
      return _lineStyle24!!
    }
    _lineStyle24 = fluentIcon(name = "Filled.LineStyle24", 24f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveTo(6.552F, 7.0F, 6.0F, 7.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 7.0F, 2.0F, 6.552F, 2.0F, 6.0F)
          close()
          moveToRelative(0.0F, 12.5F)
          curveTo(2.0F, 17.672F, 2.672F, 17.0F, 3.5F, 17.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(21.328F, 20.0F, 20.5F, 20.0F)
          horizontalLineToRelative(-17.0F)
          curveTo(2.672F, 20.0F, 2.0F, 19.328F, 2.0F, 18.5F)
          close()
          moveTo(10.75F, 5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-2.5F)
          close()
          moveTo(17.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          close()
          moveTo(3.0F, 11.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(18.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _lineStyle24!!
  }

private var _lineStyle24: ImageVector? = null
