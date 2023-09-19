package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleRight48: ImageVector
  get() {
    if (_triangleRight48 != null) {
      return _triangleRight48!!
    }
    _triangleRight48 = fluentIcon(name = "Regular.TriangleRight48", 48f) {
      materialPath {
          moveTo(39.567F, 25.758F)
          curveToRelative(1.238F, -0.652F, 1.248F, -2.422F, 0.017F, -3.088F)
          lineTo(10.082F, 6.717F)
          curveTo(8.916F, 6.087F, 7.5F, 6.93F, 7.5F, 8.256F)
          verticalLineToRelative(31.487F)
          curveToRelative(0.0F, 1.318F, 1.4F, 2.163F, 2.565F, 1.549F)
          lineToRelative(29.502F, -15.534F)
          close()
          moveToRelative(1.206F, -5.287F)
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
