package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleUp20: ImageVector
  get() {
    if (_triangleUp20 != null) {
      return _triangleUp20!!
    }
    _triangleUp20 = fluentIcon(name = "Regular.TriangleUp20", 20f) {
      materialPath {
          moveTo(8.682F, 2.785F)
          curveToRelative(0.567F, -1.047F, 2.07F, -1.047F, 2.637F, 0.0F)
          lineToRelative(6.5F, 12.0F)
          curveToRelative(0.541F, 0.998F, -0.182F, 2.213F, -1.319F, 2.213F)
          horizontalLineTo(3.501F)
          curveToRelative(-1.136F, 0.0F, -1.86F, -1.215F, -1.319F, -2.214F)
          lineToRelative(6.5F, -11.998F)
          close()
          moveToRelative(1.758F, 0.477F)
          curveToRelative(-0.189F, -0.35F, -0.69F, -0.35F, -0.879F, 0.0F)
          lineToRelative(-6.5F, 11.998F)
          curveTo(2.882F, 15.594F, 3.123F, 16.0F, 3.502F, 16.0F)
          horizontalLineTo(16.5F)
          curveToRelative(0.379F, 0.0F, 0.62F, -0.405F, 0.44F, -0.739F)
          lineToRelative(-6.5F, -11.998F)
          close()        
      }
    }
    return _triangleUp20!!
  }

private var _triangleUp20: ImageVector? = null
