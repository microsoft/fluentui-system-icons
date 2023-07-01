package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronRight20: ImageVector
  get() {
    if (_chevronRight20 != null) {
      return _chevronRight20!!
    }
    _chevronRight20 = fluentIcon(name = "Filled.ChevronRight20", 20f) {
      materialPath {
          moveTo(7.733F, 4.207F)
          curveToRelative(0.3F, -0.286F, 0.774F, -0.274F, 1.06F, 0.026F)
          lineToRelative(5.001F, 5.25F)
          curveToRelative(0.276F, 0.29F, 0.276F, 0.745F, 0.0F, 1.035F)
          lineToRelative(-5.0F, 5.25F)
          curveToRelative(-0.287F, 0.3F, -0.761F, 0.312F, -1.061F, 0.026F)
          curveToRelative(-0.3F, -0.286F, -0.312F, -0.76F, -0.026F, -1.06F)
          lineTo(12.216F, 10.0F)
          lineToRelative(-4.51F, -4.734F)
          curveToRelative(-0.285F, -0.3F, -0.273F, -0.774F, 0.027F, -1.06F)
          close()        
      }
    }
    return _chevronRight20!!
  }

private var _chevronRight20: ImageVector? = null
