package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortUp24: ImageVector
  get() {
    if (_arrowSortUp24 != null) {
      return _arrowSortUp24!!
    }
    _arrowSortUp24 = fluentIcon(name = "Filled.ArrowSortUp24", 24f) {
      materialPath {
          moveTo(7.293F, 8.293F)
          lineToRelative(3.995F, -4.0F)
          curveToRelative(0.36F, -0.36F, 0.928F, -0.388F, 1.32F, -0.084F)
          lineToRelative(0.094F, 0.083F)
          lineToRelative(4.006F, 4.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.415F)
          curveToRelative(-0.36F, 0.36F, -0.927F, 0.388F, -1.32F, 0.084F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-2.293F, -2.291F)
          verticalLineToRelative(11.584F)
          curveToRelative(0.0F, 0.512F, -0.386F, 0.935F, -0.883F, 0.993F)
          lineTo(12.0F, 20.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.884F)
          lineTo(11.0F, 19.001F)
          verticalLineTo(7.41F)
          lineTo(8.708F, 9.707F)
          curveToRelative(-0.36F, 0.36F, -0.928F, 0.388F, -1.32F, 0.084F)
          lineTo(7.293F, 9.707F)
          curveToRelative(-0.36F, -0.36F, -0.388F, -0.927F, -0.084F, -1.32F)
          lineToRelative(0.084F, -0.094F)
          lineToRelative(3.995F, -4.0F)
          lineToRelative(-3.995F, 4.0F)
          close()        
      }
    }
    return _arrowSortUp24!!
  }

private var _arrowSortUp24: ImageVector? = null
