package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipVertical28: ImageVector
  get() {
    if (_flipVertical28 != null) {
      return _flipVertical28!!
    }
    _flipVertical28 = fluentIcon(name = "Regular.FlipVertical28", 28f) {
      materialPath {
          moveTo(23.654F, 2.118F)
          curveTo(23.869F, 2.256F, 24.0F, 2.494F, 24.0F, 2.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveToRelative(-0.352F, 0.0F, -0.657F, -0.245F, -0.732F, -0.588F)
          curveToRelative(-0.076F, -0.344F, 0.097F, -0.695F, 0.417F, -0.843F)
          lineToRelative(20.5F, -9.5F)
          curveToRelative(0.232F, -0.107F, 0.503F, -0.089F, 0.719F, 0.049F)
          close()
          moveTo(6.152F, 11.5F)
          horizontalLineTo(22.5F)
          verticalLineTo(3.924F)
          lineTo(6.152F, 11.5F)
          close()
          moveTo(24.0F, 25.25F)
          curveToRelative(0.0F, 0.256F, -0.13F, 0.494F, -0.346F, 0.632F)
          curveToRelative(-0.216F, 0.138F, -0.487F, 0.156F, -0.719F, 0.048F)
          lineToRelative(-20.5F, -9.5F)
          curveToRelative(-0.32F, -0.148F, -0.493F, -0.498F, -0.417F, -0.841F)
          curveTo(2.094F, 15.245F, 2.398F, 15.0F, 2.75F, 15.0F)
          horizontalLineToRelative(20.5F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(9.5F)
          close()        
      }
    }
    return _flipVertical28!!
  }

private var _flipVertical28: ImageVector? = null
