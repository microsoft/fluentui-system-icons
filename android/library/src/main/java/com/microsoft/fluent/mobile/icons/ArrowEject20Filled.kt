package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowEject20: ImageVector
  get() {
    if (_arrowEject20 != null) {
      return _arrowEject20!!
    }
    _arrowEject20 = fluentIcon(name = "Filled.ArrowEject20", 20f) {
      materialPath {
          moveTo(11.199F, 4.6F)
          curveToRelative(-0.6F, -0.8F, -1.801F, -0.8F, -2.401F, 0.0F)
          lineToRelative(-4.496F, 6.002F)
          curveToRelative(-0.74F, 0.989F, -0.035F, 2.4F, 1.2F, 2.4F)
          horizontalLineToRelative(8.995F)
          curveToRelative(1.236F, 0.0F, 1.941F, -1.412F, 1.2F, -2.4F)
          lineTo(11.199F, 4.6F)
          close()
          moveTo(4.0F, 15.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(3.724F, 16.0F, 4.0F, 16.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.276F, 15.0F, 16.0F, 15.0F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _arrowEject20!!
  }

private var _arrowEject20: ImageVector? = null
