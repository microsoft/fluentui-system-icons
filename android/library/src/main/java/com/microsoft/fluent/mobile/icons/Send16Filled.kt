package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Send16: ImageVector
  get() {
    if (_send16 != null) {
      return _send16!!
    }
    _send16 = fluentIcon(name = "Filled.Send16", 16f) {
      materialPath {
          moveTo(1.724F, 1.053F)
          curveToRelative(-0.171F, -0.086F, -0.376F, -0.066F, -0.528F, 0.05F)
          curveTo(1.045F, 1.219F, 0.972F, 1.41F, 1.01F, 1.598F)
          lineToRelative(1.403F, 4.85F)
          curveTo(2.466F, 6.632F, 2.62F, 6.77F, 2.81F, 6.802F)
          lineTo(8.5F, 7.755F)
          curveToRelative(0.268F, 0.053F, 0.268F, 0.437F, 0.0F, 0.49F)
          lineTo(2.81F, 9.198F)
          curveTo(2.62F, 9.23F, 2.466F, 9.368F, 2.413F, 9.552F)
          lineToRelative(-1.403F, 4.85F)
          curveToRelative(-0.038F, 0.187F, 0.035F, 0.38F, 0.186F, 0.495F)
          curveToRelative(0.152F, 0.116F, 0.357F, 0.136F, 0.528F, 0.05F)
          lineToRelative(13.0F, -6.5F)
          curveTo(14.893F, 8.363F, 15.0F, 8.19F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.107F, -0.362F, -0.276F, -0.447F)
          lineToRelative(-13.0F, -6.5F)
          close()        
      }
    }
    return _send16!!
  }

private var _send16: ImageVector? = null
