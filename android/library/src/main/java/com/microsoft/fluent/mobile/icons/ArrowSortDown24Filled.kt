package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortDown24: ImageVector
  get() {
    if (_arrowSortDown24 != null) {
      return _arrowSortDown24!!
    }
    _arrowSortDown24 = fluentIcon(name = "Filled.ArrowSortDown24", 24f) {
      materialPath {
          moveTo(11.883F, 4.01F)
          lineTo(12.0F, 4.005F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(13.0F, 5.004F)
          verticalLineToRelative(11.584F)
          lineToRelative(2.293F, -2.294F)
          curveToRelative(0.36F, -0.36F, 0.927F, -0.389F, 1.32F, -0.084F)
          lineToRelative(0.094F, 0.083F)
          curveToRelative(0.36F, 0.36F, 0.388F, 0.928F, 0.084F, 1.32F)
          lineToRelative(-0.084F, 0.095F)
          lineToRelative(-3.996F, 4.0F)
          curveToRelative(-0.36F, 0.36F, -0.927F, 0.388F, -1.32F, 0.083F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-4.004F, -4.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.023F, 0.0F, -1.414F)
          curveToRelative(0.36F, -0.36F, 0.927F, -0.389F, 1.32F, -0.084F)
          lineToRelative(0.094F, 0.083F)
          lineTo(11.0F, 16.583F)
          verticalLineTo(5.004F)
          curveToRelative(0.0F, -0.512F, 0.386F, -0.935F, 0.883F, -0.992F)
          lineTo(12.0F, 4.004F)
          lineTo(11.883F, 4.01F)
          close()        
      }
    }
    return _arrowSortDown24!!
  }

private var _arrowSortDown24: ImageVector? = null
