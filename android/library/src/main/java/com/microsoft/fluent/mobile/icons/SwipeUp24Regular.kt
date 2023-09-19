package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SwipeUp24: ImageVector
  get() {
    if (_swipeUp24 != null) {
      return _swipeUp24!!
    }
    _swipeUp24 = fluentIcon(name = "Regular.SwipeUp24", 24f) {
      materialPath {
          moveTo(12.0F, 18.003F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.647F)
          lineToRelative(0.007F, -0.102F)
          verticalLineTo(4.56F)
          lineToRelative(2.22F, 2.216F)
          curveToRelative(0.266F, 0.266F, 0.683F, 0.29F, 0.976F, 0.073F)
          lineToRelative(0.084F, -0.073F)
          curveToRelative(0.267F, -0.266F, 0.29F, -0.682F, 0.073F, -0.975F)
          lineTo(16.03F, 5.716F)
          lineToRelative(-3.5F, -3.497F)
          curveToRelative(-0.266F, -0.266F, -0.683F, -0.29F, -0.976F, -0.072F)
          lineTo(11.47F, 2.22F)
          lineToRelative(-3.5F, 3.496F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.266F, 0.266F, 0.683F, 0.29F, 0.976F, 0.073F)
          lineTo(9.03F, 6.776F)
          lineToRelative(2.22F, -2.216F)
          verticalLineToRelative(12.694F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          close()
          moveTo(12.0F, 22.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.237F, 5.0F, -4.996F)
          curveToRelative(0.0F, -2.143F, -1.351F, -3.972F, -3.25F, -4.68F)
          verticalLineToRelative(1.651F)
          curveToRelative(1.046F, 0.605F, 1.75F, 1.735F, 1.75F, 3.03F)
          curveToRelative(0.0F, 1.93F, -1.567F, 3.496F, -3.5F, 3.496F)
          reflectiveCurveToRelative(-3.5F, -1.565F, -3.5F, -3.497F)
          curveToRelative(0.0F, -1.294F, 0.704F, -2.425F, 1.75F, -3.03F)
          verticalLineToRelative(-1.651F)
          curveTo(8.352F, 13.032F, 7.0F, 14.86F, 7.0F, 17.004F)
          curveTo(7.0F, 19.764F, 9.239F, 22.0F, 12.0F, 22.0F)
          close()        
      }
    }
    return _swipeUp24!!
  }

private var _swipeUp24: ImageVector? = null
