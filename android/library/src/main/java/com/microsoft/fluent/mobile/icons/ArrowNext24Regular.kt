package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowNext24: ImageVector
  get() {
    if (_arrowNext24 != null) {
      return _arrowNext24!!
    }
    _arrowNext24 = fluentIcon(name = "Regular.ArrowNext24", 24f) {
      materialPath {
          moveTo(18.25F, 3.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(19.0F, 3.75F)
          verticalLineToRelative(16.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(17.5F, 20.25F)
          verticalLineTo(3.75F)
          curveTo(17.5F, 3.336F, 17.836F, 3.0F, 18.25F, 3.0F)
          close()
          moveTo(5.22F, 3.22F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(6.28F, 3.22F)
          lineToRelative(8.25F, 8.25F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.683F, 0.073F, 0.976F)
          lineTo(14.53F, 12.53F)
          lineToRelative(-8.25F, 8.25F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.267F, -0.266F, -0.29F, -0.683F, -0.073F, -0.976F)
          lineTo(5.22F, 19.72F)
          lineTo(12.94F, 12.0F)
          lineTo(5.22F, 4.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowNext24!!
  }

private var _arrowNext24: ImageVector? = null
