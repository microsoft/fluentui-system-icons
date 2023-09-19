package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColumnOneWide24: ImageVector
  get() {
    if (_textColumnOneWide24 != null) {
      return _textColumnOneWide24!!
    }
    _textColumnOneWide24 = fluentIcon(name = "Regular.TextColumnOneWide24", 24f) {
      materialPath {
          moveTo(3.75F, 5.0F)
          curveTo(3.336F, 5.0F, 3.0F, 5.336F, 3.0F, 5.75F)
          reflectiveCurveTo(3.336F, 6.5F, 3.75F, 6.5F)
          horizontalLineToRelative(16.5F)
          curveTo(20.664F, 6.5F, 21.0F, 6.164F, 21.0F, 5.75F)
          reflectiveCurveTo(20.664F, 5.0F, 20.25F, 5.0F)
          horizontalLineTo(3.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(3.336F, 9.0F, 3.0F, 9.336F, 3.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(20.664F, 9.0F, 20.25F, 9.0F)
          horizontalLineTo(3.75F)
          close()
          moveTo(3.0F, 13.75F)
          curveTo(3.0F, 13.336F, 3.336F, 13.0F, 3.75F, 13.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 14.5F, 3.0F, 14.164F, 3.0F, 13.75F)
          close()
          moveTo(3.75F, 17.0F)
          curveTo(3.336F, 17.0F, 3.0F, 17.336F, 3.0F, 17.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(20.664F, 17.0F, 20.25F, 17.0F)
          horizontalLineTo(3.75F)
          close()        
      }
    }
    return _textColumnOneWide24!!
  }

private var _textColumnOneWide24: ImageVector? = null
