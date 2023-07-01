package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SwipeRight24: ImageVector
  get() {
    if (_swipeRight24 != null) {
      return _swipeRight24!!
    }
    _swipeRight24 = fluentIcon(name = "Regular.SwipeRight24", 24f) {
      materialPath {
          moveTo(5.997F, 12.0F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.647F, 0.743F)
          lineToRelative(0.102F, 0.007F)
          horizontalLineTo(19.44F)
          lineToRelative(-2.216F, 2.22F)
          curveToRelative(-0.266F, 0.266F, -0.29F, 0.683F, -0.073F, 0.976F)
          lineToRelative(0.073F, 0.084F)
          curveToRelative(0.266F, 0.267F, 0.682F, 0.29F, 0.975F, 0.073F)
          lineToRelative(0.084F, -0.073F)
          lineToRelative(3.497F, -3.5F)
          curveToRelative(0.267F, -0.266F, 0.29F, -0.683F, 0.073F, -0.976F)
          lineTo(21.78F, 11.47F)
          lineToRelative(-3.497F, -3.5F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.265F, 0.266F, -0.29F, 0.683F, -0.072F, 0.976F)
          lineToRelative(0.073F, 0.084F)
          lineToRelative(2.216F, 2.22F)
          horizontalLineTo(6.746F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()
          moveTo(2.0F, 12.0F)
          curveToRelative(0.0F, 2.761F, 2.237F, 5.0F, 4.996F, 5.0F)
          curveToRelative(2.143F, 0.0F, 3.972F, -1.351F, 4.68F, -3.25F)
          horizontalLineToRelative(-1.651F)
          curveTo(9.42F, 14.797F, 8.29F, 15.5F, 6.995F, 15.5F)
          curveTo(5.066F, 15.5F, 3.5F, 13.933F, 3.5F, 12.0F)
          reflectiveCurveToRelative(1.565F, -3.5F, 3.497F, -3.5F)
          curveToRelative(1.294F, 0.0F, 2.425F, 0.704F, 3.03F, 1.75F)
          horizontalLineToRelative(1.651F)
          curveTo(10.968F, 8.352F, 9.14F, 7.0F, 6.996F, 7.0F)
          curveTo(4.236F, 7.0F, 2.0F, 9.239F, 2.0F, 12.0F)
          close()        
      }
    }
    return _swipeRight24!!
  }

private var _swipeRight24: ImageVector? = null
