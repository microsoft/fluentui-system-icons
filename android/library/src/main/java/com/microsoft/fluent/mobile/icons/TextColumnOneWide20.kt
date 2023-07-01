package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextColumnOneWide20: ImageVector
  get() {
    if (_textColumnOneWide20 != null) {
      return _textColumnOneWide20!!
    }
    _textColumnOneWide20 = fluentIcon(name = "Filled.TextColumnOneWide20", 20f) {
      materialPath {
          moveTo(3.75F, 5.0F)
          curveTo(3.336F, 5.0F, 3.0F, 5.336F, 3.0F, 5.75F)
          reflectiveCurveTo(3.336F, 6.5F, 3.75F, 6.5F)
          horizontalLineToRelative(12.5F)
          curveTo(16.664F, 6.5F, 17.0F, 6.164F, 17.0F, 5.75F)
          reflectiveCurveTo(16.664F, 5.0F, 16.25F, 5.0F)
          horizontalLineTo(3.75F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(3.336F, 8.0F, 3.0F, 8.336F, 3.0F, 8.75F)
          reflectiveCurveTo(3.336F, 9.5F, 3.75F, 9.5F)
          horizontalLineToRelative(12.5F)
          curveTo(16.664F, 9.5F, 17.0F, 9.164F, 17.0F, 8.75F)
          reflectiveCurveTo(16.664F, 8.0F, 16.25F, 8.0F)
          horizontalLineTo(3.75F)
          close()
          moveTo(3.0F, 11.75F)
          curveTo(3.0F, 11.336F, 3.336F, 11.0F, 3.75F, 11.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 12.5F, 3.0F, 12.164F, 3.0F, 11.75F)
          close()
          moveTo(3.75F, 14.0F)
          curveTo(3.336F, 14.0F, 3.0F, 14.336F, 3.0F, 14.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.664F, 14.0F, 16.25F, 14.0F)
          horizontalLineTo(3.75F)
          close()        
      }
    }
    return _textColumnOneWide20!!
  }

private var _textColumnOneWide20: ImageVector? = null
