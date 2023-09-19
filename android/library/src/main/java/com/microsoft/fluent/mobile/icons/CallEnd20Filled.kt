package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CallEnd20: ImageVector
  get() {
    if (_callEnd20 != null) {
      return _callEnd20!!
    }
    _callEnd20 = fluentIcon(name = "Filled.CallEnd20", 20f) {
      materialPath {
          moveTo(17.96F, 10.94F)
          lineToRelative(-0.16F, 0.83F)
          curveToRelative(-0.147F, 0.776F, -0.874F, 1.298F, -1.697F, 1.218F)
          lineToRelative(-1.637F, -0.158F)
          curveToRelative(-0.714F, -0.069F, -1.243F, -0.59F, -1.467F, -1.33F)
          curveToRelative(-0.304F, -1.005F, -0.5F, -1.75F, -0.5F, -1.75F)
          curveToRelative(-0.748F, -0.306F, -1.486F, -0.5F, -2.5F, -0.5F)
          reflectiveCurveToRelative(-1.738F, 0.215F, -2.5F, 0.5F)
          curveToRelative(0.0F, 0.0F, -0.204F, 0.746F, -0.5F, 1.75F)
          curveToRelative(-0.198F, 0.67F, -0.504F, 1.257F, -1.203F, 1.327F)
          lineTo(4.17F, 12.99F)
          curveToRelative(-0.812F, 0.081F, -1.591F, -0.436F, -1.822F, -1.21F)
          lineTo(2.1F, 10.951F)
          curveToRelative(-0.246F, -0.825F, -0.026F, -1.693F, 0.577F, -2.28F)
          curveToRelative(1.425F, -1.384F, 3.99F, -2.164F, 7.316F, -2.168F)
          curveToRelative(3.332F, -0.004F, 5.594F, 0.772F, 7.162F, 2.156F)
          curveToRelative(0.66F, 0.582F, 0.962F, 1.458F, 0.805F, 2.28F)
          close()        
      }
    }
    return _callEnd20!!
  }

private var _callEnd20: ImageVector? = null
