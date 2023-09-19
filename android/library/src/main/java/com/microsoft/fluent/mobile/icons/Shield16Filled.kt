package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shield16: ImageVector
  get() {
    if (_shield16 != null) {
      return _shield16!!
    }
    _shield16 = fluentIcon(name = "Filled.Shield16", 16f) {
      materialPath {
          moveTo(7.647F, 2.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveTo(9.595F, 3.39F, 10.969F, 4.0F, 12.5F, 4.0F)
          curveTo(12.776F, 4.0F, 13.0F, 4.224F, 13.0F, 4.5F)
          verticalLineToRelative(3.001F)
          curveToRelative(0.0F, 3.219F, -1.641F, 5.407F, -4.842F, 6.473F)
          curveToRelative(-0.102F, 0.035F, -0.213F, 0.035F, -0.316F, 0.0F)
          curveTo(4.642F, 12.908F, 3.0F, 10.72F, 3.0F, 7.501F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 4.224F, 3.224F, 4.0F, 3.5F, 4.0F)
          curveToRelative(1.53F, 0.0F, 2.904F, -0.611F, 4.147F, -1.854F)
          close()        
      }
    }
    return _shield16!!
  }

private var _shield16: ImageVector? = null
