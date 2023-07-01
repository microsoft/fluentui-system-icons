package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CommentCheckmark16: ImageVector
  get() {
    if (_commentCheckmark16 != null) {
      return _commentCheckmark16!!
    }
    _commentCheckmark16 = fluentIcon(name = "Regular.CommentCheckmark16", 16f) {
      materialPath {
          moveTo(15.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 7.985F, 6.0F, 5.5F)
          reflectiveCurveTo(8.015F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(15.0F, 3.015F, 15.0F, 5.5F)
          close()
          moveToRelative(-2.146F, -1.853F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(9.5F, 6.293F)
          lineTo(8.854F, 5.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(3.5F, 3.0F)
          horizontalLineToRelative(2.1F)
          curveToRelative(0.183F, -0.358F, 0.404F, -0.693F, 0.657F, -1.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 2.0F, 1.0F, 3.12F, 1.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 10.88F, 2.12F, 12.0F, 3.5F, 12.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.942F)
          curveToRelative(0.0F, 0.842F, 0.992F, 1.292F, 1.625F, 0.738F)
          lineTo(8.688F, 12.0F)
          horizontalLineTo(12.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(8.663F)
          curveToRelative(-0.29F, 0.411F, -0.634F, 0.78F, -1.023F, 1.098F)
          curveTo(13.854F, 10.466F, 13.24F, 11.0F, 12.5F, 11.0F)
          horizontalLineTo(8.312F)
          lineTo(5.0F, 13.898F)
          verticalLineTo(11.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 11.0F, 2.0F, 10.328F, 2.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveTo(2.0F, 3.672F, 2.672F, 3.0F, 3.5F, 3.0F)
          close()        
      }
    }
    return _commentCheckmark16!!
  }

private var _commentCheckmark16: ImageVector? = null
