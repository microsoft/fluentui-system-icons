package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextWrap20: ImageVector
  get() {
    if (_textWrap20 != null) {
      return _textWrap20!!
    }
    _textWrap20 = fluentIcon(name = "Filled.TextWrap20", 20f) {
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
          horizontalLineToRelative(13.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          reflectiveCurveTo(17.545F, 15.0F, 15.75F, 15.0F)
          horizontalLineToRelative(-3.399F)
          lineToRelative(0.225F, 0.27F)
          curveToRelative(0.265F, 0.318F, 0.222F, 0.791F, -0.096F, 1.056F)
          reflectiveCurveToRelative(-0.791F, 0.222F, -1.056F, -0.096F)
          lineToRelative(-1.25F, -1.5F)
          curveToRelative(-0.232F, -0.278F, -0.232F, -0.682F, 0.0F, -0.96F)
          lineToRelative(1.25F, -1.5F)
          curveToRelative(0.265F, -0.318F, 0.738F, -0.361F, 1.056F, -0.096F)
          curveToRelative(0.318F, 0.265F, 0.361F, 0.738F, 0.096F, 1.056F)
          lineToRelative(-0.225F, 0.27F)
          horizontalLineToRelative(3.399F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveTo(16.716F, 10.0F, 15.75F, 10.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.336F, 10.0F, 2.0F, 9.664F, 2.0F, 9.25F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(4.5F)
          curveTo(7.664F, 13.5F, 8.0F, 13.836F, 8.0F, 14.25F)
          reflectiveCurveTo(7.664F, 15.0F, 7.25F, 15.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(2.336F, 15.0F, 2.0F, 14.664F, 2.0F, 14.25F)
          close()        
      }
    }
    return _textWrap20!!
  }

private var _textWrap20: ImageVector? = null
