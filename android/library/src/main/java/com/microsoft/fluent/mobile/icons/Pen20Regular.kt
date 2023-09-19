package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pen20: ImageVector
  get() {
    if (_pen20 != null) {
      return _pen20!!
    }
    _pen20 = fluentIcon(name = "Regular.Pen20", 20f) {
      materialPath {
          moveTo(17.18F, 2.926F)
          curveToRelative(-1.153F, -1.212F, -3.077F, -1.236F, -4.26F, -0.054F)
          lineToRelative(-9.375F, 9.375F)
          curveTo(3.218F, 12.574F, 2.99F, 12.989F, 2.89F, 13.44F)
          lineToRelative(-0.878F, 3.95F)
          curveToRelative(-0.037F, 0.167F, 0.014F, 0.342F, 0.135F, 0.462F)
          curveToRelative(0.12F, 0.121F, 0.295F, 0.172F, 0.462F, 0.135F)
          lineToRelative(3.926F, -0.873F)
          curveToRelative(0.467F, -0.104F, 0.896F, -0.34F, 1.234F, -0.678F)
          lineToRelative(7.98F, -7.98F)
          lineToRelative(0.337F, 0.336F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.023F, 0.0F, 1.414F)
          lineToRelative(-0.94F, 0.94F)
          curveToRelative(-0.195F, 0.194F, -0.195F, 0.511F, 0.0F, 0.706F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineToRelative(0.939F, -0.94F)
          curveToRelative(0.78F, -0.78F, 0.78F, -2.046F, 0.0F, -2.828F)
          lineTo(16.457F, 7.75F)
          lineToRelative(0.67F, -0.67F)
          curveToRelative(1.141F, -1.141F, 1.164F, -2.984F, 0.052F, -4.153F)
          close()
          moveToRelative(-3.553F, 0.653F)
          curveToRelative(0.785F, -0.785F, 2.063F, -0.768F, 2.828F, 0.036F)
          curveToRelative(0.738F, 0.776F, 0.722F, 2.0F, -0.035F, 2.757F)
          lineTo(7.062F, 15.73F)
          curveToRelative(-0.204F, 0.204F, -0.462F, 0.346F, -0.744F, 0.409F)
          lineToRelative(-3.16F, 0.702F)
          lineToRelative(0.708F, -3.183F)
          curveToRelative(0.059F, -0.266F, 0.193F, -0.511F, 0.387F, -0.704F)
          lineToRelative(9.374F, -9.375F)
          close()        
      }
    }
    return _pen20!!
  }

private var _pen20: ImageVector? = null
