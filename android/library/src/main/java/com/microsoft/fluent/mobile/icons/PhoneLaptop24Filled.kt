package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneLaptop24: ImageVector
  get() {
    if (_phoneLaptop24 != null) {
      return _phoneLaptop24!!
    }
    _phoneLaptop24 = fluentIcon(name = "Filled.PhoneLaptop24", 24f) {
      materialPath {
          moveTo(8.254F, 8.003F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.783F, 1.75F, 1.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.966F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.967F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(4.504F)
          close()
          moveToRelative(-2.002F, 9.495F)
          horizontalLineToRelative(-0.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveTo(21.25F, 16.5F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.648F, 0.743F)
          lineTo(21.25F, 18.0F)
          lineTo(11.0F, 17.998F)
          verticalLineToRelative(-1.5F)
          horizontalLineToRelative(10.25F)
          close()
          moveToRelative(-3.0F, -11.5F)
          curveTo(19.216F, 5.0F, 20.0F, 5.784F, 20.0F, 6.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.967F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(11.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.055F, -0.816F, -1.918F, -1.85F, -1.995F)
          lineTo(9.0F, 7.0F)
          lineTo(4.0F, 6.999F)
          verticalLineTo(6.75F)
          curveTo(4.0F, 5.784F, 4.784F, 5.0F, 5.75F, 5.0F)
          horizontalLineToRelative(12.5F)
          close()        
      }
    }
    return _phoneLaptop24!!
  }

private var _phoneLaptop24: ImageVector? = null
