package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.New16: ImageVector
  get() {
    if (_new16 != null) {
      return _new16!!
    }
    _new16 = fluentIcon(name = "Regular.New16", 16f) {
      materialPath {
          moveTo(3.502F, 11.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(8.502F, 12.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.277F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(3.502F, 11.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveToRelative(1.646F, -5.854F)
          curveTo(5.322F, 4.973F, 5.591F, 4.954F, 5.786F, 5.09F)
          lineToRelative(0.07F, 0.057F)
          lineToRelative(3.998F, 4.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveTo(9.68F, 10.027F, 9.41F, 10.046F, 9.216F, 9.91F)
          lineToRelative(-0.07F, -0.057F)
          lineToRelative(-3.998F, -4.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(11.502F, 3.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.491F, 0.41F)
          lineToRelative(0.009F, 0.09F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.246F, 0.0F, -0.45F, -0.177F, -0.492F, -0.41F)
          lineTo(11.002F, 8.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.276F, 0.223F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _new16!!
  }

private var _new16: ImageVector? = null
