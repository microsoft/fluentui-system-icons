package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRedo28: ImageVector
  get() {
    if (_arrowRedo28 != null) {
      return _arrowRedo28!!
    }
    _arrowRedo28 = fluentIcon(name = "Regular.ArrowRedo28", 28f) {
      materialPath {
          moveTo(7.134F, 4.654F)
          curveTo(9.613F, 2.892F, 13.0F, 3.166F, 15.162F, 5.304F)
          lineToRelative(6.27F, 6.195F)
          horizontalLineToRelative(-7.679F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.199F, 0.0F, 0.39F, -0.079F, 0.53F, -0.22F)
          curveToRelative(0.141F, -0.14F, 0.22F, -0.33F, 0.22F, -0.53F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(7.7F)
          lineToRelative(-6.287F, -6.214F)
          curveToRelative(-2.681F, -2.65F, -6.879F, -2.988F, -9.951F, -0.804F)
          curveToRelative(-3.991F, 2.838F, -4.388F, 8.62F, -0.82F, 11.975F)
          lineToRelative(11.04F, 10.39F)
          curveToRelative(0.302F, 0.283F, 0.777F, 0.269F, 1.06F, -0.033F)
          curveToRelative(0.285F, -0.302F, 0.27F, -0.776F, -0.032F, -1.06F)
          lineToRelative(-11.04F, -10.39F)
          curveToRelative(-2.878F, -2.707F, -2.559F, -7.37F, 0.661F, -9.66F)
          close()        
      }
    }
    return _arrowRedo28!!
  }

private var _arrowRedo28: ImageVector? = null
