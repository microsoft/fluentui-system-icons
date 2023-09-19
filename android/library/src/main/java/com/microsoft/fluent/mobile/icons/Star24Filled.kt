package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Star24: ImageVector
  get() {
    if (_star24 != null) {
      return _star24!!
    }
    _star24 = fluentIcon(name = "Filled.Star24", 24f) {
      materialPath {
          moveTo(10.788F, 3.102F)
          curveToRelative(0.495F, -1.003F, 1.926F, -1.003F, 2.421F, 0.0F)
          lineToRelative(2.358F, 4.778F)
          lineToRelative(5.273F, 0.766F)
          curveToRelative(1.107F, 0.16F, 1.549F, 1.522F, 0.748F, 2.303F)
          lineToRelative(-3.816F, 3.719F)
          lineToRelative(0.901F, 5.25F)
          curveToRelative(0.19F, 1.104F, -0.968F, 1.945F, -1.959F, 1.424F)
          lineToRelative(-4.716F, -2.48F)
          lineToRelative(-4.715F, 2.48F)
          curveToRelative(-0.99F, 0.52F, -2.148F, -0.32F, -1.96F, -1.423F)
          lineToRelative(0.901F, -5.251F)
          lineToRelative(-3.815F, -3.72F)
          curveToRelative(-0.801F, -0.78F, -0.359F, -2.141F, 0.748F, -2.302F)
          lineTo(8.43F, 7.88F)
          lineToRelative(2.358F, -4.778F)
          close()        
      }
    }
    return _star24!!
  }

private var _star24: ImageVector? = null
