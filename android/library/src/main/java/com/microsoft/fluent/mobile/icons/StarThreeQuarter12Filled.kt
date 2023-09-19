package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarThreeQuarter12: ImageVector
  get() {
    if (_starThreeQuarter12 != null) {
      return _starThreeQuarter12!!
    }
    _starThreeQuarter12 = fluentIcon(name = "Filled.StarThreeQuarter12", 12f) {
      materialPath {
          moveTo(7.0F, 2.116F)
          lineToRelative(-0.282F, -0.57F)
          curveToRelative(-0.293F, -0.595F, -1.141F, -0.595F, -1.434F, 0.0F)
          lineTo(4.171F, 3.798F)
          lineTo(1.686F, 4.16F)
          curveTo(1.03F, 4.255F, 0.768F, 5.061F, 1.242F, 5.524F)
          lineToRelative(1.8F, 1.753F)
          lineToRelative(-0.425F, 2.476F)
          curveToRelative(-0.112F, 0.654F, 0.574F, 1.152F, 1.16F, 0.844F)
          lineToRelative(2.224F, -1.17F)
          lineTo(7.0F, 9.954F)
          verticalLineTo(2.117F)
          close()        
      }
    }
    return _starThreeQuarter12!!
  }

private var _starThreeQuarter12: ImageVector? = null
