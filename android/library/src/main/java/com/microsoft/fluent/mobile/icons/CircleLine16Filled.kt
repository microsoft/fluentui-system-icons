package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleLine16: ImageVector
  get() {
    if (_circleLine16 != null) {
      return _circleLine16!!
    }
    _circleLine16 = fluentIcon(name = "Filled.CircleLine16", 16f) {
      materialPath {
          moveTo(13.98F, 8.5F)
          curveTo(13.724F, 11.58F, 11.144F, 14.0F, 8.0F, 14.0F)
          curveToRelative(-3.145F, 0.0F, -5.725F, -2.42F, -5.98F, -5.5F)
          horizontalLineToRelative(11.96F)
          close()
          moveToRelative(0.0F, -1.0F)
          horizontalLineTo(2.02F)
          curveTo(2.276F, 4.42F, 4.856F, 2.0F, 8.0F, 2.0F)
          curveToRelative(3.145F, 0.0F, 5.725F, 2.42F, 5.98F, 5.5F)
          close()        
      }
    }
    return _circleLine16!!
  }

private var _circleLine16: ImageVector? = null
