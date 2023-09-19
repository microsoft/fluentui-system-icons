package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShieldTask16: ImageVector
  get() {
    if (_shieldTask16 != null) {
      return _shieldTask16!!
    }
    _shieldTask16 = fluentIcon(name = "Filled.ShieldTask16", 16f) {
      materialPath {
          moveTo(8.355F, 2.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveTo(6.404F, 3.388F, 5.03F, 4.0F, 3.5F, 4.0F)
          curveTo(3.224F, 4.0F, 3.0F, 4.224F, 3.0F, 4.5F)
          verticalLineToRelative(3.001F)
          curveToRelative(0.0F, 3.219F, 1.641F, 5.407F, 4.842F, 6.473F)
          curveToRelative(0.103F, 0.035F, 0.214F, 0.035F, 0.316F, 0.0F)
          curveTo(11.358F, 12.908F, 13.0F, 10.72F, 13.0F, 7.501F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 4.224F, 12.776F, 4.0F, 12.5F, 4.0F)
          curveToRelative(-1.531F, 0.0F, -2.905F, -0.61F, -4.145F, -1.853F)
          close()
          moveToRelative(2.499F, 4.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.194F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineTo(7.5F, 8.793F)
          lineToRelative(2.646F, -2.646F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()        
      }
    }
    return _shieldTask16!!
  }

private var _shieldTask16: ImageVector? = null
