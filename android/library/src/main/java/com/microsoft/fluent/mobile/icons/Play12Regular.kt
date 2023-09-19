package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Play12: ImageVector
  get() {
    if (_play12 != null) {
      return _play12!!
    }
    _play12 = fluentIcon(name = "Regular.Play12", 12f) {
      materialPath {
          moveTo(3.0F, 2.862F)
          curveToRelative(0.0F, -0.768F, 0.83F, -1.25F, 1.496F, -0.868F)
          lineToRelative(5.492F, 3.138F)
          curveToRelative(0.672F, 0.384F, 0.672F, 1.353F, 0.0F, 1.737F)
          lineToRelative(-5.492F, 3.138F)
          curveTo(3.83F, 10.387F, 3.0F, 9.907F, 3.0F, 9.139F)
          verticalLineTo(2.862F)
          close()
          moveTo(9.492F, 6.0F)
          lineTo(4.0F, 2.862F)
          verticalLineToRelative(6.277F)
          lineTo(9.492F, 6.0F)
          close()        
      }
    }
    return _play12!!
  }

private var _play12: ImageVector? = null
