package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHoverOff16: ImageVector
  get() {
    if (_cursorHoverOff16 != null) {
      return _cursorHoverOff16!!
    }
    _cursorHoverOff16 = fluentIcon(name = "Filled.CursorHoverOff16", 16f) {
      materialPath {
          moveTo(12.293F, 13.0F)
          lineToRelative(1.853F, 1.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.242F, 1.241F)
          curveTo(1.583F, 3.354F, 1.0F, 4.11F, 1.0F, 5.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, -0.229F, 0.052F, -0.448F, 0.146F, -0.646F)
          lineTo(8.0F, 8.707F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.215F, 0.138F, 0.406F, 0.342F, 0.474F)
          curveTo(8.546F, 15.042F, 8.77F, 14.972F, 8.9F, 14.8F)
          lineToRelative(1.35F, -1.8F)
          horizontalLineToRelative(2.043F)
          close()
          moveToRelative(1.612F, -1.216F)
          curveTo(14.555F, 11.454F, 15.0F, 10.779F, 15.0F, 10.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.121F)
          lineToRelative(8.784F, 8.784F)
          close()        
      }
    }
    return _cursorHoverOff16!!
  }

private var _cursorHoverOff16: ImageVector? = null
