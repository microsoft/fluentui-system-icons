package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Heart20: ImageVector
  get() {
    if (_heart20 != null) {
      return _heart20!!
    }
    _heart20 = fluentIcon(name = "Regular.Heart20", 20f) {
      materialPath {
          moveTo(10.496F, 16.803F)
          lineToRelative(6.245F, -6.304F)
          curveToRelative(1.684F, -1.71F, 1.679F, -4.474F, -0.017F, -6.187F)
          curveToRelative(-1.663F, -1.68F, -4.328F, -1.723F, -6.026F, -0.121F)
          curveToRelative(-0.037F, 0.034F, -0.073F, 0.07F, -0.109F, 0.106F)
          lineTo(9.993F, 4.9F)
          lineTo(9.388F, 4.29F)
          curveToRelative(-0.033F, -0.034F, -0.066F, -0.067F, -0.1F, -0.099F)
          curveToRelative(-1.702F, -1.614F, -4.372F, -1.59F, -6.027F, 0.083F)
          curveToRelative(-1.688F, 1.705F, -1.68F, 4.476F, 0.016F, 6.189F)
          lineToRelative(6.277F, 6.34F)
          curveToRelative(0.26F, 0.263F, 0.682F, 0.263F, 0.942F, 0.0F)
          close()
          moveTo(11.3F, 5.0F)
          curveToRelative(1.296F, -1.309F, 3.402F, -1.308F, 4.713F, 0.016F)
          curveToRelative(1.312F, 1.325F, 1.314F, 3.461F, 0.016F, 4.78F)
          verticalLineToRelative(0.002F)
          lineToRelative(-6.004F, 6.06F)
          lineToRelative(-6.038F, -6.099F)
          curveTo(2.674F, 8.433F, 2.673F, 6.29F, 3.972F, 4.977F)
          curveTo(5.265F, 3.671F, 7.37F, 3.673F, 8.678F, 4.994F)
          lineToRelative(0.96F, 0.97F)
          curveToRelative(0.196F, 0.198F, 0.515F, 0.198F, 0.711F, 0.0F)
          lineTo(11.3F, 5.0F)
          close()        
      }
    }
    return _heart20!!
  }

private var _heart20: ImageVector? = null
