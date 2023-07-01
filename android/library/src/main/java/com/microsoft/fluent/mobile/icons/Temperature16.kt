package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Temperature16: ImageVector
  get() {
    if (_temperature16 != null) {
      return _temperature16!!
    }
    _temperature16 = fluentIcon(name = "Regular.Temperature16", 16f) {
      materialPath {
          moveTo(5.0F, 3.5F)
          curveTo(5.0F, 2.12F, 6.12F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(10.0F, 2.12F, 10.0F, 3.5F)
          verticalLineToRelative(5.45F)
          curveToRelative(0.618F, 0.631F, 1.0F, 1.496F, 1.0F, 2.45F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(4.0F, 13.333F, 4.0F, 11.4F)
          curveToRelative(0.0F, -0.954F, 0.382F, -1.819F, 1.0F, -2.45F)
          verticalLineTo(3.5F)
          close()
          moveTo(7.5F, 2.0F)
          curveTo(6.67F, 2.0F, 6.0F, 2.671F, 6.0F, 3.5F)
          verticalLineToRelative(5.887F)
          lineToRelative(-0.166F, 0.15F)
          curveTo(5.32F, 9.994F, 5.0F, 10.658F, 5.0F, 11.4F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          curveToRelative(0.0F, -0.74F, -0.321F, -1.405F, -0.833F, -1.864F)
          lineTo(9.0F, 9.388F)
          verticalLineTo(3.5F)
          curveTo(9.0F, 2.672F, 8.328F, 2.0F, 7.5F, 2.0F)
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
