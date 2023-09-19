package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pi20: ImageVector
  get() {
    if (_pi20 != null) {
      return _pi20!!
    }
    _pi20 = fluentIcon(name = "Filled.Pi20", 20f) {
      materialPath {
          moveTo(3.401F, 4.783F)
          curveToRelative(-0.166F, 0.321F, -0.179F, 0.759F, -0.117F, 1.07F)
          curveToRelative(0.081F, 0.407F, -0.183F, 0.802F, -0.589F, 0.883F)
          curveToRelative(-0.406F, 0.08F, -0.801F, -0.183F, -0.882F, -0.59F)
          curveTo(1.71F, 5.627F, 1.696F, 4.814F, 2.07F, 4.093F)
          curveTo(2.48F, 3.3F, 3.292F, 2.75F, 4.542F, 2.75F)
          horizontalLineTo(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-2.25F)
          verticalLineToRelative(9.415F)
          curveToRelative(0.0F, 1.5F, 0.453F, 1.892F, 0.693F, 2.004F)
          curveToRelative(0.322F, 0.151F, 0.809F, 0.079F, 1.217F, -0.129F)
          curveToRelative(0.369F, -0.188F, 0.82F, -0.04F, 1.008F, 0.329F)
          curveToRelative(0.188F, 0.369F, 0.041F, 0.82F, -0.328F, 1.008F)
          curveToRelative(-0.592F, 0.301F, -1.605F, 0.585F, -2.533F, 0.15F)
          curveToRelative(-1.01F, -0.472F, -1.557F, -1.607F, -1.557F, -3.362F)
          verticalLineTo(4.25F)
          horizontalLineTo(8.237F)
          curveToRelative(-0.09F, 1.533F, -0.289F, 3.961F, -0.606F, 6.325F)
          curveToRelative(-0.166F, 1.237F, -0.367F, 2.465F, -0.603F, 3.542F)
          curveToRelative(-0.234F, 1.064F, -0.514F, 2.032F, -0.857F, 2.718F)
          curveToRelative(-0.186F, 0.37F, -0.636F, 0.521F, -1.006F, 0.336F)
          curveToRelative(-0.371F, -0.185F, -0.521F, -0.636F, -0.336F, -1.006F)
          curveToRelative(0.257F, -0.514F, 0.506F, -1.333F, 0.734F, -2.37F)
          curveToRelative(0.224F, -1.022F, 0.418F, -2.207F, 0.581F, -3.42F)
          curveToRelative(0.306F, -2.274F, 0.5F, -4.617F, 0.59F, -6.125F)
          horizontalLineTo(4.542F)
          curveToRelative(-0.744F, 0.0F, -1.012F, 0.284F, -1.14F, 0.533F)
          close()        
      }
    }
    return _pi20!!
  }

private var _pi20: ImageVector? = null
