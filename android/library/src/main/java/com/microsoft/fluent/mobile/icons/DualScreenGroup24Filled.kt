package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenGroup24: ImageVector
  get() {
    if (_dualScreenGroup24 != null) {
      return _dualScreenGroup24!!
    }
    _dualScreenGroup24 = fluentIcon(name = "Filled.DualScreenGroup24", 24f) {
      materialPath {
          moveTo(20.253F, 4.004F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(18.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-7.248F)
          curveToRelative(-0.086F, 0.0F, -0.172F, -0.007F, -0.255F, -0.019F)
          verticalLineTo(4.023F)
          curveToRelative(0.083F, -0.012F, 0.169F, -0.019F, 0.255F, -0.019F)
          horizontalLineToRelative(7.248F)
          close()
          moveToRelative(-9.248F, -0.002F)
          curveToRelative(0.084F, 0.0F, 0.166F, 0.006F, 0.246F, 0.017F)
          verticalLineTo(19.98F)
          curveToRelative(-0.08F, 0.011F, -0.162F, 0.017F, -0.246F, 0.017F)
          horizontalLineTo(3.758F)
          curveToRelative(-0.967F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineTo(5.752F)
          curveToRelative(0.0F, -0.967F, 0.783F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(7.247F)
          close()        
      }
    }
    return _dualScreenGroup24!!
  }

private var _dualScreenGroup24: ImageVector? = null
