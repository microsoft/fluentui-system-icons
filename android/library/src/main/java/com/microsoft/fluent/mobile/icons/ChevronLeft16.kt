package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronLeft16: ImageVector
  get() {
    if (_chevronLeft16 != null) {
      return _chevronLeft16!!
    }
    _chevronLeft16 = fluentIcon(name = "Filled.ChevronLeft16", 16f) {
      materialPath {
          moveTo(10.26F, 3.2F)
          curveToRelative(0.304F, 0.282F, 0.321F, 0.757F, 0.04F, 1.06F)
          lineTo(6.773F, 8.0F)
          lineToRelative(3.527F, 3.74F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          curveToRelative(-0.303F, 0.281F, -0.778F, 0.264F, -1.06F, -0.04F)
          lineToRelative(-4.0F, -4.25F)
          curveToRelative(-0.267F, -0.287F, -0.267F, -0.733F, 0.0F, -1.02F)
          lineToRelative(4.0F, -4.25F)
          curveToRelative(0.282F, -0.304F, 0.757F, -0.321F, 1.06F, -0.04F)
          close()        
      }
    }
    return _chevronLeft16!!
  }

private var _chevronLeft16: ImageVector? = null
