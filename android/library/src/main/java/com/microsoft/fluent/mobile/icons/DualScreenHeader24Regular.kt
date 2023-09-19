package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DualScreenHeader24: ImageVector
  get() {
    if (_dualScreenHeader24 != null) {
      return _dualScreenHeader24!!
    }
    _dualScreenHeader24 = fluentIcon(name = "Regular.DualScreenHeader24", 24f) {
      materialPath {
          moveTo(12.748F, 4.002F)
          lineToRelative(-0.001F, 0.002F)
          horizontalLineToRelative(7.498F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(18.25F)
          curveToRelative(0.0F, 0.966F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-8.997F)
          lineToRelative(-0.001F, -0.003F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineTo(5.752F)
          curveToRelative(0.0F, -0.967F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(8.998F)
          close()
          moveTo(20.495F, 7.0F)
          horizontalLineToRelative(-7.748F)
          verticalLineToRelative(11.5F)
          horizontalLineToRelative(7.498F)
          curveToRelative(0.138F, 0.0F, 0.25F, -0.112F, 0.25F, -0.25F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(-9.248F, 0.0F)
          horizontalLineTo(3.5F)
          verticalLineToRelative(11.247F)
          curveToRelative(0.0F, 0.138F, 0.112F, 0.25F, 0.25F, 0.25F)
          horizontalLineToRelative(7.498F)
          lineTo(11.247F, 7.0F)
          close()        
      }
    }
    return _dualScreenHeader24!!
  }

private var _dualScreenHeader24: ImageVector? = null
