package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Speaker024: ImageVector
  get() {
    if (_speaker024 != null) {
      return _speaker024!!
    }
    _speaker024 = fluentIcon(name = "Regular.Speaker024", 024f) {
      materialPath {
          moveTo(14.704F, 3.44F)
          curveTo(14.895F, 3.667F, 15.0F, 3.953F, 15.0F, 4.248F)
          verticalLineTo(19.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          curveToRelative(-0.296F, 0.0F, -0.582F, -0.105F, -0.808F, -0.296F)
          lineToRelative(-4.967F, -4.206F)
          horizontalLineTo(4.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.008F, -2.25F, -2.25F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(3.725F)
          lineToRelative(4.968F, -4.204F)
          curveToRelative(0.526F, -0.446F, 1.315F, -0.38F, 1.761F, 0.147F)
          close()
          moveTo(13.5F, 4.787F)
          lineToRelative(-4.975F, 4.21F)
          horizontalLineTo(4.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.337F, -0.75F, 0.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(4.275F)
          lineTo(13.5F, 19.21F)
          verticalLineTo(4.787F)
          close()        
      }
    }
    return _speaker024!!
  }

private var _speaker024: ImageVector? = null
