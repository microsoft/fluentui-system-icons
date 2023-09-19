package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTrendingDown24: ImageVector
  get() {
    if (_arrowTrendingDown24 != null) {
      return _arrowTrendingDown24!!
    }
    _arrowTrendingDown24 = fluentIcon(name = "Filled.ArrowTrendingDown24", 24f) {
      materialPath {
          moveTo(14.003F, 18.998F)
          horizontalLineTo(21.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, -0.386F, 0.993F, -0.883F)
          lineTo(22.0F, 18.0F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -0.553F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, 0.385F, -0.994F, 0.883F)
          lineTo(20.0F, 10.999F)
          lineToRelative(-0.001F, 4.585F)
          lineToRelative(-7.292F, -7.293F)
          curveToRelative(-0.36F, -0.36F, -0.927F, -0.388F, -1.32F, -0.083F)
          lineTo(11.293F, 8.29F)
          lineToRelative(-2.296F, 2.292F)
          lineToRelative(-5.288F, -5.29F)
          curveToRelative(-0.39F, -0.39F, -1.023F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.36F, 0.36F, -0.388F, 0.927F, -0.083F, 1.32F)
          lineToRelative(0.083F, 0.094F)
          lineToRelative(5.994F, 5.997F)
          curveToRelative(0.36F, 0.36F, 0.927F, 0.388F, 1.32F, 0.083F)
          lineToRelative(0.094F, -0.083F)
          lineToRelative(2.296F, -2.292F)
          lineToRelative(6.585F, 6.586F)
          horizontalLineToRelative(-4.581F)
          curveToRelative(-0.513F, 0.0F, -0.935F, 0.386F, -0.993F, 0.884F)
          lineToRelative(-0.007F, 0.116F)
          curveToRelative(0.0F, 0.513F, 0.386F, 0.936F, 0.883F, 0.994F)
          lineToRelative(0.117F, 0.006F)
          close()        
      }
    }
    return _arrowTrendingDown24!!
  }

private var _arrowTrendingDown24: ImageVector? = null
