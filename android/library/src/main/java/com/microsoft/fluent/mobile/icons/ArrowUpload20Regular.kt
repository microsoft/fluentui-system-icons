package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpload20: ImageVector
  get() {
    if (_arrowUpload20 != null) {
      return _arrowUpload20!!
    }
    _arrowUpload20 = fluentIcon(name = "Regular.ArrowUpload20", 20f) {
      materialPath {
          moveTo(15.0F, 3.002F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.245F, -0.177F, -0.45F, -0.41F, -0.492F)
          lineTo(15.0F, 2.002F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          curveToRelative(0.0F, 0.245F, 0.177F, 0.45F, 0.41F, 0.492F)
          lineTo(4.0F, 3.002F)
          horizontalLineToRelative(11.0F)
          close()
          moveTo(9.5F, 18.0F)
          curveToRelative(0.246F, 0.0F, 0.45F, -0.177F, 0.492F, -0.41F)
          lineTo(10.0F, 17.5F)
          lineTo(9.996F, 5.706F)
          lineToRelative(3.645F, 3.648F)
          curveToRelative(0.174F, 0.174F, 0.443F, 0.193F, 0.638F, 0.059F)
          lineToRelative(0.07F, -0.058F)
          curveToRelative(0.173F, -0.174F, 0.193F, -0.443F, 0.058F, -0.638F)
          lineToRelative(-0.058F, -0.07F)
          lineToRelative(-4.492F, -4.5F)
          curveTo(9.785F, 4.076F, 9.696F, 4.03F, 9.602F, 4.012F)
          lineTo(9.496F, 4.0F)
          curveTo(9.336F, 4.0F, 9.192F, 4.077F, 9.1F, 4.195F)
          lineTo(4.644F, 8.647F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.173F, 0.174F, 0.442F, 0.193F, 0.637F, 0.059F)
          lineToRelative(0.07F, -0.058F)
          lineToRelative(3.645F, -3.641F)
          lineTo(9.0F, 17.5F)
          curveTo(9.0F, 17.776F, 9.224F, 18.0F, 9.5F, 18.0F)
          close()        
      }
    }
    return _arrowUpload20!!
  }

private var _arrowUpload20: ImageVector? = null
