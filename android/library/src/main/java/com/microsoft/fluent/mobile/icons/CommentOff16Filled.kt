package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentOff16: ImageVector
  get() {
    if (_commentOff16 != null) {
      return _commentOff16!!
    }
    _commentOff16 = fluentIcon(name = "Filled.CommentOff16", 16f) {
      materialPath {
          moveTo(11.293F, 12.0F)
          lineToRelative(2.853F, 2.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(0.739F, 0.738F)
          curveTo(1.343F, 3.05F, 1.0F, 3.735F, 1.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 10.88F, 2.12F, 12.0F, 3.5F, 12.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.942F)
          curveToRelative(0.0F, 0.842F, 0.992F, 1.292F, 1.625F, 0.738F)
          lineTo(8.688F, 12.0F)
          horizontalLineToRelative(2.605F)
          close()
          moveTo(15.0F, 9.5F)
          curveToRelative(0.0F, 0.916F, -0.492F, 1.716F, -1.227F, 2.152F)
          lineTo(4.121F, 2.0F)
          horizontalLineTo(12.5F)
          curveTo(13.88F, 2.0F, 15.0F, 3.12F, 15.0F, 4.5F)
          verticalLineToRelative(5.0F)
          close()        
      }
    }
    return _commentOff16!!
  }

private var _commentOff16: ImageVector? = null
