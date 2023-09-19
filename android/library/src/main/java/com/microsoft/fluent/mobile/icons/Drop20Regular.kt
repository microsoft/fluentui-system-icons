package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Drop20: ImageVector
  get() {
    if (_drop20 != null) {
      return _drop20!!
    }
    _drop20 = fluentIcon(name = "Regular.Drop20", 20f) {
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
          moveTo(7.55F, 6.576F)
          curveTo(6.43F, 8.38F, 5.5F, 10.401F, 5.5F, 12.0F)
          curveToRelative(0.0F, 1.656F, 0.472F, 2.898F, 1.24F, 3.721F)
          curveTo(7.506F, 16.541F, 8.616F, 17.0F, 10.0F, 17.0F)
          curveToRelative(1.385F, 0.0F, 2.494F, -0.459F, 3.26F, -1.279F)
          curveToRelative(0.768F, -0.823F, 1.24F, -2.065F, 1.24F, -3.721F)
          curveToRelative(0.0F, -1.598F, -0.93F, -3.62F, -2.05F, -5.424F)
          curveToRelative(-0.892F, -1.438F, -1.862F, -2.67F, -2.45F, -3.34F)
          curveToRelative(-0.588F, 0.67F, -1.558F, 1.902F, -2.45F, 3.34F)
          close()        
      }
    }
    return _drop20!!
  }

private var _drop20: ImageVector? = null
