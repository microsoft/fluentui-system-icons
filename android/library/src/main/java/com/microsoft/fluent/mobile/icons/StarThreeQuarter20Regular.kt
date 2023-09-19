package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarThreeQuarter20: ImageVector
  get() {
    if (_starThreeQuarter20 != null) {
      return _starThreeQuarter20!!
    }
    _starThreeQuarter20 = fluentIcon(name = "Regular.StarThreeQuarter20", 20f) {
      materialPath {
          moveTo(10.898F, 2.9F)
          lineToRelative(1.93F, 3.91F)
          lineToRelative(4.317F, 0.628F)
          curveToRelative(0.82F, 0.12F, 1.148F, 1.127F, 0.554F, 1.706F)
          lineToRelative(-3.124F, 3.044F)
          lineToRelative(0.738F, 4.3F)
          curveToRelative(0.14F, 0.816F, -0.717F, 1.44F, -1.451F, 1.054F)
          lineToRelative(-3.86F, -2.03F)
          lineToRelative(-3.862F, 2.03F)
          curveToRelative(-0.733F, 0.385F, -1.59F, -0.238F, -1.45F, -1.055F)
          lineToRelative(0.737F, -4.299F)
          lineToRelative(-3.124F, -3.044F)
          curveTo(1.71F, 8.565F, 2.037F, 7.557F, 2.857F, 7.438F)
          lineToRelative(4.317F, -0.627F)
          lineToRelative(1.93F, -3.912F)
          curveToRelative(0.367F, -0.743F, 1.427F, -0.743F, 1.794F, 0.0F)
          close()
          moveToRelative(1.104F, 4.474F)
          verticalLineToRelative(8.06F)
          lineToRelative(2.325F, 1.223F)
          lineToRelative(-0.737F, -4.3F)
          curveToRelative(-0.056F, -0.324F, 0.052F, -0.655F, 0.287F, -0.885F)
          lineToRelative(3.124F, -3.044F)
          lineTo(12.684F, 7.8F)
          curveToRelative(-0.279F, -0.04F, -0.525F, -0.196F, -0.682F, -0.426F)
          close()        
      }
    }
    return _starThreeQuarter20!!
  }

private var _starThreeQuarter20: ImageVector? = null
