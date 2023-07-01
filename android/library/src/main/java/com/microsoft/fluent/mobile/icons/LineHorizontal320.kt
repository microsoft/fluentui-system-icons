package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LineHorizontal320: ImageVector
  get() {
    if (_lineHorizontal320 != null) {
      return _lineHorizontal320!!
    }
    _lineHorizontal320 = fluentIcon(name = "Filled.LineHorizontal320", 320f) {
      materialPath {
          moveTo(2.0F, 4.75F)
          curveTo(2.0F, 4.336F, 2.336F, 4.0F, 2.75F, 4.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 4.0F, 18.0F, 4.336F, 18.0F, 4.75F)
          reflectiveCurveTo(17.664F, 5.5F, 17.25F, 5.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 5.5F, 2.0F, 5.164F, 2.0F, 4.75F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(2.0F, 9.336F, 2.336F, 9.0F, 2.75F, 9.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 9.0F, 18.0F, 9.336F, 18.0F, 9.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.5F, 2.0F, 10.164F, 2.0F, 9.75F)
          close()
          moveTo(2.75F, 14.0F)
          curveTo(2.336F, 14.0F, 2.0F, 14.336F, 2.0F, 14.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.664F, 14.0F, 17.25F, 14.0F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _lineHorizontal320!!
  }

private var _lineHorizontal320: ImageVector? = null
