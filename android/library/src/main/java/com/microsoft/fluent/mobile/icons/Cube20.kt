package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cube20: ImageVector
  get() {
    if (_cube20 != null) {
      return _cube20!!
    }
    _cube20 = fluentIcon(name = "Filled.Cube20", 20f) {
      materialPath {
          moveTo(8.7F, 2.48F)
          curveToRelative(0.835F, -0.333F, 1.765F, -0.333F, 2.6F, 0.0F)
          lineToRelative(5.757F, 2.304F)
          curveTo(17.627F, 5.012F, 18.0F, 5.563F, 18.0F, 6.176F)
          verticalLineToRelative(7.646F)
          curveToRelative(0.0F, 0.614F, -0.373F, 1.165F, -0.943F, 1.393F)
          lineTo(11.3F, 17.518F)
          curveToRelative(-0.835F, 0.334F, -1.765F, 0.334F, -2.6F, 0.0F)
          lineToRelative(-5.757F, -2.303F)
          curveTo(2.373F, 14.987F, 2.0F, 14.435F, 2.0F, 13.822F)
          verticalLineTo(6.176F)
          curveToRelative(0.0F, -0.613F, 0.373F, -1.165F, 0.943F, -1.392F)
          lineTo(8.7F, 2.48F)
          close()
          moveTo(5.703F, 6.044F)
          curveToRelative(-0.252F, -0.114F, -0.548F, 0.0F, -0.66F, 0.252F)
          curveToRelative(-0.112F, 0.254F, 0.002F, 0.548F, 0.254F, 0.66F)
          lineTo(9.5F, 8.824F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(8.824F)
          lineToRelative(4.203F, -1.868F)
          curveToRelative(0.252F, -0.112F, 0.366F, -0.407F, 0.254F, -0.66F)
          curveToRelative(-0.112F, -0.252F, -0.408F, -0.366F, -0.66F, -0.253F)
          lineTo(10.0F, 7.953F)
          lineToRelative(-4.297F, -1.91F)
          close()        
      }
    }
    return _cube20!!
  }

private var _cube20: ImageVector? = null
