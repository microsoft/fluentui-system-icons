package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp24: ImageVector
  get() {
    if (_arrowUp24 != null) {
      return _arrowUp24!!
    }
    _arrowUp24 = fluentIcon(name = "Filled.ArrowUp24", 24f) {
      materialPath {
          moveTo(4.284F, 10.295F)
          curveToRelative(-0.388F, 0.393F, -0.383F, 1.027F, 0.01F, 1.414F)
          curveToRelative(0.394F, 0.388F, 1.027F, 0.383F, 1.414F, -0.01F)
          lineTo(11.0F, 6.329F)
          verticalLineToRelative(13.67F)
          curveToRelative(0.0F, 0.553F, 0.447F, 1.0F, 1.0F, 1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.447F, 1.0F, -1.0F)
          verticalLineTo(6.335F)
          lineToRelative(5.285F, 5.364F)
          curveToRelative(0.387F, 0.393F, 1.02F, 0.398F, 1.414F, 0.01F)
          curveToRelative(0.393F, -0.387F, 0.398F, -1.02F, 0.01F, -1.414F)
          lineTo(12.887F, 3.37F)
          curveToRelative(-0.49F, -0.497F, -1.291F, -0.497F, -1.78F, 0.0F)
          lineToRelative(-6.823F, 6.924F)
          close()        
      }
    }
    return _arrowUp24!!
  }

private var _arrowUp24: ImageVector? = null
