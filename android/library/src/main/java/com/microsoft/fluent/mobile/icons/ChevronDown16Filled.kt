package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDown16: ImageVector
  get() {
    if (_chevronDown16 != null) {
      return _chevronDown16!!
    }
    _chevronDown16 = fluentIcon(name = "Filled.ChevronDown16", 16f) {
      materialPath {
          moveTo(3.2F, 5.74F)
          curveTo(3.482F, 5.436F, 3.957F, 5.419F, 4.26F, 5.7F)
          lineTo(8.0F, 9.226F)
          lineTo(11.74F, 5.7F)
          curveToRelative(0.303F, -0.281F, 0.778F, -0.264F, 1.06F, 0.04F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          lineToRelative(-4.25F, 4.0F)
          curveToRelative(-0.287F, 0.267F, -0.733F, 0.267F, -1.02F, 0.0F)
          lineToRelative(-4.25F, -4.0F)
          curveTo(2.936F, 6.518F, 2.919F, 6.043F, 3.2F, 5.74F)
          close()        
      }
    }
    return _chevronDown16!!
  }

private var _chevronDown16: ImageVector? = null
