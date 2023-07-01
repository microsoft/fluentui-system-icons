package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow20: ImageVector
  get() {
    if (_locationArrow20 != null) {
      return _locationArrow20!!
    }
    _locationArrow20 = fluentIcon(name = "Regular.LocationArrow20", 20f) {
      materialPath {
          moveTo(17.93F, 3.362F)
          curveToRelative(0.31F, -0.81F, -0.484F, -1.604F, -1.293F, -1.293F)
          lineTo(2.64F, 7.453F)
          curveTo(1.734F, 7.8F, 1.806F, 9.106F, 2.745F, 9.353F)
          lineToRelative(5.973F, 1.572F)
          curveToRelative(0.174F, 0.046F, 0.31F, 0.182F, 0.356F, 0.356F)
          lineToRelative(1.572F, 5.973F)
          curveToRelative(0.247F, 0.94F, 1.552F, 1.01F, 1.9F, 0.105F)
          lineTo(17.93F, 3.362F)
          close()
          moveToRelative(-0.934F, -0.36F)
          lineTo(11.613F, 17.0F)
          lineToRelative(-1.572F, -5.973F)
          curveToRelative(-0.138F, -0.523F, -0.546F, -0.931F, -1.069F, -1.069F)
          lineTo(3.0F, 8.386F)
          lineToRelative(13.997F, -5.383F)
          close()        
      }
    }
    return _locationArrow20!!
  }

private var _locationArrow20: ImageVector? = null
