package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Megaphone20: ImageVector
  get() {
    if (_megaphone20 != null) {
      return _megaphone20!!
    }
    _megaphone20 = fluentIcon(name = "Filled.Megaphone20", 20f) {
      materialPath {
          moveTo(16.113F, 3.352F)
          curveTo(17.066F, 3.098F, 18.0F, 3.816F, 18.0F, 4.802F)
          verticalLineToRelative(10.31F)
          curveToRelative(0.0F, 1.024F, -1.003F, 1.747F, -1.974F, 1.424F)
          lineTo(11.27F, 14.95F)
          curveTo(10.793F, 16.15F, 9.62F, 17.0F, 8.25F, 17.0F)
          curveTo(6.455F, 17.0F, 5.0F, 15.545F, 5.0F, 13.75F)
          verticalLineToRelative(-0.89F)
          lineToRelative(-1.974F, -0.658F)
          curveTo(2.413F, 11.998F, 2.0F, 11.425F, 2.0F, 10.78F)
          verticalLineTo(8.27F)
          curveToRelative(0.0F, -0.68F, 0.457F, -1.275F, 1.114F, -1.45F)
          lineToRelative(13.0F, -3.467F)
          close()
          moveTo(6.0F, 13.194F)
          verticalLineToRelative(0.556F)
          curveTo(6.0F, 14.993F, 7.007F, 16.0F, 8.25F, 16.0F)
          curveToRelative(0.929F, 0.0F, 1.727F, -0.563F, 2.07F, -1.366F)
          lineTo(6.0F, 13.194F)
          close()        
      }
    }
    return _megaphone20!!
  }

private var _megaphone20: ImageVector? = null
