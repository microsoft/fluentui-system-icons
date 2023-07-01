package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextIndentIncreaseLtr16: ImageVector
  get() {
    if (_textIndentIncreaseLtr16 != null) {
      return _textIndentIncreaseLtr16!!
    }
    _textIndentIncreaseLtr16 = fluentIcon(name = "Filled.TextIndentIncreaseLtr16", 16f) {
      materialPath {
          moveTo(5.75F, 3.0F)
          curveTo(5.336F, 3.0F, 5.0F, 3.336F, 5.0F, 3.75F)
          reflectiveCurveTo(5.336F, 4.5F, 5.75F, 4.5F)
          horizontalLineToRelative(5.5F)
          curveTo(11.664F, 4.5F, 12.0F, 4.164F, 12.0F, 3.75F)
          reflectiveCurveTo(11.664F, 3.0F, 11.25F, 3.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(5.336F, 7.0F, 5.0F, 7.336F, 5.0F, 7.75F)
          reflectiveCurveTo(5.336F, 8.5F, 5.75F, 8.5F)
          horizontalLineToRelative(8.5F)
          curveTo(14.664F, 8.5F, 15.0F, 8.164F, 15.0F, 7.75F)
          reflectiveCurveTo(14.664F, 7.0F, 14.25F, 7.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(5.336F, 11.0F, 5.0F, 11.336F, 5.0F, 11.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(9.664F, 11.0F, 9.25F, 11.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveTo(2.28F, 5.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(0.97F, 0.97F)
          lineToRelative(-0.97F, 0.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-1.5F, -1.5F)
          close()        
      }
    }
    return _textIndentIncreaseLtr16!!
  }

private var _textIndentIncreaseLtr16: ImageVector? = null
