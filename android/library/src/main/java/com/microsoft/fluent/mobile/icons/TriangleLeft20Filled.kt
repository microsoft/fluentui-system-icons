package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleLeft20: ImageVector
  get() {
    if (_triangleLeft20 != null) {
      return _triangleLeft20!!
    }
    _triangleLeft20 = fluentIcon(name = "Filled.TriangleLeft20", 20f) {
      materialPath {
          moveTo(2.786F, 8.68F)
          curveToRelative(-1.048F, 0.568F, -1.048F, 2.07F, 0.0F, 2.638F)
          lineToRelative(11.998F, 6.5F)
          curveToRelative(1.0F, 0.541F, 2.215F, -0.183F, 2.215F, -1.32F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -1.137F, -1.215F, -1.86F, -2.215F, -1.32F)
          lineTo(2.786F, 8.68F)
          close()        
      }
    }
    return _triangleLeft20!!
  }

private var _triangleLeft20: ImageVector? = null
