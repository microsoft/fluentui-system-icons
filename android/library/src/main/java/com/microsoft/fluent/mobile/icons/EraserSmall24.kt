package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EraserSmall24: ImageVector
  get() {
    if (_eraserSmall24 != null) {
      return _eraserSmall24!!
    }
    _eraserSmall24 = fluentIcon(name = "Filled.EraserSmall24", 24f) {
      materialPath {
          moveTo(12.651F, 2.638F)
          curveToRelative(0.886F, -0.878F, 2.317F, -0.867F, 3.19F, 0.023F)
          lineToRelative(4.91F, 5.008F)
          curveToRelative(0.861F, 0.878F, 0.858F, 2.285F, -0.007F, 3.158F)
          lineToRelative(-2.257F, 2.281F)
          curveTo(18.169F, 13.037F, 17.839F, 13.0F, 17.5F, 13.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, 2.015F, -4.5F, 4.5F)
          curveToRelative(0.0F, 0.356F, 0.041F, 0.701F, 0.119F, 1.033F)
          lineToRelative(-1.784F, 1.803F)
          curveToRelative(-0.872F, 0.88F, -2.292F, 0.891F, -3.176F, 0.023F)
          lineToRelative(-5.1F, -5.008F)
          curveToRelative(-0.895F, -0.879F, -0.898F, -2.32F, -0.006F, -3.204F)
          lineToRelative(9.598F, -9.508F)
          close()
          moveTo(4.108F, 13.212F)
          curveToRelative(-0.297F, 0.294F, -0.296F, 0.775F, 0.003F, 1.068F)
          lineToRelative(5.099F, 5.008F)
          curveToRelative(0.294F, 0.289F, 0.768F, 0.285F, 1.058F, -0.008F)
          lineToRelative(1.468F, -1.483F)
          lineToRelative(-6.099F, -6.1F)
          lineToRelative(-1.529F, 1.515F)
          close()
          moveTo(17.5F, 21.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -1.934F, -1.567F, -3.5F, -3.5F, -3.5F)
          reflectiveCurveTo(14.0F, 15.566F, 14.0F, 17.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          close()        
      }
    }
    return _eraserSmall24!!
  }

private var _eraserSmall24: ImageVector? = null
