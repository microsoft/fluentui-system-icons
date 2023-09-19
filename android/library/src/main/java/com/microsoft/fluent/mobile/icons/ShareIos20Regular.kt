package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ShareIos20: ImageVector
  get() {
    if (_shareIos20 != null) {
      return _shareIos20!!
    }
    _shareIos20 = fluentIcon(name = "Regular.ShareIos20", 20f) {
      materialPath {
          moveTo(16.0F, 9.5F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(16.5F, 10.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.326F, -1.031F, 2.41F, -2.336F, 2.495F)
          lineTo(14.0F, 18.5F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.325F, 0.0F, -2.41F, -1.032F, -2.495F, -2.336F)
          lineTo(3.5F, 16.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(4.5F, 10.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.78F, 0.595F, 1.42F, 1.356F, 1.493F)
          lineTo(6.0F, 17.5F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.78F, 0.0F, 1.42F, -0.595F, 1.493F, -1.355F)
          lineTo(15.5F, 16.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()
          moveTo(5.404F, 6.39F)
          lineToRelative(4.242F, -4.243F)
          curveToRelative(0.174F, -0.174F, 0.443F, -0.193F, 0.638F, -0.058F)
          lineToRelative(0.07F, 0.058F)
          lineToRelative(4.242F, 4.242F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.173F, 0.174F, -0.443F, 0.193F, -0.638F, 0.058F)
          lineTo(13.89F, 7.096F)
          lineTo(10.5F, 3.707F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(10.0F, 13.5F)
          curveToRelative(-0.245F, 0.0F, -0.45F, -0.177F, -0.492F, -0.41F)
          lineTo(9.5F, 13.0F)
          verticalLineTo(3.707F)
          lineToRelative(-3.39F, 3.39F)
          curveTo(5.938F, 7.27F, 5.669F, 7.288F, 5.474F, 7.153F)
          lineToRelative(-0.07F, -0.058F)
          curveTo(5.23F, 6.923F, 5.212F, 6.653F, 5.347F, 6.458F)
          lineTo(5.404F, 6.39F)
          lineToRelative(4.242F, -4.242F)
          lineTo(5.404F, 6.39F)
          close()        
      }
    }
    return _shareIos20!!
  }

private var _shareIos20: ImageVector? = null
