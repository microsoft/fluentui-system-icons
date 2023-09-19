package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenStatusBar24: ImageVector
  get() {
    if (_dualScreenStatusBar24 != null) {
      return _dualScreenStatusBar24!!
    }
    _dualScreenStatusBar24 = fluentIcon(name = "Filled.DualScreenStatusBar24", 24f) {
      materialPath {
          moveTo(20.245F, 4.004F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(18.25F)
          curveToRelative(0.0F, 0.966F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-7.247F)
          curveToRelative(-0.087F, 0.0F, -0.172F, -0.007F, -0.256F, -0.019F)
          verticalLineTo(4.023F)
          curveToRelative(0.083F, -0.012F, 0.169F, -0.019F, 0.256F, -0.019F)
          horizontalLineToRelative(7.247F)
          close()
          moveToRelative(-9.247F, -0.002F)
          curveToRelative(0.083F, 0.0F, 0.165F, 0.006F, 0.245F, 0.017F)
          verticalLineTo(19.98F)
          curveToRelative(-0.08F, 0.011F, -0.162F, 0.017F, -0.245F, 0.017F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineTo(5.752F)
          curveToRelative(0.0F, -0.967F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(7.248F)
          close()
          moveTo(19.75F, 6.5F)
          horizontalLineToRelative(-4.502F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.335F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, 0.283F, 0.693F, 0.649F, 0.743F)
          lineTo(15.248F, 8.0F)
          horizontalLineToRelative(4.502F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, -0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(19.75F, 6.5F)
          close()        
      }
    }
    return _dualScreenStatusBar24!!
  }

private var _dualScreenStatusBar24: ImageVector? = null
