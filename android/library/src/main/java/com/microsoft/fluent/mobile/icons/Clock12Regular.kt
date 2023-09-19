package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Clock12: ImageVector
  get() {
    if (_clock12 != null) {
      return _clock12!!
    }
    _clock12 = fluentIcon(name = "Regular.Clock12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(3.79F, 2.0F, 2.0F, 3.79F, 2.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveTo(5.5F, 3.5F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(6.0F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.5F)
          curveTo(7.776F, 6.0F, 8.0F, 6.224F, 8.0F, 6.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(7.5F, 7.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(5.255F, 7.0F, 5.05F, 6.823F, 5.008F, 6.59F)
          lineTo(5.0F, 6.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _clock12!!
  }

private var _clock12: ImageVector? = null
