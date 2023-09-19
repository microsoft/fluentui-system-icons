package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownload20: ImageVector
  get() {
    if (_arrowDownload20 != null) {
      return _arrowDownload20!!
    }
    _arrowDownload20 = fluentIcon(name = "Regular.ArrowDownload20", 20f) {
      materialPath {
          moveTo(15.5F, 17.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(15.5F, 18.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.224F, 18.0F, 4.0F, 17.776F, 4.0F, 17.5F)
          curveToRelative(0.0F, -0.246F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          close()
          moveTo(10.0F, 2.002F)
          curveToRelative(0.246F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineToRelative(0.008F, 0.09F)
          lineToRelative(-0.004F, 11.794F)
          lineToRelative(3.645F, -3.648F)
          curveToRelative(0.174F, -0.174F, 0.443F, -0.194F, 0.638F, -0.059F)
          lineToRelative(0.07F, 0.058F)
          curveToRelative(0.173F, 0.173F, 0.193F, 0.443F, 0.058F, 0.638F)
          lineToRelative(-0.058F, 0.07F)
          lineToRelative(-4.492F, 4.5F)
          curveToRelative(-0.072F, 0.072F, -0.161F, 0.117F, -0.255F, 0.136F)
          lineToRelative(-0.106F, 0.01F)
          curveToRelative(-0.16F, 0.0F, -0.304F, -0.076F, -0.396F, -0.195F)
          lineToRelative(-4.456F, -4.451F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.173F, -0.174F, 0.442F, -0.194F, 0.637F, -0.059F)
          lineToRelative(0.07F, 0.058F)
          lineToRelative(3.645F, 3.641F)
          lineTo(9.5F, 2.502F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _arrowDownload20!!
  }

private var _arrowDownload20: ImageVector? = null
