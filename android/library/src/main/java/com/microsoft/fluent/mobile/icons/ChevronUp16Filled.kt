package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronUp16: ImageVector
  get() {
    if (_chevronUp16 != null) {
      return _chevronUp16!!
    }
    _chevronUp16 = fluentIcon(name = "Filled.ChevronUp16", 16f) {
      materialPath {
          moveTo(3.2F, 10.26F)
          curveToRelative(0.282F, 0.304F, 0.757F, 0.321F, 1.06F, 0.04F)
          lineTo(8.0F, 6.773F)
          lineToRelative(3.74F, 3.527F)
          curveToRelative(0.303F, 0.281F, 0.778F, 0.264F, 1.06F, -0.04F)
          curveToRelative(0.281F, -0.303F, 0.264F, -0.778F, -0.04F, -1.06F)
          lineToRelative(-4.25F, -4.0F)
          curveToRelative(-0.287F, -0.267F, -0.733F, -0.267F, -1.02F, 0.0F)
          lineToRelative(-4.25F, 4.0F)
          curveTo(2.936F, 9.482F, 2.919F, 9.957F, 3.2F, 10.26F)
          close()        
      }
    }
    return _chevronUp16!!
  }

private var _chevronUp16: ImageVector? = null
