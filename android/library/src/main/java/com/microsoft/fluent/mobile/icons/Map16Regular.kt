package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Map16: ImageVector
  get() {
    if (_map16 != null) {
      return _map16!!
    }
    _map16 = fluentIcon(name = "Regular.Map16", 16f) {
      materialPath {
          moveTo(5.235F, 2.076F)
          curveToRelative(0.148F, -0.092F, 0.333F, -0.101F, 0.489F, -0.023F)
          lineToRelative(4.749F, 2.374F)
          lineToRelative(3.762F, -2.351F)
          curveToRelative(0.154F, -0.096F, 0.348F, -0.101F, 0.507F, -0.013F)
          curveTo(14.902F, 2.15F, 15.0F, 2.318F, 15.0F, 2.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.172F, -0.089F, 0.333F, -0.235F, 0.424F)
          lineToRelative(-4.0F, 2.5F)
          curveToRelative(-0.148F, 0.092F, -0.333F, 0.101F, -0.489F, 0.023F)
          lineToRelative(-4.749F, -2.374F)
          lineToRelative(-3.762F, 2.351F)
          curveToRelative(-0.154F, 0.096F, -0.348F, 0.101F, -0.507F, 0.013F)
          curveTo(1.098F, 13.85F, 1.0F, 13.682F, 1.0F, 13.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.172F, 0.089F, -0.333F, 0.235F, -0.424F)
          lineToRelative(4.0F, -2.5F)
          close()
          moveTo(6.0F, 10.691F)
          lineToRelative(4.0F, 2.0F)
          verticalLineTo(5.309F)
          lineToRelative(-4.0F, -2.0F)
          verticalLineToRelative(7.382F)
          close()
          moveTo(5.0F, 3.402F)
          lineTo(2.0F, 5.277F)
          verticalLineToRelative(7.32F)
          lineToRelative(3.0F, -1.874F)
          verticalLineToRelative(-7.32F)
          close()
          moveToRelative(6.0F, 1.875F)
          verticalLineToRelative(7.32F)
          lineToRelative(3.0F, -1.874F)
          verticalLineToRelative(-7.32F)
          lineToRelative(-3.0F, 1.874F)
          close()        
      }
    }
    return _map16!!
  }

private var _map16: ImageVector? = null
