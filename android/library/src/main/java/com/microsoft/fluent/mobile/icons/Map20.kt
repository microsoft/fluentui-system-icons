package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Map20: ImageVector
  get() {
    if (_map20 != null) {
      return _map20!!
    }
    _map20 = fluentIcon(name = "Filled.Map20", 20f) {
      materialPath {
          moveTo(12.0F, 6.04F)
          lineToRelative(-4.0F, -2.8F)
          verticalLineToRelative(10.72F)
          lineToRelative(4.0F, 2.8F)
          verticalLineTo(6.04F)
          close()
          moveToRelative(1.0F, 10.72F)
          lineToRelative(4.787F, -3.35F)
          curveTo(17.92F, 13.316F, 18.0F, 13.163F, 18.0F, 13.0F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -0.186F, -0.104F, -0.357F, -0.27F, -0.443F)
          curveToRelative(-0.165F, -0.087F, -0.364F, -0.074F, -0.517F, 0.033F)
          lineTo(13.0F, 6.04F)
          verticalLineToRelative(10.72F)
          close()
          moveTo(2.213F, 6.59F)
          lineTo(7.0F, 3.24F)
          verticalLineToRelative(10.72F)
          lineToRelative(-4.213F, 2.95F)
          curveToRelative(-0.153F, 0.107F, -0.353F, 0.12F, -0.518F, 0.034F)
          curveTo(2.104F, 16.857F, 2.0F, 16.686F, 2.0F, 16.5F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.163F, 0.08F, -0.316F, 0.213F, -0.41F)
          close()        
      }
    }
    return _map20!!
  }

private var _map20: ImageVector? = null
