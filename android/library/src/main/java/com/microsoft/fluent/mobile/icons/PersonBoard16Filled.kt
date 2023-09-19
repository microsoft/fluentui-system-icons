package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonBoard16: ImageVector
  get() {
    if (_personBoard16 != null) {
      return _personBoard16!!
    }
    _personBoard16 = fluentIcon(name = "Filled.PersonBoard16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 10.88F, 3.12F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(12.0F, 3.12F, 10.88F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(7.0F, 6.5F)
          curveTo(6.172F, 6.5F, 5.5F, 5.828F, 5.5F, 5.0F)
          reflectiveCurveTo(6.172F, 3.5F, 7.0F, 3.5F)
          reflectiveCurveTo(8.5F, 4.172F, 8.5F, 5.0F)
          reflectiveCurveTo(7.828F, 6.5F, 7.0F, 6.5F)
          close()
          moveTo(5.25F, 7.125F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.621F, 0.0F, 1.125F, 0.504F, 1.125F, 1.125F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, 0.4F, -0.171F, 0.886F, -0.64F, 1.263F)
          curveToRelative(-0.464F, 0.372F, -1.184F, 0.612F, -2.237F, 0.612F)
          curveToRelative(-1.055F, 0.0F, -1.774F, -0.245F, -2.236F, -0.62F)
          curveTo(4.296F, 9.377F, 4.125F, 8.893F, 4.125F, 8.5F)
          verticalLineTo(8.25F)
          curveToRelative(0.0F, -0.622F, 0.504F, -1.125F, 1.125F, -1.125F)
          close()
          moveTo(4.5F, 13.0F)
          curveToRelative(0.456F, 0.607F, 1.182F, 1.0F, 2.0F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.818F, -0.393F, -1.544F, -1.0F, -2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _personBoard16!!
  }

private var _personBoard16: ImageVector? = null
