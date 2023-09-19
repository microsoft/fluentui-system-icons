package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOneQuarter20: ImageVector
  get() {
    if (_starOneQuarter20 != null) {
      return _starOneQuarter20!!
    }
    _starOneQuarter20 = fluentIcon(name = "Filled.StarOneQuarter20", 20f) {
      materialPath {
          moveTo(8.0F, 5.137F)
          lineTo(7.174F, 6.81F)
          lineTo(2.857F, 7.438F)
          curveTo(2.037F, 7.557F, 1.71F, 8.565F, 2.303F, 9.143F)
          lineToRelative(3.124F, 3.045F)
          lineToRelative(-0.738F, 4.3F)
          curveToRelative(-0.114F, 0.665F, 0.434F, 1.202F, 1.037F, 1.17F)
          curveToRelative(0.138F, -0.008F, 0.279F, -0.045F, 0.415F, -0.117F)
          lineTo(8.0F, 16.564F)
          verticalLineTo(5.137F)
          close()        
      }
    }
    return _starOneQuarter20!!
  }

private var _starOneQuarter20: ImageVector? = null
