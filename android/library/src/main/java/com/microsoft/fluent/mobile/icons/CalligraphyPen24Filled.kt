package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalligraphyPen24: ImageVector
  get() {
    if (_calligraphyPen24 != null) {
      return _calligraphyPen24!!
    }
    _calligraphyPen24 = fluentIcon(name = "Filled.CalligraphyPen24", 24f) {
      materialPath {
          moveTo(7.5F, 2.75F)
          curveTo(7.5F, 2.336F, 7.164F, 2.0F, 6.75F, 2.0F)
          reflectiveCurveTo(6.0F, 2.336F, 6.0F, 2.75F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.896F, 0.674F, 1.636F, 1.543F, 1.738F)
          lineTo(6.527F, 9.993F)
          curveToRelative(-0.408F, 1.006F, -0.363F, 2.182F, 0.119F, 3.143F)
          lineToRelative(3.99F, 7.95F)
          curveToRelative(0.149F, 0.298F, 0.363F, 0.535F, 0.614F, 0.693F)
          verticalLineTo(12.3F)
          curveToRelative(-0.448F, -0.26F, -0.75F, -0.745F, -0.75F, -1.3F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          curveToRelative(0.0F, 0.555F, -0.302F, 1.04F, -0.75F, 1.3F)
          verticalLineToRelative(9.48F)
          curveToRelative(0.251F, -0.159F, 0.465F, -0.396F, 0.615F, -0.693F)
          lineToRelative(3.99F, -7.951F)
          curveToRelative(0.481F, -0.96F, 0.526F, -2.137F, 0.118F, -3.143F)
          lineToRelative(-1.016F, -2.505F)
          curveTo(17.326F, 7.385F, 18.0F, 6.646F, 18.0F, 5.75F)
          verticalLineToRelative(-3.0F)
          curveTo(18.0F, 2.336F, 17.664F, 2.0F, 17.25F, 2.0F)
          reflectiveCurveTo(16.5F, 2.336F, 16.5F, 2.75F)
          verticalLineToRelative(3.0F)
          curveTo(16.5F, 5.888F, 16.388F, 6.0F, 16.25F, 6.0F)
          horizontalLineToRelative(-8.5F)
          curveTo(7.612F, 6.0F, 7.5F, 5.888F, 7.5F, 5.75F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _calligraphyPen24!!
  }

private var _calligraphyPen24: ImageVector? = null
