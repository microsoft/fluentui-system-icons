package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTrending24: ImageVector
  get() {
    if (_arrowTrending24 != null) {
      return _arrowTrending24!!
    }
    _arrowTrending24 = fluentIcon(name = "Filled.ArrowTrending24", 24f) {
      materialPath {
          moveTo(14.003F, 5.5F)
          horizontalLineTo(21.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(22.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, -0.386F, -0.994F, -0.883F)
          lineTo(20.0F, 13.5F)
          lineToRelative(-0.001F, -4.586F)
          lineToRelative(-7.292F, 7.293F)
          curveToRelative(-0.36F, 0.36F, -0.927F, 0.388F, -1.32F, 0.084F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-2.296F, -2.292F)
          lineToRelative(-5.288F, 5.29F)
          curveToRelative(-0.39F, 0.39F, -1.023F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.36F, -0.36F, -0.388F, -0.928F, -0.083F, -1.32F)
          lineToRelative(0.083F, -0.095F)
          lineToRelative(5.994F, -5.996F)
          curveToRelative(0.36F, -0.36F, 0.927F, -0.388F, 1.32F, -0.084F)
          lineToRelative(0.094F, 0.083F)
          lineToRelative(2.296F, 2.292F)
          lineTo(18.584F, 7.5F)
          horizontalLineToRelative(-4.581F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(13.003F, 6.5F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.936F, 0.883F, -0.993F)
          lineTo(14.003F, 5.5F)
          horizontalLineTo(21.0F)
          horizontalLineToRelative(-6.997F)
          close()        
      }
    }
    return _arrowTrending24!!
  }

private var _arrowTrending24: ImageVector? = null
