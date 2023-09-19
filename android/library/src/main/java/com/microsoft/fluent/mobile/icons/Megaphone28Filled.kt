package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Megaphone28: ImageVector
  get() {
    if (_megaphone28 != null) {
      return _megaphone28!!
    }
    _megaphone28 = fluentIcon(name = "Filled.Megaphone28", 28f) {
      materialPath {
          moveTo(26.0F, 7.353F)
          curveToRelative(0.0F, -1.807F, -1.712F, -3.123F, -3.458F, -2.657F)
          lineTo(4.045F, 9.629F)
          curveTo(2.841F, 9.95F, 2.004F, 11.04F, 2.004F, 12.286F)
          verticalLineToRelative(3.427F)
          curveToRelative(0.0F, 1.246F, 0.837F, 2.336F, 2.041F, 2.657F)
          lineTo(7.0F, 19.158F)
          verticalLineTo(19.5F)
          curveToRelative(0.0F, 2.485F, 2.014F, 4.5F, 4.5F, 4.5F)
          curveToRelative(1.79F, 0.0F, 3.335F, -1.045F, 4.06F, -2.558F)
          lineToRelative(6.982F, 1.862F)
          curveTo(24.288F, 23.769F, 26.0F, 22.454F, 26.0F, 20.647F)
          verticalLineTo(7.352F)
          close()
          moveTo(8.5F, 19.56F)
          lineToRelative(5.572F, 1.486F)
          curveToRelative(-0.525F, 0.871F, -1.48F, 1.455F, -2.572F, 1.455F)
          curveToRelative(-1.637F, 0.0F, -2.968F, -1.312F, -3.0F, -2.941F)
          close()        
      }
    }
    return _megaphone28!!
  }

private var _megaphone28: ImageVector? = null
