package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LeafOne20: ImageVector
  get() {
    if (_leafOne20 != null) {
      return _leafOne20!!
    }
    _leafOne20 = fluentIcon(name = "Filled.LeafOne20", 20f) {
      materialPath {
          moveTo(11.072F, 2.462F)
          curveToRelative(-0.588F, -0.6F, -1.556F, -0.6F, -2.144F, 0.0F)
          lineTo(5.691F, 5.77F)
          curveTo(3.38F, 8.131F, 3.4F, 11.913F, 5.737F, 14.25F)
          lineToRelative(0.011F, 0.012F)
          lineToRelative(0.01F, 0.009F)
          curveToRelative(1.044F, 1.044F, 2.377F, 1.623F, 3.742F, 1.736F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.491F)
          curveToRelative(1.365F, -0.114F, 2.698F, -0.693F, 3.743F, -1.737F)
          lineToRelative(0.009F, -0.01F)
          lineToRelative(0.011F, -0.01F)
          curveToRelative(2.337F, -2.338F, 2.357F, -6.12F, 0.046F, -8.482F)
          lineToRelative(-3.237F, -3.307F)
          close()
          moveTo(10.5F, 14.992F)
          curveToRelative(-0.332F, 0.032F, -0.668F, 0.032F, -1.0F, 0.0F)
          verticalLineTo(9.498F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(5.492F)
          close()        
      }
    }
    return _leafOne20!!
  }

private var _leafOne20: ImageVector? = null
