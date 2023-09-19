package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Broom20: ImageVector
  get() {
    if (_broom20 != null) {
      return _broom20!!
    }
    _broom20 = fluentIcon(name = "Filled.Broom20", 20f) {
      materialPath {
          moveTo(17.91F, 2.182F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(13.298F, 7.5F)
          curveToRelative(-0.106F, -0.127F, -0.219F, -0.25F, -0.338F, -0.37F)
          curveToRelative(-0.119F, -0.119F, -0.242F, -0.231F, -0.37F, -0.337F)
          lineToRelative(4.613F, -4.612F)
          curveToRelative(0.195F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          close()
          moveToRelative(-5.657F, 5.657F)
          curveToRelative(-1.757F, -1.758F, -4.607F, -1.758F, -6.364F, 0.0F)
          lineTo(5.468F, 8.26F)
          lineToRelative(6.364F, 6.364F)
          lineToRelative(0.421F, -0.422F)
          curveToRelative(1.757F, -1.757F, 1.757F, -4.606F, 0.0F, -6.364F)
          close()
          moveToRelative(-10.51F, 2.753F)
          lineTo(4.644F, 8.85F)
          lineToRelative(0.002F, 0.002F)
          lineToRelative(6.5F, 6.5F)
          curveToRelative(0.032F, 0.032F, 0.067F, 0.058F, 0.103F, 0.08F)
          lineTo(9.5F, 18.348F)
          curveToRelative(-0.078F, 0.132F, -0.214F, 0.22F, -0.367F, 0.239F)
          curveToRelative(-0.153F, 0.019F, -0.306F, -0.034F, -0.415F, -0.143F)
          lineToRelative(-7.07F, -7.071F)
          curveToRelative(-0.11F, -0.109F, -0.162F, -0.262F, -0.143F, -0.415F)
          curveToRelative(0.019F, -0.152F, 0.107F, -0.288F, 0.239F, -0.367F)
          close()        
      }
    }
    return _broom20!!
  }

private var _broom20: ImageVector? = null
