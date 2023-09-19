package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOneQuarter12: ImageVector
  get() {
    if (_starOneQuarter12 != null) {
      return _starOneQuarter12!!
    }
    _starOneQuarter12 = fluentIcon(name = "Filled.StarOneQuarter12", 12f) {
      materialPath {
          moveTo(5.0F, 2.12F)
          lineTo(4.172F, 3.798F)
          lineTo(1.686F, 4.16F)
          curveTo(1.259F, 4.222F, 0.999F, 4.584F, 1.0F, 4.958F)
          curveToRelative(0.0F, 0.2F, 0.077F, 0.404F, 0.242F, 0.566F)
          lineToRelative(1.8F, 1.754F)
          lineToRelative(-0.425F, 2.475F)
          curveTo(2.61F, 9.794F, 2.606F, 9.835F, 2.605F, 9.874F)
          curveToRelative(-0.001F, 0.045F, 0.001F, 0.09F, 0.007F, 0.133F)
          curveToRelative(0.075F, 0.52F, 0.657F, 0.857F, 1.165F, 0.59F)
          lineTo(5.0F, 9.954F)
          verticalLineTo(2.12F)
          close()        
      }
    }
    return _starOneQuarter12!!
  }

private var _starOneQuarter12: ImageVector? = null
