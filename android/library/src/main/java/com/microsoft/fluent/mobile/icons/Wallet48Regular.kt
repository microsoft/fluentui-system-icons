package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wallet48: ImageVector
  get() {
    if (_wallet48 != null) {
      return _wallet48!!
    }
    _wallet48 = fluentIcon(name = "Regular.Wallet48", 48f) {
      materialPath {
          moveTo(32.25F, 26.0F)
          curveTo(31.56F, 26.0F, 31.0F, 26.56F, 31.0F, 27.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(37.44F, 26.0F, 36.75F, 26.0F)
          horizontalLineToRelative(-4.5F)
          close()
          moveTo(6.0F, 10.0F)
          verticalLineToRelative(25.75F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(24.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-17.5F)
          curveToRelative(0.0F, -3.024F, -2.147F, -5.546F, -5.0F, -6.125F)
          verticalLineTo(10.25F)
          curveTo(38.0F, 7.903F, 36.097F, 6.0F, 33.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          curveToRelative(-2.263F, 0.0F, -4.113F, 1.77F, -4.243F, 4.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(29.5F, 0.25F)
          verticalLineTo(12.0F)
          horizontalLineTo(10.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          reflectiveCurveTo(9.284F, 8.5F, 10.25F, 8.5F)
          horizontalLineToRelative(23.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          close()
          moveToRelative(-27.0F, 4.25F)
          horizontalLineToRelative(28.25F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineToRelative(17.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-24.5F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineTo(14.5F)
          close()        
      }
    }
    return _wallet48!!
  }

private var _wallet48: ImageVector? = null
