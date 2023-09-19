package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CursorHover16: ImageVector
  get() {
    if (_cursorHover16 != null) {
      return _cursorHover16!!
    }
    _cursorHover16 = fluentIcon(name = "Regular.CursorHover16", 16f) {
      materialPath {
          moveTo(1.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.806F, -0.477F, 1.501F, -1.164F, 1.818F)
          curveToRelative(-0.07F, -0.138F, -0.162F, -0.266F, -0.275F, -0.379F)
          lineToRelative(-0.446F, -0.446F)
          curveTo(13.613F, 10.938F, 14.0F, 10.513F, 14.0F, 10.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 4.0F, 2.0F, 4.448F, 2.0F, 5.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(7.854F, 3.146F)
          curveTo(8.71F, 8.003F, 8.495F, 7.962F, 8.309F, 8.038F)
          curveTo(8.122F, 8.115F, 8.0F, 8.298F, 8.0F, 8.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.215F, 0.138F, 0.406F, 0.342F, 0.474F)
          curveTo(8.546F, 15.042F, 8.77F, 14.972F, 8.9F, 14.8F)
          lineToRelative(1.35F, -1.8F)
          horizontalLineToRelative(2.25F)
          curveToRelative(0.202F, 0.0F, 0.384F, -0.122F, 0.462F, -0.309F)
          curveToRelative(0.077F, -0.187F, 0.035F, -0.402F, -0.108F, -0.545F)
          lineToRelative(-4.0F, -4.0F)
          close()
          moveTo(9.0F, 13.0F)
          verticalLineTo(9.707F)
          lineTo(11.293F, 12.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.157F, 0.0F, -0.306F, 0.074F, -0.4F, 0.2F)
          lineTo(9.0F, 13.0F)
          close()        
      }
    }
    return _cursorHover16!!
  }

private var _cursorHover16: ImageVector? = null
