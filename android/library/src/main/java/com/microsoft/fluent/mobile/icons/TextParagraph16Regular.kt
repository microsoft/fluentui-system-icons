package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextParagraph16: ImageVector
  get() {
    if (_textParagraph16 != null) {
      return _textParagraph16!!
    }
    _textParagraph16 = fluentIcon(name = "Regular.TextParagraph16", 16f) {
      materialPath {
          moveTo(13.5F, 2.0F)
          curveTo(13.224F, 2.0F, 13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.707F)
          lineToRelative(1.146F, -1.146F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.707F)
          lineTo(8.707F, 7.0F)
          horizontalLineTo(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          close()
          moveTo(5.646F, 8.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(6.793F, 11.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 11.0F, 1.0F, 10.776F, 1.0F, 10.5F)
          reflectiveCurveTo(1.224F, 10.0F, 1.5F, 10.0F)
          horizontalLineToRelative(5.293F)
          lineTo(5.646F, 8.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _textParagraph16!!
  }

private var _textParagraph16: ImageVector? = null
