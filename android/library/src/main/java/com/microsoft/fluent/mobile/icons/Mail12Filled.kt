package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mail12: ImageVector
  get() {
    if (_mail12 != null) {
      return _mail12!!
    }
    _mail12 = fluentIcon(name = "Filled.Mail12", 12f) {
      materialPath {
          moveTo(2.0F, 5.248F)
          verticalLineTo(7.5F)
          curveTo(2.0F, 8.328F, 2.672F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.328F, 9.0F, 10.0F, 8.328F, 10.0F, 7.5F)
          verticalLineTo(5.248F)
          lineTo(6.205F, 6.956F)
          curveToRelative(-0.13F, 0.059F, -0.28F, 0.059F, -0.41F, 0.0F)
          lineTo(2.0F, 5.248F)
          close()
          moveToRelative(0.037F, -1.08F)
          lineTo(6.0F, 5.952F)
          lineToRelative(3.963F, -1.784F)
          curveTo(9.813F, 3.5F, 9.214F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.786F, 3.0F, 2.188F, 3.5F, 2.037F, 4.168F)
          close()        
      }
    }
    return _mail12!!
  }

private var _mail12: ImageVector? = null
