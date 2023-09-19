package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenHeader24: ImageVector
  get() {
    if (_dualScreenHeader24 != null) {
      return _dualScreenHeader24!!
    }
    _dualScreenHeader24 = fluentIcon(name = "Filled.DualScreenHeader24", 24f) {
      materialPath {
          moveTo(21.995F, 7.997F)
          verticalLineTo(18.25F)
          curveToRelative(0.0F, 0.966F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-7.247F)
          curveToRelative(-0.087F, 0.0F, -0.172F, -0.007F, -0.255F, -0.019F)
          lineTo(12.742F, 7.997F)
          horizontalLineToRelative(9.253F)
          close()
          moveToRelative(-10.752F, 0.0F)
          verticalLineTo(19.98F)
          curveToRelative(-0.08F, 0.011F, -0.162F, 0.017F, -0.245F, 0.017F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          verticalLineTo(7.997F)
          horizontalLineToRelative(9.243F)
          close()
          moveToRelative(-0.245F, -3.995F)
          curveToRelative(0.083F, 0.0F, 0.165F, 0.006F, 0.246F, 0.017F)
          lineToRelative(-0.001F, 2.978F)
          horizontalLineTo(2.0F)
          verticalLineTo(5.752F)
          curveToRelative(0.0F, -0.967F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(7.248F)
          close()
          moveToRelative(9.248F, 0.002F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          lineToRelative(-0.001F, 1.243F)
          horizontalLineToRelative(-9.253F)
          verticalLineTo(4.023F)
          curveToRelative(0.084F, -0.012F, 0.17F, -0.019F, 0.256F, -0.019F)
          horizontalLineToRelative(7.248F)
          close()        
      }
    }
    return _dualScreenHeader24!!
  }

private var _dualScreenHeader24: ImageVector? = null
