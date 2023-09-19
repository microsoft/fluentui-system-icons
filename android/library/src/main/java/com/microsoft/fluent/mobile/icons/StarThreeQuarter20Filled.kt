package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarThreeQuarter20: ImageVector
  get() {
    if (_starThreeQuarter20 != null) {
      return _starThreeQuarter20!!
    }
    _starThreeQuarter20 = fluentIcon(name = "Filled.StarThreeQuarter20", 20f) {
      materialPath {
          moveTo(12.0F, 5.133F)
          lineToRelative(-1.102F, -2.234F)
          curveToRelative(-0.367F, -0.743F, -1.427F, -0.743F, -1.794F, 0.0F)
          lineToRelative(-1.93F, 3.912F)
          lineToRelative(-4.317F, 0.627F)
          curveToRelative(-0.82F, 0.12F, -1.147F, 1.127F, -0.554F, 1.706F)
          lineToRelative(3.124F, 3.044F)
          lineToRelative(-0.738F, 4.3F)
          curveToRelative(-0.14F, 0.816F, 0.718F, 1.44F, 1.451F, 1.054F)
          lineToRelative(3.861F, -2.03F)
          lineTo(12.0F, 16.562F)
          verticalLineTo(5.133F)
          close()        
      }
    }
    return _starThreeQuarter20!!
  }

private var _starThreeQuarter20: ImageVector? = null
