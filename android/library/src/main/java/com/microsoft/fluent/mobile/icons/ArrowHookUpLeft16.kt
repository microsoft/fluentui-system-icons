package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookUpLeft16: ImageVector
  get() {
    if (_arrowHookUpLeft16 != null) {
      return _arrowHookUpLeft16!!
    }
    _arrowHookUpLeft16 = fluentIcon(name = "Filled.ArrowHookUpLeft16", 16f) {
      materialPath {
          moveTo(5.0F, 11.25F)
          curveTo(5.0F, 11.664F, 5.336F, 12.0F, 5.75F, 12.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.182F, 0.0F, 2.133F, -0.412F, 2.788F, -1.087F)
          curveTo(12.185F, 10.246F, 12.5F, 9.366F, 12.5F, 8.5F)
          curveToRelative(0.0F, -0.866F, -0.315F, -1.746F, -0.962F, -2.413F)
          curveTo(10.883F, 5.412F, 9.932F, 5.0F, 8.75F, 5.0F)
          horizontalLineTo(5.56F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(5.56F, 6.5F)
          horizontalLineToRelative(3.19F)
          curveToRelative(0.818F, 0.0F, 1.367F, 0.276F, 1.712F, 0.631F)
          curveTo(10.815F, 7.497F, 11.0F, 7.992F, 11.0F, 8.5F)
          curveToRelative(0.0F, 0.51F, -0.185F, 1.004F, -0.538F, 1.368F)
          curveTo(10.117F, 10.224F, 9.568F, 10.5F, 8.75F, 10.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(5.336F, 10.5F, 5.0F, 10.836F, 5.0F, 11.25F)
          close()        
      }
    }
    return _arrowHookUpLeft16!!
  }

private var _arrowHookUpLeft16: ImageVector? = null
