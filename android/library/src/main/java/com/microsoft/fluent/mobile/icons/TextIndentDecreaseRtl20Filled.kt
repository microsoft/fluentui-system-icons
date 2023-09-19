package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextIndentDecreaseRtl20: ImageVector
  get() {
    if (_textIndentDecreaseRtl20 != null) {
      return _textIndentDecreaseRtl20!!
    }
    _textIndentDecreaseRtl20 = fluentIcon(name = "Filled.TextIndentDecreaseRtl20", 20f) {
      materialPath {
          moveTo(13.25F, 4.0F)
          curveTo(13.664F, 4.0F, 14.0F, 4.336F, 14.0F, 4.75F)
          reflectiveCurveTo(13.664F, 5.5F, 13.25F, 5.5F)
          horizontalLineToRelative(-7.5F)
          curveTo(5.336F, 5.5F, 5.0F, 5.164F, 5.0F, 4.75F)
          reflectiveCurveTo(5.336F, 4.0F, 5.75F, 4.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveTo(14.0F, 9.75F)
          curveTo(14.0F, 9.336F, 13.664F, 9.0F, 13.25F, 9.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 9.0F, 2.0F, 9.336F, 2.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-5.5F)
          curveTo(7.336F, 14.0F, 7.0F, 14.336F, 7.0F, 14.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()
          moveToRelative(1.22F, -7.03F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(0.97F, -0.97F)
          lineToRelative(-0.97F, -0.97F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _textIndentDecreaseRtl20!!
  }

private var _textIndentDecreaseRtl20: ImageVector? = null
