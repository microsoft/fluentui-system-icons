package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pill16: ImageVector
  get() {
    if (_pill16 != null) {
      return _pill16!!
    }
    _pill16 = fluentIcon(name = "Filled.Pill16", 16f) {
      materialPath {
          moveTo(8.0F, 3.05F)
          curveToRelative(1.367F, -1.366F, 3.583F, -1.366F, 4.95F, 0.0F)
          curveToRelative(1.367F, 1.367F, 1.367F, 3.583F, 0.0F, 4.95F)
          lineTo(8.0F, 12.95F)
          curveToRelative(-1.367F, 1.367F, -3.583F, 1.367F, -4.95F, 0.0F)
          curveToRelative(-1.366F, -1.367F, -1.366F, -3.583F, 0.0F, -4.95F)
          lineTo(8.0F, 3.05F)
          close()
          moveToRelative(2.122F, 6.365F)
          lineToRelative(2.12F, -2.122F)
          curveToRelative(0.977F, -0.976F, 0.977F, -2.56F, 0.0F, -3.535F)
          curveToRelative(-0.975F, -0.977F, -2.558F, -0.977F, -3.535F, 0.0F)
          lineToRelative(-2.12F, 2.12F)
          lineToRelative(3.535F, 3.537F)
          close()
          moveToRelative(-2.268F, 1.439F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          close()        
      }
    }
    return _pill16!!
  }

private var _pill16: ImageVector? = null
