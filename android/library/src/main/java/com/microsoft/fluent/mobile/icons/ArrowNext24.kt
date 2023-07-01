package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowNext24: ImageVector
  get() {
    if (_arrowNext24 != null) {
      return _arrowNext24!!
    }
    _arrowNext24 = fluentIcon(name = "Filled.ArrowNext24", 24f) {
      materialPath {
          moveTo(18.0F, 3.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, 0.386F, 0.993F, 0.883F)
          lineTo(19.0F, 4.0F)
          verticalLineToRelative(16.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, -0.386F, -0.993F, -0.883F)
          lineTo(17.0F, 20.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveTo(5.293F, 3.293F)
          curveToRelative(0.36F, -0.36F, 0.928F, -0.388F, 1.32F, -0.083F)
          lineToRelative(0.094F, 0.083F)
          lineToRelative(8.0F, 8.0F)
          curveToRelative(0.36F, 0.36F, 0.388F, 0.928F, 0.083F, 1.32F)
          lineToRelative(-0.083F, 0.094F)
          lineToRelative(-8.0F, 8.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.36F, -0.36F, -0.388F, -0.928F, -0.083F, -1.32F)
          lineToRelative(0.083F, -0.094F)
          lineTo(12.586F, 12.0F)
          lineTo(5.293F, 4.707F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          close()        
      }
    }
    return _arrowNext24!!
  }

private var _arrowNext24: ImageVector? = null
