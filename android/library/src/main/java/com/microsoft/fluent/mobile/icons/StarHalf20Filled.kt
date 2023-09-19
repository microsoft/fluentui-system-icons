package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarHalf20: ImageVector
  get() {
    if (_starHalf20 != null) {
      return _starHalf20!!
    }
    _starHalf20 = fluentIcon(name = "Filled.StarHalf20", 20f) {
      materialPath {
          moveTo(10.0F, 2.342F)
          curveToRelative(-0.356F, 0.0F, -0.713F, 0.186F, -0.896F, 0.557F)
          lineToRelative(-1.93F, 3.912F)
          lineToRelative(-4.317F, 0.627F)
          curveToRelative(-0.82F, 0.12F, -1.147F, 1.127F, -0.554F, 1.706F)
          lineToRelative(3.124F, 3.044F)
          lineToRelative(-0.738F, 4.3F)
          curveToRelative(-0.14F, 0.816F, 0.718F, 1.44F, 1.451F, 1.054F)
          lineToRelative(3.86F, -2.03F)
          verticalLineTo(2.342F)
          close()        
      }
    }
    return _starHalf20!!
  }

private var _starHalf20: ImageVector? = null
