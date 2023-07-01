package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pi24: ImageVector
  get() {
    if (_pi24 != null) {
      return _pi24!!
    }
    _pi24 = fluentIcon(name = "Regular.Pi24", 24f) {
      materialPath {
          moveTo(2.5F, 6.75F)
          curveTo(2.5F, 5.231F, 3.731F, 4.0F, 5.25F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(20.664F, 4.0F, 21.0F, 4.336F, 21.0F, 4.75F)
          reflectiveCurveTo(20.664F, 5.5F, 20.25F, 5.5F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(11.453F)
          curveToRelative(0.0F, 1.21F, 1.199F, 2.055F, 2.339F, 1.648F)
          lineToRelative(0.159F, -0.057F)
          curveToRelative(0.39F, -0.14F, 0.819F, 0.064F, 0.958F, 0.454F)
          curveToRelative(0.14F, 0.39F, -0.064F, 0.819F, -0.454F, 0.958F)
          lineToRelative(-0.159F, 0.057F)
          curveTo(17.727F, 20.77F, 15.5F, 19.2F, 15.5F, 16.953F)
          verticalLineTo(5.5F)
          horizontalLineTo(9.494F)
          curveTo(9.49F, 5.74F, 9.482F, 6.06F, 9.468F, 6.444F)
          curveToRelative(-0.031F, 0.897F, -0.095F, 2.153F, -0.22F, 3.59F)
          curveToRelative(-0.252F, 2.862F, -0.759F, 6.498F, -1.79F, 9.462F)
          curveToRelative(-0.136F, 0.392F, -0.563F, 0.598F, -0.954F, 0.462F)
          curveToRelative(-0.392F, -0.136F, -0.598F, -0.563F, -0.462F, -0.954F)
          curveToRelative(0.969F, -2.787F, 1.462F, -6.275F, 1.71F, -9.1F)
          curveToRelative(0.125F, -1.407F, 0.186F, -2.636F, 0.217F, -3.512F)
          curveTo(7.982F, 6.03F, 7.99F, 5.729F, 7.994F, 5.5F)
          horizontalLineTo(5.25F)
          curveTo(4.56F, 5.5F, 4.0F, 6.06F, 4.0F, 6.75F)
          verticalLineToRelative(0.5F)
          curveTo(4.0F, 7.664F, 3.664F, 8.0F, 3.25F, 8.0F)
          reflectiveCurveTo(2.5F, 7.664F, 2.5F, 7.25F)
          verticalLineToRelative(-0.5F)
          close()        
      }
    }
    return _pi24!!
  }

private var _pi24: ImageVector? = null
