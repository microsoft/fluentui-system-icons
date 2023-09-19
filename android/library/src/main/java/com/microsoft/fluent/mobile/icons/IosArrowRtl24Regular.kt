package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.IosArrowRtl24: ImageVector
  get() {
    if (_iosArrowRtl24 != null) {
      return _iosArrowRtl24!!
    }
    _iosArrowRtl24 = fluentIcon(name = "Regular.IosArrowRtl24", 24f) {
      materialPath {
          moveTo(19.704F, 12.0F)
          lineToRelative(-8.492F, -8.727F)
          curveToRelative(-0.288F, -0.297F, -0.282F, -0.772F, 0.015F, -1.06F)
          curveToRelative(0.297F, -0.29F, 0.772F, -0.283F, 1.06F, 0.014F)
          lineToRelative(9.0F, 9.25F)
          curveToRelative(0.284F, 0.291F, 0.284F, 0.755F, 0.0F, 1.046F)
          lineToRelative(-9.0F, 9.25F)
          curveToRelative(-0.288F, 0.297F, -0.763F, 0.303F, -1.06F, 0.015F)
          curveToRelative(-0.297F, -0.29F, -0.303F, -0.764F, -0.014F, -1.061F)
          lineTo(19.703F, 12.0F)
          close()        
      }
    }
    return _iosArrowRtl24!!
  }

private var _iosArrowRtl24: ImageVector? = null
