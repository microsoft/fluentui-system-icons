package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Folder20: ImageVector
  get() {
    if (_folder20 != null) {
      return _folder20!!
    }
    _folder20 = fluentIcon(name = "Filled.Folder20", 20f) {
      materialPath {
          moveTo(10.565F, 4.5F)
          horizontalLineTo(15.5F)
          curveToRelative(1.27F, 0.0F, 2.32F, 0.947F, 2.479F, 2.174F)
          lineToRelative(0.016F, 0.162F)
          lineTo(18.0F, 7.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 1.325F, -1.032F, 2.41F, -2.336F, 2.495F)
          lineTo(15.5F, 17.0F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-1.325F, 0.0F, -2.41F, -1.031F, -2.495F, -2.336F)
          lineTo(2.0F, 14.5F)
          verticalLineToRelative(-7.0F)
          horizontalLineToRelative(5.07F)
          lineToRelative(0.154F, -0.008F)
          curveTo(7.528F, 7.461F, 7.815F, 7.338F, 8.047F, 7.14F)
          lineToRelative(0.111F, -0.106F)
          lineTo(10.565F, 4.5F)
          close()
          moveTo(7.167F, 3.0F)
          curveToRelative(0.27F, 0.0F, 0.535F, 0.073F, 0.765F, 0.21F)
          lineTo(8.067F, 3.3F)
          lineToRelative(1.318F, 0.989F)
          lineToRelative(-1.952F, 2.055F)
          lineTo(7.373F, 6.4F)
          curveTo(7.307F, 6.448F, 7.231F, 6.48F, 7.151F, 6.493F)
          lineTo(7.071F, 6.5F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -1.325F, 1.031F, -2.41F, 2.336F, -2.495F)
          lineTo(4.5F, 3.0F)
          horizontalLineToRelative(2.667F)
          close()        
      }
    }
    return _folder20!!
  }

private var _folder20: ImageVector? = null
