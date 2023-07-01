package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CallEnd16: ImageVector
  get() {
    if (_callEnd16 != null) {
      return _callEnd16!!
    }
    _callEnd16 = fluentIcon(name = "Filled.CallEnd16", 16f) {
      materialPath {
          moveTo(14.827F, 9.7F)
          lineToRelative(0.138F, -0.754F)
          curveToRelative(0.137F, -0.748F, -0.133F, -1.533F, -0.71F, -2.063F)
          curveTo(12.883F, 5.623F, 10.74F, 4.996F, 7.825F, 5.0F)
          curveToRelative(-2.91F, 0.004F, -4.988F, 0.636F, -6.234F, 1.895F)
          curveToRelative(-0.528F, 0.533F, -0.72F, 1.324F, -0.505F, 2.075F)
          lineToRelative(0.216F, 0.754F)
          curveToRelative(0.202F, 0.704F, 0.884F, 1.175F, 1.594F, 1.1F)
          lineToRelative(1.424F, -0.149F)
          curveToRelative(0.611F, -0.064F, 1.094F, -0.517F, 1.198F, -1.126F)
          lineToRelative(0.274F, -1.604F)
          curveTo(6.47F, 7.625F, 7.203F, 7.454F, 7.99F, 7.43F)
          curveToRelative(0.787F, -0.024F, 1.508F, 0.103F, 2.162F, 0.382F)
          lineToRelative(0.442F, 1.714F)
          curveToRelative(0.159F, 0.617F, 0.69F, 1.078F, 1.315F, 1.14F)
          lineToRelative(1.432F, 0.144F)
          curveToRelative(0.72F, 0.072F, 1.355F, -0.402F, 1.485F, -1.11F)
          close()        
      }
    }
    return _callEnd16!!
  }

private var _callEnd16: ImageVector? = null
