package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart12: ImageVector
  get() {
    if (_heart12 != null) {
      return _heart12!!
    }
    _heart12 = fluentIcon(name = "Filled.Heart12", 12f) {
      materialPath {
          moveTo(5.656F, 2.737F)
          curveTo(4.702F, 1.758F, 3.159F, 1.753F, 2.209F, 2.728F)
          curveTo(1.26F, 3.702F, 1.264F, 5.286F, 2.22F, 6.264F)
          lineToRelative(3.53F, 3.623F)
          curveToRelative(0.146F, 0.15F, 0.384F, 0.15F, 0.53F, 0.0F)
          lineToRelative(3.513F, -3.602F)
          curveToRelative(0.947F, -0.977F, 0.944F, -2.556F, -0.01F, -3.535F)
          curveToRelative(-0.955F, -0.98F, -2.5F, -0.985F, -3.45F, -0.009F)
          lineTo(5.995F, 3.086F)
          lineToRelative(-0.34F, -0.35F)
          close()        
      }
    }
    return _heart12!!
  }

private var _heart12: ImageVector? = null
