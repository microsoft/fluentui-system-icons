package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextFirstLine24: ImageVector
  get() {
    if (_textFirstLine24 != null) {
      return _textFirstLine24!!
    }
    _textFirstLine24 = fluentIcon(name = "Regular.TextFirstLine24", 24f) {
      materialPath {
          moveTo(20.22F, 3.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-1.47F, 1.47F)
          lineToRelative(1.47F, 1.47F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.0F, -2.0F)
          close()
          moveTo(14.25F, 5.0F)
          curveTo(14.664F, 5.0F, 15.0F, 5.336F, 15.0F, 5.75F)
          reflectiveCurveTo(14.664F, 6.5F, 14.25F, 6.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 6.5F, 2.0F, 6.164F, 2.0F, 5.75F)
          reflectiveCurveTo(2.336F, 5.0F, 2.75F, 5.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(7.0F, 13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 19.5F, 2.0F, 19.164F, 2.0F, 18.75F)
          reflectiveCurveTo(2.336F, 18.0F, 2.75F, 18.0F)
          horizontalLineToRelative(18.5F)
          close()
          moveTo(22.0F, 12.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.5F, 2.0F, 11.836F, 2.0F, 12.25F)
          reflectiveCurveTo(2.336F, 13.0F, 2.75F, 13.0F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _textFirstLine24!!
  }

private var _textFirstLine24: ImageVector? = null
