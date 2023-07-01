package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SwipeDown24: ImageVector
  get() {
    if (_swipeDown24 != null) {
      return _swipeDown24!!
    }
    _swipeDown24 = fluentIcon(name = "Regular.SwipeDown24", 24f) {
      materialPath {
          moveTo(12.0F, 5.997F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.647F)
          lineToRelative(0.007F, 0.102F)
          verticalLineTo(19.44F)
          lineToRelative(2.22F, -2.216F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.084F, 0.073F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.682F, 0.073F, 0.975F)
          lineToRelative(-0.073F, 0.084F)
          lineToRelative(-3.5F, 3.497F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(11.47F, 21.78F)
          lineToRelative(-3.5F, -3.497F)
          curveToRelative(-0.293F, -0.292F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.266F, -0.265F, 0.683F, -0.29F, 0.976F, -0.072F)
          lineToRelative(0.084F, 0.073F)
          lineToRelative(2.22F, 2.216F)
          verticalLineTo(6.746F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(12.0F, 2.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.237F, 5.0F, 4.996F)
          curveToRelative(0.0F, 2.143F, -1.351F, 3.972F, -3.25F, 4.68F)
          verticalLineToRelative(-1.651F)
          curveToRelative(1.046F, -0.605F, 1.75F, -1.735F, 1.75F, -3.03F)
          curveToRelative(0.0F, -1.93F, -1.567F, -3.496F, -3.5F, -3.496F)
          reflectiveCurveTo(8.5F, 5.064F, 8.5F, 6.996F)
          curveToRelative(0.0F, 1.294F, 0.704F, 2.425F, 1.75F, 3.03F)
          verticalLineToRelative(1.651F)
          curveTo(8.352F, 10.968F, 7.0F, 9.14F, 7.0F, 6.996F)
          curveTo(7.0F, 4.236F, 9.239F, 2.0F, 12.0F, 2.0F)
          close()        
      }
    }
    return _swipeDown24!!
  }

private var _swipeDown24: ImageVector? = null
