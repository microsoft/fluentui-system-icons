package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentCheckmark20: ImageVector
  get() {
    if (_commentCheckmark20 != null) {
      return _commentCheckmark20!!
    }
    _commentCheckmark20 = fluentIcon(name = "Filled.CommentCheckmark20", 20f) {
      materialPath {
          moveTo(19.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 7.985F, 10.0F, 5.5F)
          reflectiveCurveTo(12.015F, 1.0F, 14.5F, 1.0F)
          reflectiveCurveTo(19.0F, 3.015F, 19.0F, 5.5F)
          close()
          moveToRelative(-2.146F, -1.853F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(13.5F, 6.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(14.5F, 11.0F)
          curveToRelative(1.33F, 0.0F, 2.55F, -0.472F, 3.5F, -1.257F)
          verticalLineToRelative(2.533F)
          curveToRelative(0.0F, 1.418F, -1.164F, 2.566F, -2.6F, 2.566F)
          horizontalLineToRelative(-4.59F)
          lineToRelative(-4.011F, 2.961F)
          curveToRelative(-0.442F, 0.327F, -1.069F, 0.238F, -1.4F, -0.199F)
          curveToRelative(-0.13F, -0.17F, -0.199F, -0.378F, -0.199F, -0.59F)
          verticalLineToRelative(-2.172F)
          horizontalLineTo(4.6F)
          curveToRelative(-1.436F, 0.0F, -2.6F, -1.149F, -2.6F, -2.566F)
          verticalLineToRelative(-6.71F)
          curveTo(2.0F, 4.149F, 3.164F, 3.0F, 4.6F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.216F, 3.75F, 9.0F, 4.6F, 9.0F, 5.5F)
          curveToRelative(0.0F, 3.038F, 2.462F, 5.5F, 5.5F, 5.5F)
          close()        
      }
    }
    return _commentCheckmark20!!
  }

private var _commentCheckmark20: ImageVector? = null
