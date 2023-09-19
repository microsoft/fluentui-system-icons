package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Video16: ImageVector
  get() {
    if (_video16 != null) {
      return _video16!!
    }
    _video16 = fluentIcon(name = "Filled.Video16", 16f) {
      materialPath {
          moveTo(3.5F, 2.5F)
          curveTo(2.12F, 2.5F, 1.0F, 3.62F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(10.684F, 1.61F)
          lineTo(12.0F, 5.893F)
          verticalLineToRelative(4.215F)
          lineToRelative(2.184F, 1.78F)
          curveTo(14.511F, 12.151F, 15.0F, 11.92F, 15.0F, 11.497F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -0.421F, -0.49F, -0.654F, -0.816F, -0.387F)
          close()        
      }
    }
    return _video16!!
  }

private var _video16: ImageVector? = null
