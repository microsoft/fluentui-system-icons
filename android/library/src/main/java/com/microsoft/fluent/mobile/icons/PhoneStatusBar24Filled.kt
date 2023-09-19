package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneStatusBar24: ImageVector
  get() {
    if (_phoneStatusBar24 != null) {
      return _phoneStatusBar24!!
    }
    _phoneStatusBar24 = fluentIcon(name = "Filled.PhoneStatusBar24", 24f) {
      materialPath {
          moveTo(15.75F, 2.0F)
          curveTo(16.993F, 2.0F, 18.0F, 3.007F, 18.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.007F, 22.0F, 6.0F, 20.993F, 6.0F, 19.75F)
          verticalLineTo(4.25F)
          curveTo(6.0F, 3.007F, 7.007F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(-1.0F, 2.5F)
          horizontalLineToRelative(-5.5F)
          curveTo(8.836F, 4.5F, 8.5F, 4.836F, 8.5F, 5.25F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(9.25F, 6.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, -0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(14.75F, 4.5F)
          close()        
      }
    }
    return _phoneStatusBar24!!
  }

private var _phoneStatusBar24: ImageVector? = null
