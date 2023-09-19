package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleLeft48: ImageVector
  get() {
    if (_triangleLeft48 != null) {
      return _triangleLeft48!!
    }
    _triangleLeft48 = fluentIcon(name = "Filled.TriangleLeft48", 48f) {
      materialPath {
          moveTo(7.228F, 27.528F)
          curveToRelative(-2.99F, -1.617F, -2.966F, -5.915F, 0.042F, -7.499F)
          lineTo(36.772F, 4.495F)
          curveToRelative(2.83F, -1.49F, 6.23F, 0.562F, 6.23F, 3.76F)
          verticalLineToRelative(31.488F)
          curveToRelative(0.0F, 3.22F, -3.44F, 5.27F, -6.272F, 3.739F)
          lineTo(7.228F, 27.528F)
          close()        
      }
    }
    return _triangleLeft48!!
  }

private var _triangleLeft48: ImageVector? = null
