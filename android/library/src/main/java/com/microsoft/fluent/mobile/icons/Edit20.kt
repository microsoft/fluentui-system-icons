package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Edit20: ImageVector
  get() {
    if (_edit20 != null) {
      return _edit20!!
    }
    _edit20 = fluentIcon(name = "Filled.Edit20", 20f) {
      materialPath {
          moveTo(12.92F, 2.873F)
          curveToRelative(1.183F, -1.182F, 3.107F, -1.158F, 4.26F, 0.054F)
          curveToRelative(1.111F, 1.17F, 1.088F, 3.012F, -0.053F, 4.153F)
          lineToRelative(-0.669F, 0.669F)
          lineToRelative(-4.207F, -4.207F)
          lineToRelative(0.67F, -0.669F)
          close()
          moveTo(11.544F, 4.25F)
          lineToRelative(-7.999F, 7.999F)
          curveTo(3.218F, 12.575F, 2.99F, 12.99F, 2.89F, 13.442F)
          lineToRelative(-0.878F, 3.95F)
          curveToRelative(-0.037F, 0.167F, 0.014F, 0.341F, 0.135F, 0.462F)
          curveToRelative(0.12F, 0.121F, 0.295F, 0.172F, 0.462F, 0.135F)
          lineToRelative(3.926F, -0.873F)
          curveToRelative(0.467F, -0.104F, 0.896F, -0.34F, 1.234F, -0.678F)
          lineToRelative(7.982F, -7.982F)
          lineToRelative(-4.207F, -4.207F)
          close()        
      }
    }
    return _edit20!!
  }

private var _edit20: ImageVector? = null
