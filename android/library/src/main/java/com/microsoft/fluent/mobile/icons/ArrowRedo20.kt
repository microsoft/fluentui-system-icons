package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRedo20: ImageVector
  get() {
    if (_arrowRedo20 != null) {
      return _arrowRedo20!!
    }
    _arrowRedo20 = fluentIcon(name = "Regular.ArrowRedo20", 20f) {
      materialPath {
          moveTo(15.003F, 2.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(4.9F)
          curveToRelative(0.0F, 0.331F, -0.269F, 0.6F, -0.6F, 0.6F)
          horizontalLineToRelative(-4.9F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(3.594F)
          lineToRelative(-3.473F, -3.019F)
          curveTo(8.957F, 2.531F, 6.431F, 2.71F, 4.981F, 4.376F)
          curveTo(3.531F, 6.043F, 3.71F, 8.57F, 5.376F, 10.019F)
          lineToRelative(8.172F, 7.104F)
          curveToRelative(0.208F, 0.18F, 0.23F, 0.497F, 0.05F, 0.705F)
          curveToRelative(-0.182F, 0.208F, -0.498F, 0.23F, -0.706F, 0.05F)
          lineTo(4.72F, 10.773F)
          curveTo(2.636F, 8.962F, 2.415F, 5.804F, 4.226F, 3.72F)
          curveToRelative(1.812F, -2.084F, 4.97F, -2.305F, 7.054F, -0.494F)
          lineToRelative(3.723F, 3.237F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _arrowRedo20!!
  }

private var _arrowRedo20: ImageVector? = null
