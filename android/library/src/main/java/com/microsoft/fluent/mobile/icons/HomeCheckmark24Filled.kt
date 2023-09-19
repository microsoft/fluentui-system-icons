package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomeCheckmark24: ImageVector
  get() {
    if (_homeCheckmark24 != null) {
      return _homeCheckmark24!!
    }
    _homeCheckmark24 = fluentIcon(name = "Filled.HomeCheckmark24", 24f) {
      materialPath {
          moveTo(13.45F, 2.533F)
          curveToRelative(-0.837F, -0.707F, -2.063F, -0.707F, -2.9F, 0.0F)
          lineTo(3.8F, 8.228F)
          curveTo(3.291F, 8.655F, 3.0F, 9.284F, 3.0F, 9.948F)
          verticalLineToRelative(9.305F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(9.947F)
          curveToRelative(0.0F, -0.662F, -0.292F, -1.292F, -0.8F, -1.72F)
          lineToRelative(-6.75F, -5.694F)
          close()
          moveToRelative(2.334F, 8.747F)
          lineToRelative(-4.504F, 4.504F)
          curveToRelative(-0.14F, 0.14F, -0.331F, 0.22F, -0.53F, 0.22F)
          reflectiveCurveToRelative(-0.39F, -0.08F, -0.53F, -0.22F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.294F, 0.767F, -0.294F, 1.06F, 0.0F)
          lineToRelative(1.47F, 1.469F)
          lineToRelative(3.973F, -3.973F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.294F, 0.293F, 0.294F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _homeCheckmark24!!
  }

private var _homeCheckmark24: ImageVector? = null
