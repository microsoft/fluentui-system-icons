package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAlignJustifyLow9020: ImageVector
  get() {
    if (_textAlignJustifyLow9020 != null) {
      return _textAlignJustifyLow9020!!
    }
    _textAlignJustifyLow9020 = fluentIcon(name = "Filled.TextAlignJustifyLow9020", 9020f) {
      materialPath {
          moveTo(15.5F, 9.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-7.5F)
          curveTo(14.75F, 9.336F, 15.086F, 9.0F, 15.5F, 9.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-7.5F)
          curveTo(9.75F, 9.336F, 10.086F, 9.0F, 10.5F, 9.0F)
          close()
          moveTo(6.25F, 2.75F)
          curveTo(6.25F, 2.336F, 5.914F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(4.75F, 2.336F, 4.75F, 2.75F)
          verticalLineToRelative(14.5F)
          curveTo(4.75F, 17.664F, 5.086F, 18.0F, 5.5F, 18.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _textAlignJustifyLow9020!!
  }

private var _textAlignJustifyLow9020: ImageVector? = null
