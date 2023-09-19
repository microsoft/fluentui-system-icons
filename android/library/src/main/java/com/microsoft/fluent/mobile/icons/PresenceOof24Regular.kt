package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOof24: ImageVector
  get() {
    if (_presenceOof24 != null) {
      return _presenceOof24!!
    }
    _presenceOof24 = fluentIcon(name = "Regular.PresenceOof24", 24f) {
      materialPath {
          moveTo(12.562F, 9.057F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          curveToRelative(-0.585F, -0.585F, -1.535F, -0.585F, -2.121F, 0.0F)
          lineTo(6.437F, 10.94F)
          curveToRelative(-0.586F, 0.585F, -0.586F, 1.535F, 0.0F, 2.12F)
          lineToRelative(4.004F, 4.005F)
          curveToRelative(0.586F, 0.586F, 1.536F, 0.586F, 2.121F, 0.0F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.121F)
          lineTo(11.12F, 13.5F)
          horizontalLineToRelative(5.38F)
          curveToRelative(0.83F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.67F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-5.38F)
          lineToRelative(1.443F, -1.443F)
          close()
          moveTo(12.0F, 0.0F)
          curveTo(5.373F, 0.0F, 0.0F, 5.373F, 0.0F, 12.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(18.627F, 0.0F, 12.0F, 0.0F)
          close()
          moveTo(3.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          reflectiveCurveToRelative(9.0F, 4.03F, 9.0F, 9.0F)
          reflectiveCurveToRelative(-4.03F, 9.0F, -9.0F, 9.0F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          close()        
      }
    }
    return _presenceOof24!!
  }

private var _presenceOof24: ImageVector? = null
