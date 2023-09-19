package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Comma24: ImageVector
  get() {
    if (_comma24 != null) {
      return _comma24!!
    }
    _comma24 = fluentIcon(name = "Regular.Comma24", 24f) {
      materialPath {
          moveTo(14.62F, 12.023F)
          curveTo(13.918F, 12.632F, 13.002F, 13.0F, 12.0F, 13.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          curveToRelative(2.053F, 0.0F, 3.745F, 1.547F, 3.974F, 3.54F)
          curveToRelative(0.356F, 1.81F, 0.352F, 3.966F, -0.464F, 5.9F)
          curveToRelative(-0.862F, 2.04F, -2.601F, 3.758F, -5.57F, 4.536F)
          curveToRelative(-0.4F, 0.105F, -0.81F, -0.135F, -0.915F, -0.536F)
          curveToRelative(-0.106F, -0.4F, 0.134F, -0.81F, 0.535F, -0.916F)
          curveToRelative(2.531F, -0.662F, 3.892F, -2.069F, 4.568F, -3.668F)
          curveToRelative(0.246F, -0.584F, 0.405F, -1.203F, 0.492F, -1.833F)
          close()        
      }
    }
    return _comma24!!
  }

private var _comma24: ImageVector? = null
