package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.IosArrowRtl24: ImageVector
  get() {
    if (_iosArrowRtl24 != null) {
      return _iosArrowRtl24!!
    }
    _iosArrowRtl24 = fluentIcon(name = "Filled.IosArrowRtl24", 24f) {
      materialPath {
          moveTo(11.273F, 3.687F)
          curveToRelative(-0.38F, -0.402F, -0.361F, -1.035F, 0.04F, -1.414F)
          curveToRelative(0.402F, -0.38F, 1.034F, -0.361F, 1.414F, 0.04F)
          lineToRelative(8.5F, 9.0F)
          curveToRelative(0.364F, 0.386F, 0.364F, 0.988F, 0.0F, 1.374F)
          lineToRelative(-8.5F, 9.001F)
          curveToRelative(-0.38F, 0.402F, -1.012F, 0.42F, -1.414F, 0.04F)
          curveToRelative(-0.401F, -0.379F, -0.42F, -1.012F, -0.04F, -1.413F)
          lineTo(19.125F, 12.0F)
          lineToRelative(-7.852F, -8.313F)
          close()        
      }
    }
    return _iosArrowRtl24!!
  }

private var _iosArrowRtl24: ImageVector? = null
