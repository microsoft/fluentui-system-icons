package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOneQuarter28: ImageVector
  get() {
    if (_starOneQuarter28 != null) {
      return _starOneQuarter28!!
    }
    _starOneQuarter28 = fluentIcon(name = "Filled.StarOneQuarter28", 28f) {
      materialPath {
          moveTo(11.0F, 7.356F)
          lineTo(10.01F, 9.36F)
          lineToRelative(-6.017F, 0.874F)
          curveTo(3.221F, 10.347F, 2.75F, 11.003F, 2.75F, 11.68F)
          curveToRelative(0.0F, 0.365F, 0.138F, 0.735F, 0.44F, 1.03F)
          lineToRelative(4.354F, 4.244F)
          lineToRelative(-1.028F, 5.992F)
          curveToRelative(-0.108F, 0.631F, 0.193F, 1.182F, 0.66F, 1.475F)
          curveToRelative(0.41F, 0.257F, 0.946F, 0.316F, 1.444F, 0.054F)
          lineTo(11.0F, 23.223F)
          verticalLineTo(7.356F)
          close()        
      }
    }
    return _starOneQuarter28!!
  }

private var _starOneQuarter28: ImageVector? = null
