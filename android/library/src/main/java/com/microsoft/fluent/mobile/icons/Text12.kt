package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Text12: ImageVector
  get() {
    if (_text12 != null) {
      return _text12!!
    }
    _text12 = fluentIcon(name = "Filled.Text12", 12f) {
      materialPath {
          moveTo(2.0F, 2.75F)
          curveTo(2.0F, 2.336F, 2.336F, 2.0F, 2.75F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveTo(9.164F, 2.0F, 9.5F, 2.336F, 9.5F, 2.75F)
          verticalLineToRelative(1.5F)
          curveTo(9.5F, 4.664F, 9.164F, 5.0F, 8.75F, 5.0F)
          reflectiveCurveTo(8.0F, 4.664F, 8.0F, 4.25F)
          verticalLineTo(3.5F)
          horizontalLineTo(6.5F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(0.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(7.164F, 10.0F, 6.75F, 10.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.336F, 10.0F, 4.0F, 9.664F, 4.0F, 9.25F)
          reflectiveCurveTo(4.336F, 8.5F, 4.75F, 8.5F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineTo(3.5F)
          verticalLineToRelative(0.75F)
          curveTo(3.5F, 4.664F, 3.164F, 5.0F, 2.75F, 5.0F)
          reflectiveCurveTo(2.0F, 4.664F, 2.0F, 4.25F)
          verticalLineToRelative(-1.5F)
          close()        
      }
    }
    return _text12!!
  }

private var _text12: ImageVector? = null
