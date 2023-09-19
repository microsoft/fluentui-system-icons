package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Play16: ImageVector
  get() {
    if (_play16 != null) {
      return _play16!!
    }
    _play16 = fluentIcon(name = "Regular.Play16", 16f) {
      materialPath {
          moveTo(5.745F, 3.064F)
          curveTo(5.412F, 2.877F, 5.0F, 3.118F, 5.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.383F, 0.412F, 0.624F, 0.745F, 0.436F)
          lineToRelative(8.0F, -4.5F)
          curveToRelative(0.34F, -0.19F, 0.34F, -0.68F, 0.0F, -0.871F)
          lineToRelative(-8.0F, -4.5F)
          close()
          moveTo(4.0F, 3.5F)
          curveToRelative(0.0F, -1.147F, 1.236F, -1.87F, 2.235F, -1.307F)
          lineToRelative(8.0F, 4.5F)
          curveToRelative(1.02F, 0.574F, 1.02F, 2.042F, 0.0F, 2.615F)
          lineToRelative(-8.0F, 4.5F)
          curveTo(5.235F, 14.37F, 4.0F, 13.648F, 4.0F, 12.5F)
          verticalLineToRelative(-9.0F)
          close()        
      }
    }
    return _play16!!
  }

private var _play16: ImageVector? = null
