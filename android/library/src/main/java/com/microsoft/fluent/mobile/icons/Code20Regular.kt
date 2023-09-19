package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Code20: ImageVector
  get() {
    if (_code20 != null) {
      return _code20!!
    }
    _code20 = fluentIcon(name = "Regular.Code20", 20f) {
      materialPath {
          moveTo(12.967F, 3.68F)
          curveToRelative(0.099F, -0.258F, -0.03F, -0.547F, -0.287F, -0.647F)
          curveToRelative(-0.258F, -0.099F, -0.547F, 0.03F, -0.647F, 0.288F)
          lineToRelative(-5.0F, 13.0F)
          curveToRelative(-0.099F, 0.257F, 0.03F, 0.547F, 0.287F, 0.646F)
          curveToRelative(0.258F, 0.099F, 0.548F, -0.03F, 0.647F, -0.287F)
          lineToRelative(5.0F, -13.0F)
          close()
          moveTo(5.825F, 6.12F)
          curveTo(6.035F, 6.3F, 6.06F, 6.617F, 5.88F, 6.825F)
          lineTo(3.159F, 10.0F)
          lineToRelative(2.72F, 3.175F)
          curveToRelative(0.18F, 0.21F, 0.156F, 0.525F, -0.054F, 0.705F)
          curveToRelative(-0.21F, 0.18F, -0.525F, 0.155F, -0.705F, -0.055F)
          lineToRelative(-3.0F, -3.5F)
          curveToRelative(-0.16F, -0.187F, -0.16F, -0.463F, 0.0F, -0.65F)
          lineToRelative(3.0F, -3.5F)
          curveTo(5.3F, 5.965F, 5.616F, 5.94F, 5.825F, 6.12F)
          close()
          moveToRelative(8.35F, 8.26F)
          curveToRelative(-0.21F, -0.18F, -0.234F, -0.496F, -0.055F, -0.705F)
          lineToRelative(2.722F, -3.175F)
          lineToRelative(-2.722F, -3.175F)
          curveToRelative(-0.18F, -0.21F, -0.155F, -0.525F, 0.055F, -0.705F)
          curveToRelative(0.21F, -0.18F, 0.525F, -0.155F, 0.705F, 0.055F)
          lineToRelative(3.0F, 3.5F)
          curveToRelative(0.16F, 0.187F, 0.16F, 0.463F, 0.0F, 0.65F)
          lineToRelative(-3.0F, 3.5F)
          curveToRelative(-0.18F, 0.21F, -0.496F, 0.235F, -0.705F, 0.055F)
          close()        
      }
    }
    return _code20!!
  }

private var _code20: ImageVector? = null
