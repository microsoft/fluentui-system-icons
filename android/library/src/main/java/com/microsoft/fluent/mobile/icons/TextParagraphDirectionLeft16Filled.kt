package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextParagraphDirectionLeft16: ImageVector
  get() {
    if (_textParagraphDirectionLeft16 != null) {
      return _textParagraphDirectionLeft16!!
    }
    _textParagraphDirectionLeft16 = fluentIcon(name = "Filled.TextParagraphDirectionLeft16", 16f) {
      materialPath {
          moveTo(11.0F, 13.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(0.5F)
          curveTo(13.776F, 3.0F, 14.0F, 2.776F, 14.0F, 2.5F)
          reflectiveCurveTo(13.776F, 2.0F, 13.5F, 2.0F)
          horizontalLineTo(9.0F)
          curveTo(7.067F, 2.0F, 5.5F, 3.567F, 5.5F, 5.5F)
          reflectiveCurveTo(7.067F, 9.0F, 9.0F, 9.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          close()
          moveTo(3.854F, 6.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(2.707F, 8.0F)
          lineToRelative(1.147F, -1.146F)
          close()        
      }
    }
    return _textParagraphDirectionLeft16!!
  }

private var _textParagraphDirectionLeft16: ImageVector? = null
