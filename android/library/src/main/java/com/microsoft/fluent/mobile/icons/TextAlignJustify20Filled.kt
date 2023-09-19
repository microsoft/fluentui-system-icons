package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAlignJustify20: ImageVector
  get() {
    if (_textAlignJustify20 != null) {
      return _textAlignJustify20!!
    }
    _textAlignJustify20 = fluentIcon(name = "Filled.TextAlignJustify20", 20f) {
      materialPath {
          moveTo(2.0F, 4.25F)
          curveTo(2.0F, 3.836F, 2.336F, 3.5F, 2.75F, 3.5F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 3.5F, 18.0F, 3.836F, 18.0F, 4.25F)
          reflectiveCurveTo(17.664F, 5.0F, 17.25F, 5.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 5.0F, 2.0F, 4.664F, 2.0F, 4.25F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(2.0F, 8.836F, 2.336F, 8.5F, 2.75F, 8.5F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 8.5F, 18.0F, 8.836F, 18.0F, 9.25F)
          reflectiveCurveTo(17.664F, 10.0F, 17.25F, 10.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.0F, 2.0F, 9.664F, 2.0F, 9.25F)
          close()
          moveToRelative(0.75F, 4.25F)
          curveTo(2.336F, 13.5F, 2.0F, 13.836F, 2.0F, 14.25F)
          reflectiveCurveTo(2.336F, 15.0F, 2.75F, 15.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _textAlignJustify20!!
  }

private var _textAlignJustify20: ImageVector? = null
