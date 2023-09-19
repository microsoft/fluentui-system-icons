package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonOff16: ImageVector
  get() {
    if (_ribbonOff16 != null) {
      return _ribbonOff16!!
    }
    _ribbonOff16 = fluentIcon(name = "Filled.RibbonOff16", 16f) {
      materialPath {
          moveTo(3.38F, 4.086F)
          curveTo(3.134F, 4.676F, 3.0F, 5.322F, 3.0F, 6.0F)
          curveToRelative(0.0F, 1.636F, 0.786F, 3.088F, 2.0F, 4.0F)
          curveToRelative(0.067F, 0.05F, 0.135F, 0.1F, 0.205F, 0.146F)
          curveTo(6.003F, 10.686F, 6.965F, 11.0F, 8.0F, 11.0F)
          curveToRelative(0.678F, 0.0F, 1.324F, -0.135F, 1.914F, -0.38F)
          lineToRelative(0.754F, 0.756F)
          curveTo(9.865F, 11.776F, 8.958F, 12.0F, 8.0F, 12.0F)
          curveToRelative(-1.093F, 0.0F, -2.117F, -0.292F, -3.0F, -0.803F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.18F, 0.097F, 0.346F, 0.254F, 0.435F)
          curveToRelative(0.156F, 0.089F, 0.349F, 0.086F, 0.503F, -0.006F)
          lineTo(8.0F, 13.583F)
          lineToRelative(2.243F, 1.346F)
          curveToRelative(0.154F, 0.092F, 0.347F, 0.095F, 0.503F, 0.006F)
          curveTo(10.903F, 14.846F, 11.0F, 14.68F, 11.0F, 14.5F)
          verticalLineToRelative(-2.793F)
          lineToRelative(3.146F, 3.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(3.38F, 4.085F)
          close()
          moveTo(13.0F, 6.0F)
          curveToRelative(0.0F, 1.35F, -0.535F, 2.575F, -1.404F, 3.474F)
          lineToRelative(-7.07F, -7.07F)
          curveTo(5.426F, 1.534F, 6.65F, 1.0F, 8.0F, 1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          close()        
      }
    }
    return _ribbonOff16!!
  }

private var _ribbonOff16: ImageVector? = null
