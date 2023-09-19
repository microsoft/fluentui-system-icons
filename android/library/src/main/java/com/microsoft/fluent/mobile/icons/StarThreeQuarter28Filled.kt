package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarThreeQuarter28: ImageVector
  get() {
    if (_starThreeQuarter28 != null) {
      return _starThreeQuarter28!!
    }
    _starThreeQuarter28 = fluentIcon(name = "Filled.StarThreeQuarter28", 28f) {
      materialPath {
          moveTo(17.0F, 7.349F)
          lineToRelative(-1.698F, -3.441F)
          curveToRelative(-0.532F, -1.078F, -2.069F, -1.078F, -2.6F, 0.0F)
          lineTo(10.01F, 9.36F)
          lineToRelative(-6.017F, 0.875F)
          curveToRelative(-1.19F, 0.173F, -1.664F, 1.634F, -0.804F, 2.473F)
          lineToRelative(4.355F, 4.244F)
          lineToRelative(-1.028F, 5.993F)
          curveToRelative(-0.204F, 1.185F, 1.04F, 2.088F, 2.104F, 1.529F)
          lineToRelative(5.382F, -2.83F)
          lineTo(17.0F, 23.221F)
          verticalLineTo(7.349F)
          close()        
      }
    }
    return _starThreeQuarter28!!
  }

private var _starThreeQuarter28: ImageVector? = null
