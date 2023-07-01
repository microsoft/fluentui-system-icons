package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Diamond28: ImageVector
  get() {
    if (_diamond28 != null) {
      return _diamond28!!
    }
    _diamond28 = fluentIcon(name = "Filled.Diamond28", 28f) {
      materialPath {
          moveTo(3.732F, 15.77F)
          curveToRelative(-0.976F, -0.976F, -0.976F, -2.56F, 0.0F, -3.536F)
          lineToRelative(8.502F, -8.502F)
          curveToRelative(0.977F, -0.976F, 2.56F, -0.976F, 3.536F, 0.0F)
          lineToRelative(8.502F, 8.502F)
          curveToRelative(0.976F, 0.977F, 0.976F, 2.56F, 0.0F, 3.536F)
          lineToRelative(-8.502F, 8.502F)
          curveToRelative(-0.976F, 0.976F, -2.56F, 0.976F, -3.536F, 0.0F)
          lineTo(3.732F, 15.77F)
          close()        
      }
    }
    return _diamond28!!
  }

private var _diamond28: ImageVector? = null
