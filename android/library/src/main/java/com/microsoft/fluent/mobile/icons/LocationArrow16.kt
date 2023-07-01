package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow16: ImageVector
  get() {
    if (_locationArrow16 != null) {
      return _locationArrow16!!
    }
    _locationArrow16 = fluentIcon(name = "Regular.LocationArrow16", 16f) {
      materialPath {
          moveTo(13.93F, 3.362F)
          curveToRelative(0.31F, -0.81F, -0.484F, -1.604F, -1.293F, -1.293F)
          lineTo(2.64F, 5.915F)
          curveToRelative(-0.906F, 0.348F, -0.834F, 1.653F, 0.105F, 1.9F)
          lineToRelative(4.024F, 1.06F)
          curveTo(6.943F, 8.92F, 7.078F, 9.055F, 7.125F, 9.23F)
          lineToRelative(1.059F, 4.024F)
          curveToRelative(0.247F, 0.94F, 1.552F, 1.01F, 1.9F, 0.105F)
          lineToRelative(3.846F, -9.998F)
          close()
          moveToRelative(-0.934F, -0.36F)
          lineToRelative(-3.845F, 9.999F)
          lineToRelative(-1.06F, -4.025F)
          curveTo(7.955F, 8.453F, 7.547F, 8.045F, 7.024F, 7.907F)
          lineTo(2.998F, 6.848F)
          lineToRelative(9.998F, -3.845F)
          close()        
      }
    }
    return _locationArrow16!!
  }

private var _locationArrow16: ImageVector? = null
