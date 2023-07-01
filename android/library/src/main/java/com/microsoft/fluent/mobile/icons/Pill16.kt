package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pill16: ImageVector
  get() {
    if (_pill16 != null) {
      return _pill16!!
    }
    _pill16 = fluentIcon(name = "Regular.Pill16", 16f) {
      materialPath {
          moveTo(7.354F, 10.354F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          close()
          moveTo(12.95F, 3.05F)
          curveToRelative(-1.367F, -1.367F, -3.583F, -1.367F, -4.95F, 0.0F)
          lineTo(3.05F, 8.0F)
          curveToRelative(-1.366F, 1.366F, -1.366F, 3.582F, 0.0F, 4.949F)
          curveToRelative(1.367F, 1.367F, 3.583F, 1.367F, 4.95F, 0.0F)
          lineTo(12.95F, 8.0F)
          curveToRelative(1.367F, -1.367F, 1.367F, -3.583F, 0.0F, -4.95F)
          close()
          moveTo(5.879F, 6.585F)
          lineToRelative(3.536F, 3.536F)
          lineToRelative(-2.122F, 2.12F)
          curveToRelative(-0.976F, 0.977F, -2.56F, 0.977F, -3.535F, 0.0F)
          curveToRelative(-0.977F, -0.975F, -0.977F, -2.558F, 0.0F, -3.535F)
          lineToRelative(2.121F, -2.12F)
          close()
          moveToRelative(6.364F, 0.707F)
          lineToRelative(-2.121F, 2.122F)
          lineToRelative(-3.536F, -3.536F)
          lineToRelative(2.121F, -2.121F)
          curveToRelative(0.977F, -0.977F, 2.56F, -0.977F, 3.536F, 0.0F)
          curveToRelative(0.976F, 0.976F, 0.976F, 2.559F, 0.0F, 3.535F)
          close()        
      }
    }
    return _pill16!!
  }

private var _pill16: ImageVector? = null
