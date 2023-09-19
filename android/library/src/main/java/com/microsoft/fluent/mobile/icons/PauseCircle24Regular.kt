package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PauseCircle24: ImageVector
  get() {
    if (_pauseCircle24 != null) {
      return _pauseCircle24!!
    }
    _pauseCircle24 = fluentIcon(name = "Regular.PauseCircle24", 24f) {
      materialPath {
          moveTo(10.5F, 8.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(9.0F, 7.836F, 9.0F, 8.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-7.5F)
          close()
          moveToRelative(4.5F, 0.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(13.5F, 7.836F, 13.5F, 8.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(15.0F, 16.164F, 15.0F, 15.75F)
          verticalLineToRelative(-7.5F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveTo(3.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, 3.806F, -8.5F, 8.5F, -8.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          close()        
      }
    }
    return _pauseCircle24!!
  }

private var _pauseCircle24: ImageVector? = null
