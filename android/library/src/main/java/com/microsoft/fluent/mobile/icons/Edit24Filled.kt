package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Edit24: ImageVector
  get() {
    if (_edit24 != null) {
      return _edit24!!
    }
    _edit24 = fluentIcon(name = "Filled.Edit24", 24f) {
      materialPath {
          moveTo(15.891F, 3.048F)
          curveToRelative(1.397F, -1.397F, 3.663F, -1.397F, 5.06F, 0.0F)
          curveToRelative(1.398F, 1.397F, 1.398F, 3.663F, 0.001F, 5.06F)
          lineTo(20.06F, 9.002F)
          lineTo(15.0F, 3.94F)
          lineToRelative(0.891F, -0.892F)
          close()
          moveTo(13.94F, 5.001F)
          lineTo(3.94F, 15.0F)
          curveToRelative(-0.406F, 0.406F, -0.692F, 0.917F, -0.825F, 1.476F)
          lineTo(2.02F, 21.078F)
          curveToRelative(-0.06F, 0.253F, 0.015F, 0.52F, 0.2F, 0.704F)
          curveToRelative(0.184F, 0.184F, 0.45F, 0.26F, 0.704F, 0.199F)
          lineToRelative(4.601F, -1.096F)
          curveToRelative(0.56F, -0.133F, 1.07F, -0.418F, 1.477F, -0.825F)
          lineTo(19.0F, 10.061F)
          lineToRelative(-5.061F, -5.06F)
          close()        
      }
    }
    return _edit24!!
  }

private var _edit24: ImageVector? = null
