package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Important16: ImageVector
  get() {
    if (_important16 != null) {
      return _important16!!
    }
    _important16 = fluentIcon(name = "Regular.Important16", 16f) {
      materialPath {
          moveTo(8.201F, 8.833F)
          curveTo(8.183F, 8.93F, 8.1F, 9.0F, 8.0F, 9.0F)
          curveTo(7.901F, 9.0F, 7.817F, 8.93F, 7.799F, 8.833F)
          lineToRelative(-0.855F, -4.56F)
          curveTo(6.82F, 3.61F, 7.327F, 3.0F, 8.0F, 3.0F)
          reflectiveCurveToRelative(1.18F, 0.611F, 1.056F, 1.273F)
          lineToRelative(-0.855F, 4.56F)
          close()
          moveTo(8.0F, 2.0F)
          curveTo(6.7F, 2.0F, 5.721F, 3.18F, 5.96F, 4.457F)
          lineToRelative(0.856F, 4.56F)
          curveTo(6.923F, 9.587F, 7.42F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveToRelative(1.077F, -0.413F, 1.184F, -0.983F)
          lineToRelative(0.855F, -4.56F)
          curveTo(10.28F, 3.18F, 9.3F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(0.0F, 11.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(7.724F, 12.0F, 8.0F, 12.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(8.276F, 13.0F, 8.0F, 13.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(8.828F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveTo(7.172F, 14.0F, 8.0F, 14.0F)
          close()        
      }
    }
    return _important16!!
  }

private var _important16: ImageVector? = null
