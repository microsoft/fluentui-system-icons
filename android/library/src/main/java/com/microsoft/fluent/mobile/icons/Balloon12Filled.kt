package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Balloon12: ImageVector
  get() {
    if (_balloon12 != null) {
      return _balloon12!!
    }
    _balloon12 = fluentIcon(name = "Filled.Balloon12", 12f) {
      materialPath {
          moveTo(5.5F, 1.0F)
          curveTo(7.41F, 1.0F, 9.0F, 2.484F, 9.0F, 4.364F)
          curveToRelative(0.0F, 1.235F, -0.46F, 2.375F, -1.104F, 3.208F)
          curveTo(7.386F, 8.232F, 6.71F, 8.762F, 6.0F, 8.937F)
          verticalLineTo(9.4F)
          curveToRelative(0.0F, 0.22F, 0.18F, 0.4F, 0.4F, 0.4F)
          horizontalLineToRelative(1.2F)
          curveToRelative(0.773F, 0.0F, 1.4F, 0.627F, 1.4F, 1.4F)
          verticalLineToRelative(0.3F)
          curveTo(9.0F, 11.776F, 8.776F, 12.0F, 8.5F, 12.0F)
          reflectiveCurveTo(8.0F, 11.776F, 8.0F, 11.5F)
          verticalLineToRelative(-0.3F)
          curveToRelative(0.0F, -0.22F, -0.18F, -0.4F, -0.4F, -0.4F)
          horizontalLineTo(6.4F)
          curveTo(5.627F, 10.8F, 5.0F, 10.173F, 5.0F, 9.4F)
          verticalLineTo(8.937F)
          curveTo(4.29F, 8.762F, 3.614F, 8.234F, 3.104F, 7.574F)
          curveTo(2.461F, 6.74F, 2.0F, 5.6F, 2.0F, 4.364F)
          curveTo(2.0F, 2.484F, 3.59F, 1.0F, 5.5F, 1.0F)
          close()
          moveToRelative(0.07F, 2.005F)
          curveTo(5.297F, 2.966F, 5.044F, 3.156F, 5.005F, 3.43F)
          curveTo(4.966F, 3.703F, 5.156F, 3.956F, 5.43F, 3.995F)
          curveToRelative(0.297F, 0.042F, 0.534F, 0.279F, 0.576F, 0.576F)
          curveToRelative(0.04F, 0.273F, 0.293F, 0.463F, 0.566F, 0.424F)
          curveToRelative(0.274F, -0.04F, 0.463F, -0.293F, 0.424F, -0.566F)
          curveTo(6.89F, 3.692F, 6.308F, 3.109F, 5.57F, 3.005F)
          close()        
      }
    }
    return _balloon12!!
  }

private var _balloon12: ImageVector? = null
