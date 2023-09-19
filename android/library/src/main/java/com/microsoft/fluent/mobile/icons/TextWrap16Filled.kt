package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextWrap16: ImageVector
  get() {
    if (_textWrap16 != null) {
      return _textWrap16!!
    }
    _textWrap16 = fluentIcon(name = "Filled.TextWrap16", 16f) {
      materialPath {
          moveTo(2.75F, 3.0F)
          curveTo(2.336F, 3.0F, 2.0F, 3.336F, 2.0F, 3.75F)
          reflectiveCurveTo(2.336F, 4.5F, 2.75F, 4.5F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 4.5F, 14.0F, 4.164F, 14.0F, 3.75F)
          reflectiveCurveTo(13.664F, 3.0F, 13.25F, 3.0F)
          horizontalLineTo(2.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(2.336F, 7.0F, 2.0F, 7.336F, 2.0F, 7.75F)
          reflectiveCurveTo(2.336F, 8.5F, 2.75F, 8.5F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(12.94F, 11.0F, 12.25F, 11.0F)
          horizontalLineToRelative(-1.69F)
          lineToRelative(0.22F, -0.22F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-0.22F, -0.22F)
          horizontalLineToRelative(1.69F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          reflectiveCurveTo(13.769F, 7.0F, 12.25F, 7.0F)
          horizontalLineToRelative(-9.5F)
          close()
          moveTo(2.0F, 11.75F)
          curveTo(2.0F, 11.336F, 2.336F, 11.0F, 2.75F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(6.164F, 12.5F, 5.75F, 12.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(2.336F, 12.5F, 2.0F, 12.164F, 2.0F, 11.75F)
          close()        
      }
    }
    return _textWrap16!!
  }

private var _textWrap16: ImageVector? = null
