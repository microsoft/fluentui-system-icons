package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss24: ImageVector
  get() {
    if (_dismiss24 != null) {
      return _dismiss24!!
    }
    _dismiss24 = fluentIcon(name = "Filled.Dismiss24", 24f) {
      materialPath {
          moveTo(4.21F, 4.387F)
          lineToRelative(0.083F, -0.094F)
          curveToRelative(0.36F, -0.36F, 0.928F, -0.388F, 1.32F, -0.083F)
          lineToRelative(0.094F, 0.083F)
          lineTo(12.0F, 10.585F)
          lineToRelative(6.293F, -6.292F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(13.415F, 12.0F)
          lineToRelative(6.292F, 6.293F)
          curveToRelative(0.36F, 0.36F, 0.388F, 0.928F, 0.083F, 1.32F)
          lineToRelative(-0.083F, 0.094F)
          curveToRelative(-0.36F, 0.36F, -0.928F, 0.388F, -1.32F, 0.083F)
          lineToRelative(-0.094F, -0.083F)
          lineTo(12.0F, 13.415F)
          lineToRelative(-6.293F, 6.292F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(10.585F, 12.0F)
          lineTo(4.293F, 5.707F)
          curveToRelative(-0.36F, -0.36F, -0.388F, -0.928F, -0.083F, -1.32F)
          lineToRelative(0.083F, -0.094F)
          lineTo(4.21F, 4.387F)
          close()        
      }
    }
    return _dismiss24!!
  }

private var _dismiss24: ImageVector? = null
