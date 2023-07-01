package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LineHorizontal420: ImageVector
  get() {
    if (_lineHorizontal420 != null) {
      return _lineHorizontal420!!
    }
    _lineHorizontal420 = fluentIcon(name = "Filled.LineHorizontal420", 420f) {
      materialPath {
          moveTo(2.0F, 3.75F)
          curveTo(2.0F, 3.336F, 2.336F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 3.0F, 18.0F, 3.336F, 18.0F, 3.75F)
          reflectiveCurveTo(17.664F, 4.5F, 17.25F, 4.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 4.5F, 2.0F, 4.164F, 2.0F, 3.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(2.0F, 7.336F, 2.336F, 7.0F, 2.75F, 7.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 7.0F, 18.0F, 7.336F, 18.0F, 7.75F)
          reflectiveCurveTo(17.664F, 8.5F, 17.25F, 8.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 8.5F, 2.0F, 8.164F, 2.0F, 7.75F)
          close()
          moveTo(2.75F, 11.0F)
          curveTo(2.336F, 11.0F, 2.0F, 11.336F, 2.0F, 11.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.664F, 11.0F, 17.25F, 11.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(2.0F, 15.75F)
          curveTo(2.0F, 15.336F, 2.336F, 15.0F, 2.75F, 15.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 16.5F, 2.0F, 16.164F, 2.0F, 15.75F)
          close()        
      }
    }
    return _lineHorizontal420!!
  }

private var _lineHorizontal420: ImageVector? = null
