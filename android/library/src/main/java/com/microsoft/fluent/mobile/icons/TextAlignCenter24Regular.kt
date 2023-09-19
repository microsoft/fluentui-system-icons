package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAlignCenter24: ImageVector
  get() {
    if (_textAlignCenter24 != null) {
      return _textAlignCenter24!!
    }
    _textAlignCenter24 = fluentIcon(name = "Regular.TextAlignCenter24", 24f) {
      materialPath {
          moveTo(4.0F, 5.75F)
          curveTo(4.0F, 5.336F, 4.336F, 5.0F, 4.75F, 5.0F)
          horizontalLineToRelative(14.5F)
          curveTo(19.664F, 5.0F, 20.0F, 5.336F, 20.0F, 5.75F)
          reflectiveCurveTo(19.664F, 6.5F, 19.25F, 6.5F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 6.5F, 4.0F, 6.164F, 4.0F, 5.75F)
          close()
          moveToRelative(2.0F, 13.0F)
          curveTo(6.0F, 18.336F, 6.336F, 18.0F, 6.75F, 18.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 19.5F, 6.0F, 19.164F, 6.0F, 18.75F)
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
    return _textAlignCenter24!!
  }

private var _textAlignCenter24: ImageVector? = null
