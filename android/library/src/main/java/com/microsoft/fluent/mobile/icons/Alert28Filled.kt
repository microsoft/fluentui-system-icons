package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Alert28: ImageVector
  get() {
    if (_alert28 != null) {
      return _alert28!!
    }
    _alert28 = fluentIcon(name = "Filled.Alert28", 28f) {
      materialPath {
          moveTo(17.466F, 22.002F)
          curveToRelative(-0.244F, 1.697F, -1.703F, 3.0F, -3.466F, 3.0F)
          curveToRelative(-1.764F, 0.0F, -3.223F, -1.303F, -3.466F, -3.0F)
          horizontalLineToRelative(6.932F)
          close()
          moveTo(14.0F, 3.0F)
          curveToRelative(4.61F, 0.0F, 8.363F, 3.669F, 8.497F, 8.246F)
          verticalLineToRelative(0.255F)
          horizontalLineToRelative(0.004F)
          verticalLineToRelative(4.112F)
          lineToRelative(1.414F, 3.644F)
          curveToRelative(0.038F, 0.099F, 0.064F, 0.201F, 0.077F, 0.306F)
          lineToRelative(0.01F, 0.157F)
          curveToRelative(0.0F, 0.663F, -0.504F, 1.208F, -1.15F, 1.274F)
          lineTo(22.723F, 21.0F)
          horizontalLineTo(5.275F)
          curveToRelative(-0.159F, 0.0F, -0.316F, -0.03F, -0.464F, -0.087F)
          curveToRelative(-0.618F, -0.24F, -0.943F, -0.907F, -0.77F, -1.532F)
          lineToRelative(0.04F, -0.125F)
          lineToRelative(1.417F, -3.644F)
          verticalLineToRelative(-4.11F)
          curveTo(5.499F, 6.805F, 9.306F, 3.0F, 14.0F, 3.0F)
          close()        
      }
    }
    return _alert28!!
  }

private var _alert28: ImageVector? = null
