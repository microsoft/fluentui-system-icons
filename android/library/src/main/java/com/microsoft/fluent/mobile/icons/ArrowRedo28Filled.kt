package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRedo28: ImageVector
  get() {
    if (_arrowRedo28 != null) {
      return _arrowRedo28!!
    }
    _arrowRedo28 = fluentIcon(name = "Filled.ArrowRedo28", 28f) {
      materialPath {
          moveTo(7.011F, 5.436F)
          curveToRelative(2.24F, -2.015F, 5.654F, -1.965F, 7.833F, 0.115F)
          lineTo(20.552F, 11.0F)
          horizontalLineToRelative(-6.551F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.447F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(6.618F)
          lineToRelative(-5.776F, -5.514F)
          curveTo(13.289F, 1.302F, 8.69F, 1.234F, 5.673F, 3.95F)
          curveToRelative(-3.324F, 2.991F, -3.439F, 8.166F, -0.25F, 11.302F)
          lineToRelative(10.632F, 10.46F)
          curveToRelative(0.394F, 0.388F, 1.027F, 0.383F, 1.415F, -0.01F)
          curveToRelative(0.387F, -0.394F, 0.382F, -1.028F, -0.012F, -1.415F)
          lineTo(6.825F, 13.827F)
          curveToRelative(-2.367F, -2.329F, -2.282F, -6.17F, 0.186F, -8.39F)
          close()        
      }
    }
    return _arrowRedo28!!
  }

private var _arrowRedo28: ImageVector? = null
