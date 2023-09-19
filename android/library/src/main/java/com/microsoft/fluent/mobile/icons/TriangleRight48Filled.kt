package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleRight48: ImageVector
  get() {
    if (_triangleRight48 != null) {
      return _triangleRight48!!
    }
    _triangleRight48 = fluentIcon(name = "Filled.TriangleRight48", 48f) {
      materialPath {
          moveTo(40.773F, 20.471F)
          curveToRelative(2.99F, 1.617F, 2.966F, 5.916F, -0.041F, 7.5F)
          lineTo(11.23F, 43.503F)
          curveTo(8.4F, 44.994F, 5.0F, 42.942F, 5.0F, 39.744F)
          verticalLineTo(8.255F)
          curveToRelative(0.0F, -3.22F, 3.44F, -5.27F, 6.272F, -3.738F)
          lineTo(40.773F, 20.47F)
          close()        
      }
    }
    return _triangleRight48!!
  }

private var _triangleRight48: ImageVector? = null
