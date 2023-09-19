package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleUp20: ImageVector
  get() {
    if (_triangleUp20 != null) {
      return _triangleUp20!!
    }
    _triangleUp20 = fluentIcon(name = "Filled.TriangleUp20", 20f) {
      materialPath {
          moveTo(11.32F, 2.785F)
          curveToRelative(-0.568F, -1.047F, -2.071F, -1.047F, -2.638F, 0.0F)
          lineToRelative(-6.5F, 12.0F)
          curveToRelative(-0.541F, 0.998F, 0.183F, 2.213F, 1.32F, 2.213F)
          horizontalLineTo(16.5F)
          curveToRelative(1.137F, 0.0F, 1.86F, -1.215F, 1.319F, -2.214F)
          lineToRelative(-6.5F, -11.998F)
          close()        
      }
    }
    return _triangleUp20!!
  }

private var _triangleUp20: ImageVector? = null
