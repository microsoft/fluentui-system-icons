package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CursorHoverOff16: ImageVector
  get() {
    if (_cursorHoverOff16 != null) {
      return _cursorHoverOff16!!
    }
    _cursorHoverOff16 = fluentIcon(name = "Regular.CursorHoverOff16", 16f) {
      materialPath {
          moveTo(12.293F, 13.0F)
          lineToRelative(1.853F, 1.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.0F, -1.999F)
          lineToRelative(-11.0F, -11.0F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.706F)
          lineToRelative(1.242F, 1.242F)
          curveTo(1.583F, 3.354F, 1.0F, 4.11F, 1.0F, 5.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(0.293F)
          lineTo(8.0F, 8.707F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.215F, 0.138F, 0.406F, 0.342F, 0.474F)
          curveTo(8.546F, 15.042F, 8.77F, 14.972F, 8.9F, 14.8F)
          lineToRelative(1.35F, -1.8F)
          horizontalLineToRelative(2.043F)
          close()
          moveToRelative(-1.0F, -1.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.157F, 0.0F, -0.306F, 0.074F, -0.4F, 0.2F)
          lineTo(9.0F, 13.0F)
          verticalLineTo(9.707F)
          lineTo(11.293F, 12.0F)
          close()
          moveToRelative(1.822F, -1.007F)
          curveTo(13.613F, 10.938F, 14.0F, 10.513F, 14.0F, 10.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.121F)
          lineToRelative(-1.0F, -1.0F)
          horizontalLineTo(13.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.779F, -0.445F, 1.454F, -1.095F, 1.784F)
          lineToRelative(-0.79F, -0.79F)
          close()        
      }
    }
    return _cursorHoverOff16!!
  }

private var _cursorHoverOff16: ImageVector? = null
