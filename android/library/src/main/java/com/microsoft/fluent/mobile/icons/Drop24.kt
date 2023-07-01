package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Drop24: ImageVector
  get() {
    if (_drop24 != null) {
      return _drop24!!
    }
    _drop24 = fluentIcon(name = "Filled.Drop24", 24f) {
      materialPath {
          moveTo(11.47F, 2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.403F, 0.403F, 1.999F, 2.127F, 3.499F, 4.362F)
          curveTo(17.509F, 8.785F, 19.0F, 11.635F, 19.0F, 14.25F)
          curveToRelative(0.0F, 2.524F, -0.746F, 4.479F, -2.044F, 5.806F)
          curveTo(15.659F, 21.38F, 13.889F, 22.0F, 12.0F, 22.0F)
          curveToRelative(-1.89F, 0.0F, -3.659F, -0.619F, -4.956F, -1.944F)
          curveTo(5.746F, 18.729F, 5.0F, 16.774F, 5.0F, 14.25F)
          curveToRelative(0.0F, -2.615F, 1.492F, -5.465F, 2.971F, -7.668F)
          curveToRelative(1.5F, -2.235F, 3.096F, -3.96F, 3.499F, -4.362F)
          close()        
      }
    }
    return _drop24!!
  }

private var _drop24: ImageVector? = null
