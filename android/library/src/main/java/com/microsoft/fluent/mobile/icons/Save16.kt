package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Save16: ImageVector
  get() {
    if (_save16 != null) {
      return _save16!!
    }
    _save16 = fluentIcon(name = "Filled.Save16", 16f) {
      materialPath {
          moveTo(5.0F, 2.0F)
          verticalLineToRelative(2.5F)
          curveTo(5.0F, 5.328F, 5.672F, 6.0F, 6.5F, 6.0F)
          horizontalLineToRelative(2.0F)
          curveTo(9.328F, 6.0F, 10.0F, 5.328F, 10.0F, 4.5F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(0.379F)
          curveToRelative(0.53F, 0.0F, 1.039F, 0.21F, 1.414F, 0.586F)
          lineToRelative(1.621F, 1.621F)
          curveTo(13.79F, 4.582F, 14.0F, 5.091F, 14.0F, 5.621F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          verticalLineTo(9.5F)
          curveTo(12.0F, 8.672F, 11.328F, 8.0F, 10.5F, 8.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.673F, 8.0F, 4.0F, 8.669F, 4.0F, 9.498F)
          verticalLineTo(14.0F)
          curveToRelative(-1.104F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineToRelative(2.5F)
          curveTo(6.0F, 4.776F, 6.224F, 5.0F, 6.5F, 5.0F)
          horizontalLineToRelative(2.0F)
          curveTo(8.776F, 5.0F, 9.0F, 4.776F, 9.0F, 4.5F)
          verticalLineTo(2.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(5.0F, 14.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(9.5F)
          curveTo(11.0F, 9.224F, 10.776F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.223F, 9.0F, 5.0F, 9.223F, 5.0F, 9.498F)
          verticalLineTo(14.0F)
          close()        
      }
    }
    return _save16!!
  }

private var _save16: ImageVector? = null
