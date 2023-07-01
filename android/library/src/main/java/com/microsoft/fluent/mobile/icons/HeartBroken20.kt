package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HeartBroken20: ImageVector
  get() {
    if (_heartBroken20 != null) {
      return _heartBroken20!!
    }
    _heartBroken20 = fluentIcon(name = "Filled.HeartBroken20", 20f) {
      materialPath {
          moveTo(9.274F, 4.178F)
          curveToRelative(-1.702F, -1.6F, -4.362F, -1.571F, -6.013F, 0.096F)
          curveToRelative(-1.688F, 1.705F, -1.68F, 4.476F, 0.016F, 6.189F)
          lineToRelative(6.277F, 6.34F)
          curveToRelative(0.26F, 0.263F, 0.682F, 0.263F, 0.942F, 0.0F)
          lineToRelative(6.245F, -6.304F)
          curveToRelative(1.684F, -1.71F, 1.679F, -4.474F, -0.017F, -6.187F)
          curveToRelative(-1.699F, -1.715F, -4.443F, -1.724F, -6.135F, -0.015F)
          lineToRelative(-0.585F, 0.592F)
          lineToRelative(-1.344F, 2.06F)
          lineToRelative(2.996F, 2.53F)
          curveToRelative(0.107F, 0.09F, 0.171F, 0.22F, 0.177F, 0.36F)
          curveToRelative(0.006F, 0.14F, -0.047F, 0.276F, -0.146F, 0.375F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.615F, -1.616F)
          lineTo(7.677F, 7.43F)
          curveTo(7.486F, 7.266F, 7.444F, 6.985F, 7.582F, 6.774F)
          lineToRelative(1.693F, -2.596F)
          close()        
      }
    }
    return _heartBroken20!!
  }

private var _heartBroken20: ImageVector? = null
