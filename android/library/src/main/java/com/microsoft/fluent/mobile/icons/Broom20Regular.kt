package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Broom20: ImageVector
  get() {
    if (_broom20 != null) {
      return _broom20!!
    }
    _broom20 = fluentIcon(name = "Regular.Broom20", 20f) {
      materialPath {
          moveTo(17.91F, 2.182F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(12.587F, 8.21F)
          curveToRelative(1.415F, 1.767F, 1.304F, 4.354F, -0.334F, 5.991F)
          lineToRelative(-0.664F, 0.664F)
          lineToRelative(-2.09F, 3.483F)
          curveToRelative(-0.078F, 0.132F, -0.214F, 0.22F, -0.367F, 0.239F)
          curveToRelative(-0.153F, 0.019F, -0.306F, -0.034F, -0.415F, -0.143F)
          lineToRelative(-7.07F, -7.071F)
          curveToRelative(-0.11F, -0.109F, -0.162F, -0.262F, -0.143F, -0.415F)
          curveToRelative(0.019F, -0.152F, 0.107F, -0.288F, 0.239F, -0.367F)
          lineToRelative(3.482F, -2.09F)
          lineToRelative(0.664F, -0.664F)
          curveTo(7.527F, 6.2F, 10.113F, 6.088F, 11.88F, 7.503F)
          lineToRelative(5.323F, -5.322F)
          curveToRelative(0.195F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          close()
          moveTo(6.243F, 8.899F)
          lineToRelative(4.95F, 4.95F)
          lineToRelative(0.353F, -0.354F)
          curveToRelative(1.367F, -1.366F, 1.367F, -3.583F, 0.0F, -4.95F)
          curveToRelative(-1.367F, -1.366F, -3.583F, -1.366F, -4.95F, 0.0F)
          lineTo(6.243F, 8.9F)
          close()
          moveTo(5.458F, 9.53F)
          lineToRelative(-2.652F, 1.59F)
          lineToRelative(6.166F, 6.166F)
          lineToRelative(1.59F, -2.652F)
          lineTo(5.459F, 9.53F)
          close()        
      }
    }
    return _broom20!!
  }

private var _broom20: ImageVector? = null
