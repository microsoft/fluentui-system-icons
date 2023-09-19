package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Code20: ImageVector
  get() {
    if (_code20 != null) {
      return _code20!!
    }
    _code20 = fluentIcon(name = "Filled.Code20", 20f) {
      materialPath {
          moveTo(12.937F, 4.052F)
          curveToRelative(0.166F, -0.379F, -0.006F, -0.821F, -0.385F, -0.988F)
          curveToRelative(-0.38F, -0.167F, -0.822F, 0.005F, -0.989F, 0.384F)
          lineToRelative(-5.5F, 12.5F)
          curveToRelative(-0.166F, 0.38F, 0.006F, 0.822F, 0.385F, 0.989F)
          curveToRelative(0.38F, 0.166F, 0.822F, -0.006F, 0.988F, -0.385F)
          lineToRelative(5.5F, -12.5F)
          close()
          moveToRelative(1.356F, 9.793F)
          curveToRelative(-0.329F, -0.253F, -0.39F, -0.724F, -0.137F, -1.052F)
          lineTo(16.303F, 10.0F)
          lineToRelative(-2.148F, -2.793F)
          curveToRelative(-0.253F, -0.328F, -0.192F, -0.799F, 0.137F, -1.051F)
          curveToRelative(0.328F, -0.253F, 0.799F, -0.191F, 1.052F, 0.137F)
          lineToRelative(2.5F, 3.25F)
          curveToRelative(0.207F, 0.27F, 0.207F, 0.645F, 0.0F, 0.915F)
          lineToRelative(-2.5F, 3.25F)
          curveToRelative(-0.253F, 0.328F, -0.724F, 0.39F, -1.052F, 0.137F)
          close()
          moveToRelative(-8.586F, -7.69F)
          curveToRelative(0.329F, 0.253F, 0.39F, 0.724F, 0.138F, 1.053F)
          lineTo(3.696F, 10.0F)
          lineToRelative(2.148F, 2.793F)
          curveToRelative(0.253F, 0.328F, 0.192F, 0.8F, -0.137F, 1.052F)
          curveToRelative(-0.328F, 0.252F, -0.799F, 0.19F, -1.051F, -0.137F)
          lineToRelative(-2.5F, -3.25F)
          curveToRelative(-0.208F, -0.27F, -0.208F, -0.645F, 0.0F, -0.915F)
          lineToRelative(2.5F, -3.25F)
          curveToRelative(0.252F, -0.328F, 0.723F, -0.39F, 1.051F, -0.137F)
          close()        
      }
    }
    return _code20!!
  }

private var _code20: ImageVector? = null
