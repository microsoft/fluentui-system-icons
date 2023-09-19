package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextIndentDecreaseRtl16: ImageVector
  get() {
    if (_textIndentDecreaseRtl16 != null) {
      return _textIndentDecreaseRtl16!!
    }
    _textIndentDecreaseRtl16 = fluentIcon(name = "Filled.TextIndentDecreaseRtl16", 16f) {
      materialPath {
          moveTo(4.0F, 3.75F)
          curveTo(4.0F, 3.336F, 4.336F, 3.0F, 4.75F, 3.0F)
          horizontalLineToRelative(5.5F)
          curveTo(10.664F, 3.0F, 11.0F, 3.336F, 11.0F, 3.75F)
          reflectiveCurveTo(10.664F, 4.5F, 10.25F, 4.5F)
          horizontalLineToRelative(-5.5F)
          curveTo(4.336F, 4.5F, 4.0F, 4.164F, 4.0F, 3.75F)
          close()
          moveToRelative(8.22F, 1.97F)
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
          moveTo(1.0F, 7.75F)
          curveTo(1.0F, 7.336F, 1.336F, 7.0F, 1.75F, 7.0F)
          horizontalLineToRelative(8.5F)
          curveTo(10.664F, 7.0F, 11.0F, 7.336F, 11.0F, 7.75F)
          reflectiveCurveTo(10.664F, 8.5F, 10.25F, 8.5F)
          horizontalLineToRelative(-8.5F)
          curveTo(1.336F, 8.5F, 1.0F, 8.164F, 1.0F, 7.75F)
          close()
          moveToRelative(5.0F, 4.0F)
          curveTo(6.0F, 11.336F, 6.336F, 11.0F, 6.75F, 11.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-3.5F)
          curveTo(6.336F, 12.5F, 6.0F, 12.164F, 6.0F, 11.75F)
          close()        
      }
    }
    return _textIndentDecreaseRtl16!!
  }

private var _textIndentDecreaseRtl16: ImageVector? = null
