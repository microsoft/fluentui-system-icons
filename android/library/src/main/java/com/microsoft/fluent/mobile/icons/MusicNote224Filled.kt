package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MusicNote224: ImageVector
  get() {
    if (_musicNote224 != null) {
      return _musicNote224!!
    }
    _musicNote224 = fluentIcon(name = "Filled.MusicNote224", 224f) {
      materialPath {
          moveTo(20.0F, 2.75F)
          curveToRelative(0.0F, -0.237F, -0.112F, -0.46F, -0.302F, -0.602F)
          curveToRelative(-0.19F, -0.141F, -0.436F, -0.185F, -0.663F, -0.116F)
          lineToRelative(-10.0F, 3.0F)
          curveTo(8.716F, 5.127F, 8.5F, 5.419F, 8.5F, 5.75F)
          verticalLineToRelative(9.877F)
          curveTo(7.933F, 15.232F, 7.244F, 15.0F, 6.5F, 15.0F)
          curveTo(4.567F, 15.0F, 3.0F, 16.567F, 3.0F, 18.5F)
          reflectiveCurveTo(4.567F, 22.0F, 6.5F, 22.0F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -0.057F, -0.001F, -0.114F, -0.004F, -0.171F)
          curveTo(9.999F, 18.303F, 10.0F, 18.277F, 10.0F, 18.25F)
          verticalLineToRelative(-7.942F)
          lineToRelative(8.5F, -2.55F)
          verticalLineToRelative(5.87F)
          curveTo(17.933F, 13.231F, 17.244F, 13.0F, 16.5F, 13.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          reflectiveCurveToRelative(1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -0.057F, -0.001F, -0.114F, -0.004F, -0.171F)
          curveTo(19.999F, 16.303F, 20.0F, 16.277F, 20.0F, 16.25F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _musicNote224!!
  }

private var _musicNote224: ImageVector? = null
