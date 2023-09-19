package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronRight16: ImageVector
  get() {
    if (_chevronRight16 != null) {
      return _chevronRight16!!
    }
    _chevronRight16 = fluentIcon(name = "Filled.ChevronRight16", 16f) {
      materialPath {
          moveTo(5.74F, 3.2F)
          curveTo(5.436F, 3.482F, 5.419F, 3.957F, 5.7F, 4.26F)
          lineTo(9.226F, 8.0F)
          lineTo(5.7F, 11.74F)
          curveToRelative(-0.281F, 0.303F, -0.264F, 0.778F, 0.04F, 1.06F)
          curveToRelative(0.303F, 0.281F, 0.778F, 0.264F, 1.06F, -0.04F)
          lineToRelative(4.0F, -4.25F)
          curveToRelative(0.267F, -0.287F, 0.267F, -0.733F, 0.0F, -1.02F)
          lineToRelative(-4.0F, -4.25F)
          curveTo(6.518F, 2.936F, 6.043F, 2.919F, 5.74F, 3.2F)
          close()        
      }
    }
    return _chevronRight16!!
  }

private var _chevronRight16: ImageVector? = null
