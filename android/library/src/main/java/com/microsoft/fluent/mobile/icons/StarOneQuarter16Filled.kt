package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOneQuarter16: ImageVector
  get() {
    if (_starOneQuarter16 != null) {
      return _starOneQuarter16!!
    }
    _starOneQuarter16 = fluentIcon(name = "Filled.StarOneQuarter16", 16f) {
      materialPath {
          moveTo(6.0F, 4.52F)
          lineTo(5.673F, 5.184F)
          lineTo(2.272F, 5.678F)
          curveTo(1.792F, 5.748F, 1.499F, 6.156F, 1.5F, 6.576F)
          curveToRelative(0.0F, 0.226F, 0.086F, 0.455F, 0.273F, 0.637F)
          lineToRelative(2.46F, 2.399F)
          lineToRelative(-0.58F, 3.387F)
          curveToRelative(-0.042F, 0.247F, 0.016F, 0.474F, 0.138F, 0.654F)
          curveToRelative(0.241F, 0.356F, 0.73F, 0.526F, 1.168F, 0.295F)
          lineTo(6.0F, 13.401F)
          verticalLineTo(4.52F)
          close()        
      }
    }
    return _starOneQuarter16!!
  }

private var _starOneQuarter16: ImageVector? = null
