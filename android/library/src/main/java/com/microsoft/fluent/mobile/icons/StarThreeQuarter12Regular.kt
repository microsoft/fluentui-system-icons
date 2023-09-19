package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarThreeQuarter12: ImageVector
  get() {
    if (_starThreeQuarter12 != null) {
      return _starThreeQuarter12!!
    }
    _starThreeQuarter12 = fluentIcon(name = "Regular.StarThreeQuarter12", 12f) {
      materialPath {
          moveTo(6.718F, 1.546F)
          lineTo(7.83F, 3.798F)
          lineToRelative(2.486F, 0.361F)
          curveToRelative(0.656F, 0.096F, 0.918F, 0.902F, 0.443F, 1.365F)
          lineTo(8.96F, 7.277F)
          lineToRelative(0.425F, 2.476F)
          curveToRelative(0.112F, 0.654F, -0.574F, 1.152F, -1.16F, 0.844F)
          lineTo(6.0F, 9.427F)
          lineToRelative(-2.224F, 1.17F)
          curveToRelative(-0.587F, 0.308F, -1.272F, -0.19F, -1.16F, -0.844F)
          lineTo(3.04F, 7.277F)
          lineTo(1.243F, 5.524F)
          curveTo(0.767F, 5.06F, 1.03F, 4.254F, 1.685F, 4.159F)
          lineTo(4.172F, 3.8F)
          lineToRelative(1.112F, -2.253F)
          curveToRelative(0.293F, -0.595F, 1.14F, -0.595F, 1.434F, 0.0F)
          close()
          moveTo(7.0F, 8.823F)
          lineToRelative(1.331F, 0.7F)
          lineToRelative(-0.374F, -2.18F)
          curveToRelative(-0.045F, -0.26F, 0.042F, -0.525F, 0.23F, -0.708F)
          lineTo(9.771F, 5.09F)
          lineTo(7.582F, 4.773F)
          curveTo(7.336F, 4.737F, 7.122F, 4.589F, 7.0F, 4.373F)
          verticalLineToRelative(4.45F)
          close()        
      }
    }
    return _starThreeQuarter12!!
  }

private var _starThreeQuarter12: ImageVector? = null
