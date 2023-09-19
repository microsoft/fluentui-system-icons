package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Drop20: ImageVector
  get() {
    if (_drop20 != null) {
      return _drop20!!
    }
    _drop20 = fluentIcon(name = "Filled.Drop20", 20f) {
      materialPath {
          moveTo(9.646F, 2.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.531F, 0.531F, 1.804F, 2.063F, 2.946F, 3.902F)
          curveToRelative(1.13F, 1.82F, 2.2F, 4.05F, 2.2F, 5.951F)
          curveToRelative(0.0F, 1.844F, -0.528F, 3.352F, -1.51F, 4.404F)
          curveTo(13.007F, 17.459F, 11.616F, 18.0F, 10.0F, 18.0F)
          curveToRelative(-1.615F, 0.0F, -3.006F, -0.541F, -3.99F, -1.596F)
          curveTo(5.027F, 15.352F, 4.5F, 13.844F, 4.5F, 12.0F)
          curveToRelative(0.0F, -1.902F, 1.07F, -4.13F, 2.2F, -5.951F)
          curveToRelative(1.142F, -1.84F, 2.415F, -3.37F, 2.946F, -3.903F)
          close()        
      }
    }
    return _drop20!!
  }

private var _drop20: ImageVector? = null
