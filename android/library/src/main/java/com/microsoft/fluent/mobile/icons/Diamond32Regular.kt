package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Diamond32: ImageVector
  get() {
    if (_diamond32 != null) {
      return _diamond32!!
    }
    _diamond32 = fluentIcon(name = "Regular.Diamond32", 32f) {
      materialPath {
          moveTo(3.879F, 18.123F)
          curveToRelative(-1.172F, -1.172F, -1.172F, -3.071F, 0.0F, -4.243F)
          lineTo(13.88F, 3.879F)
          curveToRelative(1.172F, -1.172F, 3.071F, -1.172F, 4.243F, 0.0F)
          lineTo(28.124F, 13.88F)
          curveToRelative(1.172F, 1.172F, 1.172F, 3.071F, 0.0F, 4.243F)
          lineTo(18.123F, 28.124F)
          curveToRelative(-1.172F, 1.172F, -3.071F, 1.172F, -4.243F, 0.0F)
          lineTo(3.879F, 18.123F)
          close()
          moveToRelative(1.414F, -2.829F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.415F)
          lineToRelative(10.001F, 10.0F)
          curveToRelative(0.39F, 0.391F, 1.024F, 0.391F, 1.414F, 0.0F)
          lineToRelative(10.002F, -10.0F)
          curveToRelative(0.39F, -0.391F, 0.39F, -1.024F, 0.0F, -1.415F)
          lineTo(16.708F, 5.293F)
          curveToRelative(-0.39F, -0.39F, -1.023F, -0.39F, -1.414F, 0.0F)
          lineTo(5.293F, 15.294F)
          close()        
      }
    }
    return _diamond32!!
  }

private var _diamond32: ImageVector? = null
