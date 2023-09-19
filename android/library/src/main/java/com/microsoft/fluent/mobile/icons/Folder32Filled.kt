package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Folder32: ImageVector
  get() {
    if (_folder32 != null) {
      return _folder32!!
    }
    _folder32 = fluentIcon(name = "Filled.Folder32", 32f) {
      materialPath {
          moveTo(14.413F, 8.0F)
          horizontalLineToRelative(-0.062F)
          lineToRelative(-2.226F, -1.78F)
          curveTo(11.947F, 6.076F, 11.727F, 6.0F, 11.5F, 6.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(7.113F)
          lineToRelative(3.3F, -3.0F)
          close()
          moveTo(17.387F, 8.0F)
          lineToRelative(-5.214F, 4.74F)
          curveTo(11.989F, 12.907F, 11.749F, 13.0F, 11.5F, 13.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineToRelative(-6.613F)
          close()        
      }
    }
    return _folder32!!
  }

private var _folder32: ImageVector? = null
