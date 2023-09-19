package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarHalf28: ImageVector
  get() {
    if (_starHalf28 != null) {
      return _starHalf28!!
    }
    _starHalf28 = fluentIcon(name = "Filled.StarHalf28", 28f) {
      materialPath {
          moveTo(14.0F, 3.1F)
          curveToRelative(-0.517F, 0.0F, -1.033F, 0.27F, -1.299F, 0.808F)
          lineToRelative(-2.69F, 5.452F)
          lineToRelative(-6.018F, 0.875F)
          curveToRelative(-1.19F, 0.173F, -1.664F, 1.634F, -0.804F, 2.473F)
          lineToRelative(4.355F, 4.244F)
          lineToRelative(-1.028F, 5.993F)
          curveToRelative(-0.204F, 1.185F, 1.04F, 2.088F, 2.104F, 1.529F)
          lineTo(14.0F, 21.645F)
          verticalLineTo(3.1F)
          close()        
      }
    }
    return _starHalf28!!
  }

private var _starHalf28: ImageVector? = null
