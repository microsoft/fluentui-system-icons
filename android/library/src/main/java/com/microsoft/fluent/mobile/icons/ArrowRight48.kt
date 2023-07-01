package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight48: ImageVector
  get() {
    if (_arrowRight48 != null) {
      return _arrowRight48!!
    }
    _arrowRight48 = fluentIcon(name = "Filled.ArrowRight48", 48f) {
      materialPath {
          moveTo(3.75F, 24.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(31.835F)
          lineTo(24.698F, 10.32F)
          curveToRelative(-0.59F, -0.581F, -0.598F, -1.531F, -0.018F, -2.122F)
          curveToRelative(0.581F, -0.59F, 1.531F, -0.598F, 2.122F, -0.018F)
          lineToRelative(14.997F, 14.748F)
          lineToRelative(0.009F, 0.009F)
          lineToRelative(0.011F, 0.011F)
          curveToRelative(0.506F, 0.514F, 0.566F, 1.3F, 0.183F, 1.879F)
          curveToRelative(-0.036F, 0.055F, -0.077F, 0.108F, -0.121F, 0.158F)
          curveToRelative(-0.02F, 0.023F, -0.04F, 0.045F, -0.062F, 0.067F)
          lineToRelative(-0.005F, 0.005F)
          lineToRelative(-0.037F, 0.037F)
          lineToRelative(-14.975F, 14.725F)
          curveToRelative(-0.591F, 0.581F, -1.54F, 0.573F, -2.122F, -0.017F)
          curveToRelative(-0.58F, -0.591F, -0.572F, -1.54F, 0.018F, -2.121F)
          lineTo(37.085F, 25.5F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          close()        
      }
    }
    return _arrowRight48!!
  }

private var _arrowRight48: ImageVector? = null
