package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarHalf20: ImageVector
  get() {
    if (_starHalf20 != null) {
      return _starHalf20!!
    }
    _starHalf20 = fluentIcon(name = "Regular.StarHalf20", 20f) {
      materialPath {
          moveTo(9.104F, 2.9F)
          curveToRelative(0.184F, -0.373F, 0.541F, -0.558F, 0.898F, -0.558F)
          curveToRelative(0.356F, 0.0F, 0.712F, 0.186F, 0.896F, 0.557F)
          lineToRelative(1.93F, 3.912F)
          lineToRelative(4.317F, 0.627F)
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
          close()
          moveToRelative(0.898F, 11.612F)
          curveToRelative(0.16F, 0.0F, 0.319F, 0.038F, 0.464F, 0.115F)
          lineToRelative(3.861F, 2.03F)
          lineToRelative(-0.737F, -4.3F)
          curveToRelative(-0.056F, -0.324F, 0.052F, -0.655F, 0.287F, -0.885F)
          lineToRelative(3.124F, -3.044F)
          lineTo(12.684F, 7.8F)
          curveToRelative(-0.325F, -0.047F, -0.607F, -0.252F, -0.752F, -0.547F)
          lineToRelative(-1.93F, -3.91F)
          verticalLineToRelative(11.169F)
          close()        
      }
    }
    return _starHalf20!!
  }

private var _starHalf20: ImageVector? = null
