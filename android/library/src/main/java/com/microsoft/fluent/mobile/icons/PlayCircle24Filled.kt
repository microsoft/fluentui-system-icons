package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PlayCircle24: ImageVector
  get() {
    if (_playCircle24 != null) {
      return _playCircle24!!
    }
    _playCircle24 = fluentIcon(name = "Filled.PlayCircle24", 24f) {
      materialPath {
          moveTo(2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          close()
          moveToRelative(8.856F, -3.845F)
          curveTo(10.023F, 7.694F, 9.0F, 8.296F, 9.0F, 9.249F)
          verticalLineToRelative(5.503F)
          curveToRelative(0.0F, 0.952F, 1.023F, 1.554F, 1.856F, 1.093F)
          lineToRelative(5.757F, -3.189F)
          curveTo(16.852F, 12.524F, 17.0F, 12.273F, 17.0F, 12.0F)
          reflectiveCurveToRelative(-0.148F, -0.524F, -0.387F, -0.656F)
          lineToRelative(-5.757F, -3.189F)
          close()        
      }
    }
    return _playCircle24!!
  }

private var _playCircle24: ImageVector? = null
