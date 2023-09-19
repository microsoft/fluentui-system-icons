package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Play28: ImageVector
  get() {
    if (_play28 != null) {
      return _play28!!
    }
    _play28 = fluentIcon(name = "Regular.Play28", 28f) {
      materialPath {
          moveTo(9.38F, 4.677F)
          curveTo(8.548F, 4.19F, 7.5F, 4.79F, 7.5F, 5.757F)
          verticalLineToRelative(16.488F)
          curveToRelative(0.0F, 0.965F, 1.047F, 1.566F, 1.88F, 1.079F)
          lineToRelative(14.698F, -8.59F)
          curveToRelative(0.561F, -0.328F, 0.561F, -1.14F, 0.0F, -1.467F)
          lineTo(9.381F, 4.677F)
          close()
          moveTo(6.0F, 5.757F)
          curveToRelative(0.0F, -2.124F, 2.304F, -3.447F, 4.138F, -2.375F)
          lineToRelative(14.697F, 8.59F)
          curveToRelative(1.552F, 0.907F, 1.552F, 3.15F, 0.0F, 4.057F)
          lineToRelative(-14.697F, 8.59F)
          curveTo(8.304F, 25.691F, 6.0F, 24.369F, 6.0F, 22.245F)
          verticalLineTo(5.756F)
          close()        
      }
    }
    return _play28!!
  }

private var _play28: ImageVector? = null
