package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAlignJustifyLow20: ImageVector
  get() {
    if (_textAlignJustifyLow20 != null) {
      return _textAlignJustifyLow20!!
    }
    _textAlignJustifyLow20 = fluentIcon(name = "Filled.TextAlignJustifyLow20", 20f) {
      materialPath {
          moveTo(9.0F, 4.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(7.5F)
          curveTo(17.664F, 3.75F, 18.0F, 4.086F, 18.0F, 4.5F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-7.5F)
          curveTo(9.336F, 5.25F, 9.0F, 4.914F, 9.0F, 4.5F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(7.5F)
          curveTo(17.664F, 8.75F, 18.0F, 9.086F, 18.0F, 9.5F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-7.5F)
          curveTo(9.336F, 10.25F, 9.0F, 9.914F, 9.0F, 9.5F)
          close()
          moveToRelative(-6.25F, 4.25F)
          curveTo(2.336F, 13.75F, 2.0F, 14.086F, 2.0F, 14.5F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _textAlignJustifyLow20!!
  }

private var _textAlignJustifyLow20: ImageVector? = null
