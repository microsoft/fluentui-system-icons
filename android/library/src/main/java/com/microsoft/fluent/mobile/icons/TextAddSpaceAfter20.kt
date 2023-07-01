package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextAddSpaceAfter20: ImageVector
  get() {
    if (_textAddSpaceAfter20 != null) {
      return _textAddSpaceAfter20!!
    }
    _textAddSpaceAfter20 = fluentIcon(name = "Filled.TextAddSpaceAfter20", 20f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          curveTo(3.0F, 5.336F, 3.336F, 5.0F, 3.75F, 5.0F)
          horizontalLineToRelative(12.5F)
          curveTo(16.664F, 5.0F, 17.0F, 5.336F, 17.0F, 5.75F)
          reflectiveCurveTo(16.664F, 6.5F, 16.25F, 6.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 6.5F, 3.0F, 6.164F, 3.0F, 5.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(3.0F, 9.336F, 3.336F, 9.0F, 3.75F, 9.0F)
          horizontalLineToRelative(12.5F)
          curveTo(16.664F, 9.0F, 17.0F, 9.336F, 17.0F, 9.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 10.5F, 3.0F, 10.164F, 3.0F, 9.75F)
          close()
          moveToRelative(9.03F, 6.03F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(10.0F, 14.81F)
          lineToRelative(0.97F, 0.97F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _textAddSpaceAfter20!!
  }

private var _textAddSpaceAfter20: ImageVector? = null
