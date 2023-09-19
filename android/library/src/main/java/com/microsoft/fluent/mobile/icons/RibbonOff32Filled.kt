package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonOff32: ImageVector
  get() {
    if (_ribbonOff32 != null) {
      return _ribbonOff32!!
    }
    _ribbonOff32 = fluentIcon(name = "Filled.RibbonOff32", 32f) {
      materialPath {
          moveTo(6.758F, 8.173F)
          curveTo(6.27F, 9.352F, 6.0F, 10.645F, 6.0F, 12.0F)
          curveToRelative(0.0F, 3.107F, 1.416F, 5.882F, 3.639F, 7.716F)
          curveToRelative(0.118F, 0.098F, 0.238F, 0.193F, 0.36F, 0.285F)
          curveTo(11.672F, 21.256F, 13.75F, 22.0F, 16.0F, 22.0F)
          curveToRelative(1.356F, 0.0F, 2.65F, -0.27F, 3.828F, -0.759F)
          lineToRelative(1.135F, 1.136F)
          curveTo(19.46F, 23.097F, 17.777F, 23.5F, 16.0F, 23.5F)
          curveToRelative(-2.199F, 0.0F, -4.253F, -0.617F, -6.0F, -1.687F)
          verticalLineTo(29.0F)
          curveToRelative(0.0F, 0.36F, 0.194F, 0.693F, 0.507F, 0.87F)
          curveToRelative(0.314F, 0.178F, 0.698F, 0.173F, 1.007F, -0.012F)
          lineTo(16.0F, 27.166F)
          lineToRelative(4.485F, 2.692F)
          curveToRelative(0.31F, 0.185F, 0.694F, 0.19F, 1.008F, 0.012F)
          curveTo(21.805F, 29.693F, 22.0F, 29.36F, 22.0F, 29.0F)
          verticalLineToRelative(-5.586F)
          lineToRelative(6.293F, 6.293F)
          curveToRelative(0.39F, 0.39F, 1.023F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.415F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(4.466F, 4.466F)
          close()
          moveTo(8.7F, 5.166F)
          lineTo(22.834F, 19.3F)
          curveTo(24.782F, 17.475F, 26.0F, 14.88F, 26.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          curveToRelative(-2.88F, 0.0F, -5.476F, 1.217F, -7.3F, 3.166F)
          close()        
      }
    }
    return _ribbonOff32!!
  }

private var _ribbonOff32: ImageVector? = null
