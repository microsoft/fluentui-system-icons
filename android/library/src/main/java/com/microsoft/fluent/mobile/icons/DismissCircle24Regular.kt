package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DismissCircle24: ImageVector
  get() {
    if (_dismissCircle24 != null) {
      return _dismissCircle24!!
    }
    _dismissCircle24 = fluentIcon(name = "Regular.DismissCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          close()
          moveToRelative(3.446F, 4.897F)
          lineTo(15.53F, 8.47F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.683F, 0.073F, 0.976F)
          lineTo(15.53F, 9.53F)
          lineTo(13.061F, 12.0F)
          lineToRelative(2.47F, 2.47F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineTo(15.53F, 15.53F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(14.47F, 15.53F)
          lineTo(12.0F, 13.061F)
          lineToRelative(-2.47F, 2.47F)
          curveToRelative(-0.266F, 0.266F, -0.683F, 0.29F, -0.976F, 0.072F)
          lineTo(8.47F, 15.53F)
          curveToRelative(-0.267F, -0.266F, -0.29F, -0.683F, -0.073F, -0.976F)
          lineTo(8.47F, 14.47F)
          lineTo(10.939F, 12.0F)
          lineToRelative(-2.47F, -2.47F)
          curveTo(8.204F, 9.264F, 8.18F, 8.847F, 8.398F, 8.554F)
          lineTo(8.47F, 8.47F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(9.53F, 8.47F)
          lineTo(12.0F, 10.939F)
          lineToRelative(2.47F, -2.47F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.072F)
          close()        
      }
    }
    return _dismissCircle24!!
  }

private var _dismissCircle24: ImageVector? = null
