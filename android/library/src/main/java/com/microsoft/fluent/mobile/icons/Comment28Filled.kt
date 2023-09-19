package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comment28: ImageVector
  get() {
    if (_comment28 != null) {
      return _comment28!!
    }
    _comment28 = fluentIcon(name = "Filled.Comment28", 28f) {
      materialPath {
          moveTo(5.75F, 3.0F)
          curveTo(3.679F, 3.0F, 2.0F, 4.679F, 2.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 19.321F, 3.679F, 21.0F, 5.75F, 21.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(3.296F)
          curveToRelative(0.0F, 1.427F, 1.617F, 2.254F, 2.774F, 1.419F)
          lineTo(16.309F, 21.0F)
          horizontalLineToRelative(5.941F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(6.75F)
          curveTo(26.0F, 4.679F, 24.321F, 3.0F, 22.25F, 3.0F)
          horizontalLineTo(5.75F)
          close()        
      }
    }
    return _comment28!!
  }

private var _comment28: ImageVector? = null
