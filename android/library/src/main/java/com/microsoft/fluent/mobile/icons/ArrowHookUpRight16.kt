package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookUpRight16: ImageVector
  get() {
    if (_arrowHookUpRight16 != null) {
      return _arrowHookUpRight16!!
    }
    _arrowHookUpRight16 = fluentIcon(name = "Filled.ArrowHookUpRight16", 16f) {
      materialPath {
          moveTo(4.462F, 10.913F)
          curveTo(5.117F, 11.588F, 6.068F, 12.0F, 7.25F, 12.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.818F, 0.0F, -1.367F, -0.276F, -1.712F, -0.632F)
          curveTo(5.185F, 9.504F, 5.0F, 9.01F, 5.0F, 8.5F)
          curveToRelative(0.0F, -0.51F, 0.185F, -1.004F, 0.538F, -1.369F)
          curveTo(5.883F, 6.777F, 6.432F, 6.5F, 7.25F, 6.5F)
          horizontalLineToRelative(3.19F)
          lineTo(9.72F, 7.22F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(10.44F, 5.0F)
          horizontalLineTo(7.25F)
          curveTo(6.068F, 5.0F, 5.117F, 5.412F, 4.462F, 6.087F)
          curveTo(3.815F, 6.754F, 3.5F, 7.634F, 3.5F, 8.5F)
          curveToRelative(0.0F, 0.866F, 0.315F, 1.746F, 0.962F, 2.413F)
          close()        
      }
    }
    return _arrowHookUpRight16!!
  }

private var _arrowHookUpRight16: ImageVector? = null
