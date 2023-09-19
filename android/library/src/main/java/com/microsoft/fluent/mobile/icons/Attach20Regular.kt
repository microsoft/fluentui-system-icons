package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Attach20: ImageVector
  get() {
    if (_attach20 != null) {
      return _attach20!!
    }
    _attach20 = fluentIcon(name = "Regular.Attach20", 20f) {
      materialPath {
          moveTo(4.828F, 10.485F)
          lineToRelative(5.657F, -5.657F)
          curveToRelative(1.172F, -1.172F, 3.071F, -1.172F, 4.243F, 0.0F)
          curveToRelative(1.171F, 1.171F, 1.171F, 3.071F, 0.0F, 4.242F)
          lineTo(8.01F, 15.788F)
          curveToRelative(-0.586F, 0.586F, -1.535F, 0.586F, -2.121F, 0.0F)
          curveToRelative(-0.586F, -0.586F, -0.586F, -1.536F, 0.0F, -2.121F)
          lineToRelative(6.01F, -6.01F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.513F, 0.0F, -0.708F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-6.01F, 6.01F)
          curveToRelative(-0.977F, 0.977F, -0.977F, 2.56F, 0.0F, 3.536F)
          curveToRelative(0.976F, 0.976F, 2.559F, 0.976F, 3.535F, 0.0F)
          lineToRelative(6.718F, -6.717F)
          curveToRelative(1.562F, -1.562F, 1.562F, -4.095F, 0.0F, -5.657F)
          curveToRelative(-1.562F, -1.562F, -4.095F, -1.562F, -5.657F, 0.0F)
          lineTo(4.12F, 9.778F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _attach20!!
  }

private var _attach20: ImageVector? = null
