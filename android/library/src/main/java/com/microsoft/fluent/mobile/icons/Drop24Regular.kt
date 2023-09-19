package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Drop24: ImageVector
  get() {
    if (_drop24 != null) {
      return _drop24!!
    }
    _drop24 = fluentIcon(name = "Regular.Drop24", 24f) {
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
          moveTo(9.216F, 7.418F)
          curveTo(7.758F, 9.59F, 6.5F, 12.115F, 6.5F, 14.25F)
          curveToRelative(0.0F, 2.226F, 0.653F, 3.771F, 1.617F, 4.757F)
          curveTo(9.082F, 19.994F, 10.437F, 20.5F, 12.0F, 20.5F)
          curveToRelative(1.562F, 0.0F, 2.918F, -0.506F, 3.883F, -1.493F)
          curveToRelative(0.964F, -0.986F, 1.617F, -2.53F, 1.617F, -4.757F)
          curveToRelative(0.0F, -2.135F, -1.258F, -4.66F, -2.716F, -6.832F)
          curveToRelative(-1.041F, -1.55F, -2.13F, -2.843F, -2.784F, -3.57F)
          curveToRelative(-0.653F, 0.727F, -1.743F, 2.02F, -2.784F, 3.57F)
          close()        
      }
    }
    return _drop24!!
  }

private var _drop24: ImageVector? = null
