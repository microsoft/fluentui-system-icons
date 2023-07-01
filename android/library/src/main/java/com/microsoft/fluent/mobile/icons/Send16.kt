package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Send16: ImageVector
  get() {
    if (_send16 != null) {
      return _send16!!
    }
    _send16 = fluentIcon(name = "Regular.Send16", 16f) {
      materialPath {
          moveTo(1.177F, 1.119F)
          curveToRelative(0.152F, -0.13F, 0.368F, -0.156F, 0.547F, -0.066F)
          lineToRelative(13.0F, 6.5F)
          curveTo(14.893F, 7.638F, 15.0F, 7.81F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.107F, 0.363F, -0.276F, 0.447F)
          lineToRelative(-13.0F, 6.5F)
          curveToRelative(-0.18F, 0.09F, -0.395F, 0.064F, -0.547F, -0.065F)
          curveToRelative(-0.153F, -0.13F, -0.214F, -0.338F, -0.155F, -0.529F)
          lineTo(2.977F, 8.0F)
          lineTo(1.022F, 1.647F)
          curveToRelative(-0.059F, -0.191F, 0.002F, -0.4F, 0.155F, -0.528F)
          close()
          moveTo(3.869F, 8.5F)
          lineToRelative(-1.548F, 5.03F)
          lineTo(13.383F, 8.0F)
          lineTo(2.322F, 2.47F)
          lineTo(3.869F, 7.5F)
          horizontalLineTo(9.5F)
          curveTo(9.776F, 7.5F, 10.0F, 7.724F, 10.0F, 8.0F)
          reflectiveCurveTo(9.776F, 8.5F, 9.5F, 8.5F)
          horizontalLineTo(3.87F)
          close()        
      }
    }
    return _send16!!
  }

private var _send16: ImageVector? = null
