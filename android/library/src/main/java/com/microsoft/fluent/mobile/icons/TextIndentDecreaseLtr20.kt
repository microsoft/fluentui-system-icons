package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextIndentDecreaseLtr20: ImageVector
  get() {
    if (_textIndentDecreaseLtr20 != null) {
      return _textIndentDecreaseLtr20!!
    }
    _textIndentDecreaseLtr20 = fluentIcon(name = "Filled.TextIndentDecreaseLtr20", 20f) {
      materialPath {
          moveTo(6.0F, 4.75F)
          curveTo(6.0F, 4.336F, 6.336F, 4.0F, 6.75F, 4.0F)
          horizontalLineToRelative(7.5F)
          curveTo(14.664F, 4.0F, 15.0F, 4.336F, 15.0F, 4.75F)
          reflectiveCurveTo(14.664F, 5.5F, 14.25F, 5.5F)
          horizontalLineToRelative(-7.5F)
          curveTo(6.336F, 5.5F, 6.0F, 5.164F, 6.0F, 4.75F)
          close()
          moveTo(6.75F, 9.0F)
          curveTo(6.336F, 9.0F, 6.0F, 9.336F, 6.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.664F, 9.0F, 17.25F, 9.0F)
          horizontalLineTo(6.75F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(6.336F, 14.0F, 6.0F, 14.336F, 6.0F, 14.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(12.664F, 14.0F, 12.25F, 14.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(-3.28F, -2.22F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.56F, 9.75F)
          lineToRelative(0.97F, -0.97F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.5F, 1.5F)
          close()        
      }
    }
    return _textIndentDecreaseLtr20!!
  }

private var _textIndentDecreaseLtr20: ImageVector? = null
