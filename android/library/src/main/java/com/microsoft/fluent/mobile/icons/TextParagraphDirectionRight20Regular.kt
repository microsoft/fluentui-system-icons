package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextParagraphDirectionRight20: ImageVector
  get() {
    if (_textParagraphDirectionRight20 != null) {
      return _textParagraphDirectionRight20!!
    }
    _textParagraphDirectionRight20 = fluentIcon(name = "Regular.TextParagraphDirectionRight20", 20f) {
      materialPath {
          moveTo(11.5F, 3.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(13.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(0.5F)
          curveTo(16.776F, 4.0F, 17.0F, 3.776F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(13.0F, 4.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineTo(13.0F)
          close()
          moveTo(3.146F, 7.646F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(4.793F, 10.0F)
          lineTo(3.146F, 8.354F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _textParagraphDirectionRight20!!
  }

private var _textParagraphDirectionRight20: ImageVector? = null
