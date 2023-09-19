package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.IosArrowLtr24: ImageVector
  get() {
    if (_iosArrowLtr24 != null) {
      return _iosArrowLtr24!!
    }
    _iosArrowLtr24 = fluentIcon(name = "Filled.IosArrowLtr24", 24f) {
      materialPath {
          moveTo(12.727F, 3.687F)
          curveToRelative(0.379F, -0.402F, 0.361F, -1.035F, -0.04F, -1.414F)
          curveToRelative(-0.402F, -0.38F, -1.035F, -0.361F, -1.414F, 0.04F)
          lineToRelative(-8.5F, 9.0F)
          curveToRelative(-0.365F, 0.386F, -0.365F, 0.988F, 0.0F, 1.374F)
          lineToRelative(8.5F, 9.001F)
          curveToRelative(0.379F, 0.402F, 1.012F, 0.42F, 1.413F, 0.04F)
          curveToRelative(0.402F, -0.379F, 0.42F, -1.012F, 0.04F, -1.413F)
          lineTo(4.876F, 12.0F)
          lineToRelative(7.852F, -8.313F)
          close()        
      }
    }
    return _iosArrowLtr24!!
  }

private var _iosArrowLtr24: ImageVector? = null
