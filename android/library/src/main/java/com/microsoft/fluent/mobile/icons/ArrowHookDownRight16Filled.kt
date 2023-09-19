package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookDownRight16: ImageVector
  get() {
    if (_arrowHookDownRight16 != null) {
      return _arrowHookDownRight16!!
    }
    _arrowHookDownRight16 = fluentIcon(name = "Filled.ArrowHookDownRight16", 16f) {
      materialPath {
          moveTo(4.462F, 5.087F)
          curveTo(5.117F, 4.412F, 6.068F, 4.0F, 7.25F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveTo(10.664F, 4.0F, 11.0F, 4.336F, 11.0F, 4.75F)
          reflectiveCurveTo(10.664F, 5.5F, 10.25F, 5.5F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.818F, 0.0F, -1.367F, 0.276F, -1.712F, 0.631F)
          curveTo(5.185F, 6.497F, 5.0F, 6.992F, 5.0F, 7.5F)
          curveToRelative(0.0F, 0.51F, 0.185F, 1.004F, 0.538F, 1.368F)
          curveTo(5.883F, 9.224F, 6.432F, 9.5F, 7.25F, 9.5F)
          horizontalLineToRelative(3.19F)
          lineTo(9.72F, 8.78F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(10.44F, 11.0F)
          horizontalLineTo(7.25F)
          curveToRelative(-1.182F, 0.0F, -2.133F, -0.412F, -2.788F, -1.087F)
          curveTo(3.815F, 9.246F, 3.5F, 8.366F, 3.5F, 7.5F)
          curveToRelative(0.0F, -0.866F, 0.315F, -1.746F, 0.962F, -2.413F)
          close()        
      }
    }
    return _arrowHookDownRight16!!
  }

private var _arrowHookDownRight16: ImageVector? = null
