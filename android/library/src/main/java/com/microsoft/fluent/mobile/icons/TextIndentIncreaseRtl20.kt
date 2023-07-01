package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextIndentIncreaseRtl20: ImageVector
  get() {
    if (_textIndentIncreaseRtl20 != null) {
      return _textIndentIncreaseRtl20!!
    }
    _textIndentIncreaseRtl20 = fluentIcon(name = "Filled.TextIndentIncreaseRtl20", 20f) {
      materialPath {
          moveTo(14.0F, 4.75F)
          curveTo(14.0F, 4.336F, 13.664F, 4.0F, 13.25F, 4.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(5.336F, 4.0F, 5.0F, 4.336F, 5.0F, 4.75F)
          reflectiveCurveTo(5.336F, 5.5F, 5.75F, 5.5F)
          horizontalLineToRelative(7.5F)
          curveTo(13.664F, 5.5F, 14.0F, 5.164F, 14.0F, 4.75F)
          close()
          moveTo(13.25F, 9.0F)
          curveTo(13.664F, 9.0F, 14.0F, 9.336F, 14.0F, 9.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 10.5F, 2.0F, 10.164F, 2.0F, 9.75F)
          reflectiveCurveTo(2.336F, 9.0F, 2.75F, 9.0F)
          horizontalLineToRelative(10.5F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.5F)
          curveTo(7.336F, 15.5F, 7.0F, 15.164F, 7.0F, 14.75F)
          reflectiveCurveTo(7.336F, 14.0F, 7.75F, 14.0F)
          horizontalLineToRelative(5.5F)
          close()
          moveToRelative(3.72F, -6.28F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-0.97F, 0.97F)
          lineToRelative(0.97F, 0.97F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.5F, -1.5F)
          close()        
      }
    }
    return _textIndentIncreaseRtl20!!
  }

private var _textIndentIncreaseRtl20: ImageVector? = null
