package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pin20: ImageVector
  get() {
    if (_pin20 != null) {
      return _pin20!!
    }
    _pin20 = fluentIcon(name = "Regular.Pin20", 20f) {
      materialPath {
          moveTo(10.122F, 3.137F)
          curveToRelative(0.61F, -1.22F, 2.238F, -1.485F, 3.203F, -0.52F)
          lineToRelative(4.057F, 4.057F)
          curveToRelative(0.965F, 0.965F, 0.701F, 2.593F, -0.52F, 3.203F)
          lineToRelative(-3.458F, 1.73F)
          curveToRelative(-0.329F, 0.164F, -0.586F, 0.443F, -0.722F, 0.784F)
          lineToRelative(-1.436F, 3.59F)
          curveToRelative(-0.267F, 0.667F, -1.128F, 0.843F, -1.636F, 0.336F)
          lineTo(7.0F, 13.707F)
          lineToRelative(-3.293F, 3.292F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(-0.707F)
          lineTo(6.293F, 13.0F)
          lineToRelative(-2.61F, -2.61F)
          curveTo(3.175F, 9.881F, 3.352F, 9.02F, 4.018F, 8.754F)
          lineToRelative(3.59F, -1.436F)
          curveTo(7.95F, 7.18F, 8.228F, 6.923F, 8.393F, 6.595F)
          lineToRelative(1.73F, -3.459F)
          close()
          moveToRelative(2.496F, 0.188F)
          curveToRelative(-0.483F, -0.483F, -1.296F, -0.351F, -1.601F, 0.26F)
          lineToRelative(-1.73F, 3.458F)
          curveTo(9.013F, 7.59F, 8.548F, 8.019F, 7.98F, 8.246F)
          lineTo(4.39F, 9.682F)
          lineToRelative(5.927F, 5.928F)
          lineToRelative(1.436F, -3.59F)
          curveToRelative(0.228F, -0.569F, 0.656F, -1.034F, 1.204F, -1.308F)
          lineToRelative(3.458F, -1.73F)
          curveToRelative(0.61F, -0.304F, 0.742F, -1.118F, 0.26F, -1.6F)
          lineToRelative(-4.057F, -4.058F)
          close()        
      }
    }
    return _pin20!!
  }

private var _pin20: ImageVector? = null
