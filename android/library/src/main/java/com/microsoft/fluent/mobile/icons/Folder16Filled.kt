package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Folder16: ImageVector
  get() {
    if (_folder16 != null) {
      return _folder16!!
    }
    _folder16 = fluentIcon(name = "Filled.Folder16", 16f) {
      materialPath {
          moveTo(7.207F, 4.0F)
          horizontalLineTo(7.175F)
          lineTo(6.062F, 3.11F)
          curveTo(5.974F, 3.039F, 5.863F, 3.0F, 5.75F, 3.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          verticalLineToRelative(0.5F)
          horizontalLineToRelative(3.557F)
          lineTo(7.207F, 4.0F)
          close()
          moveTo(8.693F, 4.0F)
          lineTo(6.086F, 6.37F)
          curveTo(5.994F, 6.454F, 5.874F, 6.5F, 5.75F, 6.5F)
          horizontalLineTo(2.0F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.693F)
          close()        
      }
    }
    return _folder16!!
  }

private var _folder16: ImageVector? = null
