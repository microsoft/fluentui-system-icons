package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow12: ImageVector
  get() {
    if (_locationArrow12 != null) {
      return _locationArrow12!!
    }
    _locationArrow12 = fluentIcon(name = "Filled.LocationArrow12", 12f) {
      materialPath {
          moveTo(9.64F, 1.069F)
          curveToRelative(0.808F, -0.311F, 1.603F, 0.484F, 1.292F, 1.292F)
          lineToRelative(-3.076F, 7.997F)
          curveToRelative(-0.349F, 0.906F, -1.654F, 0.835F, -1.9F, -0.104F)
          lineToRelative(-0.803F, -3.05F)
          curveTo(5.107F, 7.03F, 4.97F, 6.894F, 4.796F, 6.848F)
          lineToRelative(-3.05F, -0.803F)
          curveToRelative(-0.938F, -0.247F, -1.01F, -1.552F, -0.104F, -1.9F)
          lineTo(9.64F, 1.069F)
          close()        
      }
    }
    return _locationArrow12!!
  }

private var _locationArrow12: ImageVector? = null
