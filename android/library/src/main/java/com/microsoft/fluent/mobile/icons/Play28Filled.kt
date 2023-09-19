package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Play28: ImageVector
  get() {
    if (_play28 != null) {
      return _play28!!
    }
    _play28 = fluentIcon(name = "Filled.Play28", 28f) {
      materialPath {
          moveTo(10.138F, 3.382F)
          curveTo(8.304F, 2.31F, 6.0F, 3.632F, 6.0F, 5.756F)
          verticalLineToRelative(16.489F)
          curveToRelative(0.0F, 2.123F, 2.304F, 3.445F, 4.138F, 2.374F)
          lineToRelative(14.697F, -8.59F)
          curveToRelative(1.552F, -0.907F, 1.552F, -3.15F, 0.0F, -4.057F)
          lineToRelative(-14.697F, -8.59F)
          close()        
      }
    }
    return _play28!!
  }

private var _play28: ImageVector? = null
