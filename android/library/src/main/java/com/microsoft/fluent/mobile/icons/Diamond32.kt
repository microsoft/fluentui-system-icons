package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Diamond32: ImageVector
  get() {
    if (_diamond32 != null) {
      return _diamond32!!
    }
    _diamond32 = fluentIcon(name = "Filled.Diamond32", 32f) {
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
      }
    }
    return _diamond32!!
  }

private var _diamond32: ImageVector? = null
