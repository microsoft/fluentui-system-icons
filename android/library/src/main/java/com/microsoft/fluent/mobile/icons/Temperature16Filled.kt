package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Temperature16: ImageVector
  get() {
    if (_temperature16 != null) {
      return _temperature16!!
    }
    _temperature16 = fluentIcon(name = "Filled.Temperature16", 16f) {
      materialPath {
          moveTo(4.5F, 3.5F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.656F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(5.354F)
          curveToRelative(0.622F, 0.705F, 1.0F, 1.632F, 1.0F, 2.646F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          curveToRelative(0.0F, -1.014F, 0.378F, -1.941F, 1.0F, -2.646F)
          verticalLineTo(3.5F)
          close()
          moveToRelative(3.0F, -1.5F)
          curveTo(6.67F, 2.0F, 6.0F, 2.671F, 6.0F, 3.5F)
          verticalLineToRelative(5.975F)
          lineToRelative(-0.23F, 0.22F)
          curveTo(5.293F, 10.153F, 5.0F, 10.792F, 5.0F, 11.5F)
          curveTo(5.0F, 12.88F, 6.12F, 14.0F, 7.5F, 14.0F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          curveToRelative(0.0F, -0.71F, -0.294F, -1.348F, -0.77F, -1.804F)
          lineTo(9.0F, 9.474F)
          verticalLineTo(3.5F)
          curveTo(9.0F, 2.672F, 8.327F, 2.0F, 7.5F, 2.0F)
          close()
          moveTo(8.0F, 6.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(7.0F, 5.724F, 7.0F, 6.0F)
          verticalLineToRelative(4.085F)
          curveToRelative(-0.583F, 0.206F, -1.0F, 0.762F, -1.0F, 1.415F)
          curveTo(6.0F, 12.328F, 6.67F, 13.0F, 7.5F, 13.0F)
          curveTo(8.328F, 13.0F, 9.0F, 12.328F, 9.0F, 11.5F)
          curveToRelative(0.0F, -0.653F, -0.417F, -1.209F, -1.0F, -1.415F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _temperature16!!
  }

private var _temperature16: ImageVector? = null
