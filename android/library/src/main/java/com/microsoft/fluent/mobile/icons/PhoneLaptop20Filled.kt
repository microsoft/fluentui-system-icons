package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneLaptop20: ImageVector
  get() {
    if (_phoneLaptop20 != null) {
      return _phoneLaptop20!!
    }
    _phoneLaptop20 = fluentIcon(name = "Filled.PhoneLaptop20", 20f) {
      materialPath {
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveTo(16.328F, 3.0F, 17.0F, 3.672F, 17.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(10.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(10.0F, 15.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 14.0F, 17.5F, 14.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.0F)
          close()
          moveTo(2.0F, 8.5F)
          curveTo(2.0F, 7.672F, 2.672F, 7.0F, 3.5F, 7.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.328F, 7.0F, 9.0F, 7.672F, 9.0F, 8.5F)
          verticalLineToRelative(8.0F)
          curveTo(9.0F, 17.328F, 8.328F, 18.0F, 7.5F, 18.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(2.672F, 18.0F, 2.0F, 17.328F, 2.0F, 16.5F)
          verticalLineToRelative(-8.0F)
          close()
          moveTo(5.0F, 15.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(4.724F, 16.0F, 5.0F, 16.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(6.276F, 15.0F, 6.0F, 15.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _phoneLaptop20!!
  }

private var _phoneLaptop20: ImageVector? = null
