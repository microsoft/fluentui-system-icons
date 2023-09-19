package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDown20: ImageVector
  get() {
    if (_chevronDown20 != null) {
      return _chevronDown20!!
    }
    _chevronDown20 = fluentIcon(name = "Filled.ChevronDown20", 20f) {
      materialPath {
          moveTo(15.794F, 7.733F)
          curveToRelative(0.286F, 0.3F, 0.274F, 0.774F, -0.026F, 1.06F)
          lineToRelative(-5.25F, 5.001F)
          curveToRelative(-0.29F, 0.276F, -0.745F, 0.276F, -1.035F, 0.0F)
          lineToRelative(-5.25F, -5.0F)
          curveToRelative(-0.3F, -0.287F, -0.312F, -0.761F, -0.026F, -1.061F)
          curveToRelative(0.286F, -0.3F, 0.76F, -0.312F, 1.06F, -0.026F)
          lineToRelative(4.734F, 4.509F)
          lineToRelative(4.733F, -4.51F)
          curveToRelative(0.3F, -0.285F, 0.774F, -0.273F, 1.06F, 0.027F)
          close()        
      }
    }
    return _chevronDown20!!
  }

private var _chevronDown20: ImageVector? = null
