package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Target20: ImageVector
  get() {
    if (_target20 != null) {
      return _target20!!
    }
    _target20 = fluentIcon(name = "Filled.Target20", 20f) {
      materialPath {
          moveTo(9.998F, 11.5F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          curveToRelative(0.0F, 0.829F, 0.672F, 1.5F, 1.5F, 1.5F)
          close()
          moveToRelative(-5.0F, -1.5F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(5.0F, -3.5F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          reflectiveCurveToRelative(1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveToRelative(-1.567F, -3.5F, -3.5F, -3.5F)
          close()
          moveTo(1.996F, 9.997F)
          curveToRelative(0.0F, -4.418F, 3.581F, -7.999F, 8.0F, -7.999F)
          curveToRelative(4.417F, 0.0F, 7.998F, 3.581F, 7.998F, 8.0F)
          curveToRelative(0.0F, 4.417F, -3.581F, 7.998F, -7.999F, 7.998F)
          curveToRelative(-4.418F, 0.0F, -7.999F, -3.581F, -7.999F, -7.999F)
          close()
          moveToRelative(8.0F, -6.499F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 3.588F, 2.91F, 6.498F, 6.5F, 6.498F)
          curveToRelative(3.588F, 0.0F, 6.498F, -2.91F, 6.498F, -6.499F)
          curveToRelative(0.0F, -3.59F, -2.91F, -6.499F, -6.499F, -6.499F)
          close()        
      }
    }
    return _target20!!
  }

private var _target20: ImageVector? = null
