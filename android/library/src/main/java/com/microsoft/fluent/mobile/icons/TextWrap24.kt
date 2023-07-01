package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextWrap24: ImageVector
  get() {
    if (_textWrap24 != null) {
      return _textWrap24!!
    }
    _textWrap24 = fluentIcon(name = "Regular.TextWrap24", 24f) {
      materialPath {
          moveTo(2.75F, 5.0F)
          curveTo(2.336F, 5.0F, 2.0F, 5.336F, 2.0F, 5.75F)
          reflectiveCurveTo(2.336F, 6.5F, 2.75F, 6.5F)
          horizontalLineToRelative(18.5F)
          curveTo(21.664F, 6.5F, 22.0F, 6.164F, 22.0F, 5.75F)
          reflectiveCurveTo(21.664F, 5.0F, 21.25F, 5.0F)
          horizontalLineTo(2.75F)
          close()
          moveToRelative(0.0F, 6.5F)
          curveTo(2.336F, 11.5F, 2.0F, 11.836F, 2.0F, 12.25F)
          reflectiveCurveTo(2.336F, 13.0F, 2.75F, 13.0F)
          horizontalLineTo(19.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveTo(20.38F, 18.0F, 19.0F, 18.0F)
          horizontalLineToRelative(-4.44F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-0.72F, -0.72F)
          horizontalLineTo(19.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(2.0F, 18.75F)
          curveTo(2.0F, 18.336F, 2.336F, 18.0F, 2.75F, 18.0F)
          horizontalLineToRelative(6.5F)
          curveTo(9.664F, 18.0F, 10.0F, 18.336F, 10.0F, 18.75F)
          reflectiveCurveTo(9.664F, 19.5F, 9.25F, 19.5F)
          horizontalLineToRelative(-6.5F)
          curveTo(2.336F, 19.5F, 2.0F, 19.164F, 2.0F, 18.75F)
          close()        
      }
    }
    return _textWrap24!!
  }

private var _textWrap24: ImageVector? = null
