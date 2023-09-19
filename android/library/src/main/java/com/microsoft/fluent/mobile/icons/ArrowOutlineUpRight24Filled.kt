package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowOutlineUpRight24: ImageVector
  get() {
    if (_arrowOutlineUpRight24 != null) {
      return _arrowOutlineUpRight24!!
    }
    _arrowOutlineUpRight24 = fluentIcon(name = "Filled.ArrowOutlineUpRight24", 24f) {
      materialPath {
          moveTo(19.832F, 2.012F)
          curveToRelative(1.242F, -0.138F, 2.292F, 0.912F, 2.154F, 2.154F)
          lineToRelative(-1.34F, 12.061F)
          curveToRelative(-0.18F, 1.625F, -2.161F, 2.32F, -3.317F, 1.164F)
          lineToRelative(-1.267F, -1.267F)
          lineToRelative(-5.304F, 5.303F)
          curveToRelative(-0.761F, 0.762F, -1.996F, 0.762F, -2.758F, 0.0F)
          lineToRelative(-5.429F, -5.429F)
          curveToRelative(-0.761F, -0.761F, -0.761F, -1.996F, 0.0F, -2.758F)
          lineToRelative(5.304F, -5.303F)
          lineToRelative(-1.268F, -1.268F)
          curveTo(5.451F, 5.513F, 6.146F, 3.533F, 7.771F, 3.352F)
          lineToRelative(12.061F, -1.34F)
          close()        
      }
    }
    return _arrowOutlineUpRight24!!
  }

private var _arrowOutlineUpRight24: ImageVector? = null
