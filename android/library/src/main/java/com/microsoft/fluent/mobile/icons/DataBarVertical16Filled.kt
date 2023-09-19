package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataBarVertical16: ImageVector
  get() {
    if (_dataBarVertical16 != null) {
      return _dataBarVertical16!!
    }
    _dataBarVertical16 = fluentIcon(name = "Filled.DataBarVertical16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          reflectiveCurveTo(5.0F, 13.328F, 5.0F, 12.5F)
          verticalLineToRelative(-9.0F)
          curveTo(5.0F, 2.672F, 4.328F, 2.0F, 3.5F, 2.0F)
          close()
          moveToRelative(4.0F, 3.0F)
          curveTo(6.672F, 5.0F, 6.0F, 5.672F, 6.0F, 6.5F)
          verticalLineToRelative(6.0F)
          curveTo(6.0F, 13.328F, 6.672F, 14.0F, 7.5F, 14.0F)
          reflectiveCurveTo(9.0F, 13.328F, 9.0F, 12.5F)
          verticalLineToRelative(-6.0F)
          curveTo(9.0F, 5.672F, 8.328F, 5.0F, 7.5F, 5.0F)
          close()
          moveToRelative(4.0F, 3.0F)
          curveTo(10.672F, 8.0F, 10.0F, 8.672F, 10.0F, 9.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveTo(13.0F, 8.672F, 12.328F, 8.0F, 11.5F, 8.0F)
          close()        
      }
    }
    return _dataBarVertical16!!
  }

private var _dataBarVertical16: ImageVector? = null
