package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOneQuarter24: ImageVector
  get() {
    if (_starOneQuarter24 != null) {
      return _starOneQuarter24!!
    }
    _starOneQuarter24 = fluentIcon(name = "Filled.StarOneQuarter24", 24f) {
      materialPath {
          moveTo(9.0F, 6.725F)
          lineTo(8.43F, 7.88F)
          lineTo(3.157F, 8.646F)
          curveToRelative(-1.107F, 0.16F, -1.55F, 1.522F, -0.748F, 2.303F)
          lineToRelative(3.815F, 3.719F)
          lineToRelative(-0.9F, 5.25F)
          curveToRelative(-0.15F, 0.871F, 0.54F, 1.579F, 1.325F, 1.582F)
          curveToRelative(0.21F, 0.001F, 0.426F, -0.048F, 0.636F, -0.158F)
          lineTo(9.0F, 20.44F)
          verticalLineTo(6.725F)
          close()        
      }
    }
    return _starOneQuarter24!!
  }

private var _starOneQuarter24: ImageVector? = null
