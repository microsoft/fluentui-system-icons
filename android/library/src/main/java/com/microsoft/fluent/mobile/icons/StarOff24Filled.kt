package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOff24: ImageVector
  get() {
    if (_starOff24 != null) {
      return _starOff24!!
    }
    _starOff24 = fluentIcon(name = "Filled.StarOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(4.804F, 4.805F)
          lineTo(3.16F, 8.646F)
          curveToRelative(-1.107F, 0.161F, -1.55F, 1.522F, -0.748F, 2.303F)
          lineToRelative(3.815F, 3.719F)
          lineToRelative(-0.9F, 5.251F)
          curveToRelative(-0.19F, 1.103F, 0.968F, 1.944F, 1.959F, 1.423F)
          lineTo(12.0F, 18.863F)
          lineToRelative(4.716F, 2.48F)
          curveToRelative(0.99F, 0.52F, 2.148F, -0.32F, 1.959F, -1.424F)
          lineToRelative(-0.038F, -0.22F)
          lineToRelative(2.082F, 2.081F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(18.31F, 8.73F)
          lineToRelative(-3.777F, 3.68F)
          lineTo(9.3F, 6.12F)
          lineToRelative(1.489F, -3.016F)
          curveToRelative(0.495F, -1.004F, 1.926F, -1.004F, 2.421F, 0.0F)
          lineToRelative(2.358F, 4.777F)
          lineToRelative(5.272F, 0.766F)
          curveToRelative(1.108F, 0.161F, 1.55F, 1.522F, 0.749F, 2.303F)
          close()        
      }
    }
    return _starOff24!!
  }

private var _starOff24: ImageVector? = null
