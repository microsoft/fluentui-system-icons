package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonClock16: ImageVector
  get() {
    if (_personClock16 != null) {
      return _personClock16!!
    }
    _personClock16 = fluentIcon(name = "Filled.PersonClock16", 16f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, 1.803F, 1.555F, 3.653F, 4.222F, 3.957F)
          curveTo(5.458F, 13.012F, 5.0F, 11.809F, 5.0F, 10.5F)
          curveTo(5.0F, 9.6F, 5.216F, 8.75F, 5.6F, 8.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 8.0F, 2.0F, 8.672F, 2.0F, 9.5F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(4.327F, -3.083F)
          curveTo(7.156F, 5.952F, 8.313F, 5.28F, 9.626F, 5.07F)
          curveTo(9.706F, 4.81F, 9.75F, 4.535F, 9.75F, 4.25F)
          curveTo(9.75F, 2.731F, 8.519F, 1.5F, 7.0F, 1.5F)
          reflectiveCurveTo(4.25F, 2.731F, 4.25F, 4.25F)
          curveToRelative(0.0F, 1.287F, 0.884F, 2.367F, 2.077F, 2.667F)
          close()
          moveTo(15.0F, 10.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveTo(10.5F, 8.0F)
          curveTo(10.224F, 8.0F, 10.0F, 8.224F, 10.0F, 8.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(12.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.276F, 10.0F, 12.0F, 10.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(8.5F)
          curveTo(11.0F, 8.224F, 10.776F, 8.0F, 10.5F, 8.0F)
          close()        
      }
    }
    return _personClock16!!
  }

private var _personClock16: ImageVector? = null
