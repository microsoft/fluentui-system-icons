package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAlignRight24: ImageVector
  get() {
    if (_textAlignRight24 != null) {
      return _textAlignRight24!!
    }
    _textAlignRight24 = fluentIcon(name = "Regular.TextAlignRight24", 24f) {
      materialPath {
          moveTo(5.0F, 5.75F)
          curveTo(5.0F, 5.336F, 5.336F, 5.0F, 5.75F, 5.0F)
          horizontalLineToRelative(15.5F)
          curveTo(21.664F, 5.0F, 22.0F, 5.336F, 22.0F, 5.75F)
          reflectiveCurveTo(21.664F, 6.5F, 21.25F, 6.5F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 6.5F, 5.0F, 6.164F, 5.0F, 5.75F)
          close()
          moveToRelative(5.0F, 13.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-10.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveTo(2.75F, 11.5F)
          curveTo(2.336F, 11.5F, 2.0F, 11.836F, 2.0F, 12.25F)
          reflectiveCurveTo(2.336F, 13.0F, 2.75F, 13.0F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _textAlignRight24!!
  }

private var _textAlignRight24: ImageVector? = null
