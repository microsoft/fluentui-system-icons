package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PauseCircle24: ImageVector
  get() {
    if (_pauseCircle24 != null) {
      return _pauseCircle24!!
    }
    _pauseCircle24 = fluentIcon(name = "Filled.PauseCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(-1.5F, 6.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.0F, 16.164F, 9.0F, 15.75F)
          verticalLineToRelative(-7.5F)
          curveTo(9.0F, 7.836F, 9.336F, 7.5F, 9.75F, 7.5F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveToRelative(4.5F, 0.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-7.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(15.0F, 7.836F, 15.0F, 8.25F)
          close()        
      }
    }
    return _pauseCircle24!!
  }

private var _pauseCircle24: ImageVector? = null
