package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentCheckmark16: ImageVector
  get() {
    if (_commentCheckmark16 != null) {
      return _commentCheckmark16!!
    }
    _commentCheckmark16 = fluentIcon(name = "Filled.CommentCheckmark16", 16f) {
      materialPath {
          moveTo(15.0F, 5.5F)
          curveTo(15.0F, 3.015F, 12.985F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(6.0F, 3.015F, 6.0F, 5.5F)
          reflectiveCurveTo(8.015F, 10.0F, 10.5F, 10.0F)
          reflectiveCurveTo(15.0F, 7.985F, 15.0F, 5.5F)
          close()
          moveToRelative(-2.146F, -1.853F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(9.5F, 6.293F)
          lineToRelative(2.646F, -2.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()
          moveTo(10.5F, 11.0F)
          curveToRelative(1.86F, 0.0F, 3.505F, -0.923F, 4.5F, -2.337F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(8.688F)
          lineToRelative(-3.063F, 2.68F)
          curveTo(4.992F, 15.234F, 4.0F, 14.784F, 4.0F, 13.942F)
          verticalLineTo(12.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveTo(1.0F, 3.12F, 2.12F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(2.757F)
          curveTo(5.472F, 2.95F, 5.0F, 4.17F, 5.0F, 5.5F)
          curveTo(5.0F, 8.538F, 7.462F, 11.0F, 10.5F, 11.0F)
          close()        
      }
    }
    return _commentCheckmark16!!
  }

private var _commentCheckmark16: ImageVector? = null
