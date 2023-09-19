package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DualScreenGroup24: ImageVector
  get() {
    if (_dualScreenGroup24 != null) {
      return _dualScreenGroup24!!
    }
    _dualScreenGroup24 = fluentIcon(name = "Regular.DualScreenGroup24", 24f) {
      materialPath {
          moveTo(12.755F, 4.002F)
          verticalLineToRelative(0.002F)
          horizontalLineToRelative(7.498F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(18.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-8.998F)
          verticalLineToRelative(-0.003F)
          horizontalLineTo(3.758F)
          curveToRelative(-0.967F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineTo(5.752F)
          curveToRelative(0.0F, -0.967F, 0.783F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(8.997F)
          close()
          moveToRelative(7.498F, 1.502F)
          horizontalLineToRelative(-7.498F)
          verticalLineTo(18.5F)
          horizontalLineToRelative(7.498F)
          curveToRelative(0.138F, 0.0F, 0.25F, -0.112F, 0.25F, -0.25F)
          verticalLineTo(5.754F)
          curveToRelative(0.0F, -0.138F, -0.112F, -0.25F, -0.25F, -0.25F)
          close()
          moveToRelative(-8.998F, -0.002F)
          horizontalLineTo(3.758F)
          curveToRelative(-0.138F, 0.0F, -0.25F, 0.112F, -0.25F, 0.25F)
          verticalLineToRelative(12.495F)
          curveToRelative(0.0F, 0.138F, 0.112F, 0.25F, 0.25F, 0.25F)
          horizontalLineToRelative(7.497F)
          verticalLineTo(5.502F)
          close()        
      }
    }
    return _dualScreenGroup24!!
  }

private var _dualScreenGroup24: ImageVector? = null
