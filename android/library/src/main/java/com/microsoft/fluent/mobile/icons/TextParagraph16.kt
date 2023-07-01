package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextParagraph16: ImageVector
  get() {
    if (_textParagraph16 != null) {
      return _textParagraph16!!
    }
    _textParagraph16 = fluentIcon(name = "Filled.TextParagraph16", 16f) {
      materialPath {
          moveTo(13.25F, 2.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(9.56F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(9.56F, 7.0F)
          horizontalLineToRelative(2.19F)
          curveTo(12.993F, 7.0F, 14.0F, 5.993F, 14.0F, 4.75F)
          verticalLineToRelative(-2.0F)
          curveTo(14.0F, 2.336F, 13.664F, 2.0F, 13.25F, 2.0F)
          close()
          moveTo(5.72F, 8.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(0.72F, -0.72F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 11.5F, 1.0F, 11.164F, 1.0F, 10.75F)
          reflectiveCurveTo(1.336F, 10.0F, 1.75F, 10.0F)
          horizontalLineToRelative(4.69F)
          lineTo(5.72F, 9.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _textParagraph16!!
  }

private var _textParagraph16: ImageVector? = null
