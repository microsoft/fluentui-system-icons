package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight24: ImageVector
  get() {
    if (_arrowRight24 != null) {
      return _arrowRight24!!
    }
    _arrowRight24 = fluentIcon(name = "Filled.ArrowRight24", 24f) {
      materialPath {
          moveTo(13.704F, 4.284F)
          curveToRelative(-0.393F, -0.388F, -1.026F, -0.383F, -1.414F, 0.01F)
          curveToRelative(-0.387F, 0.394F, -0.383F, 1.027F, 0.01F, 1.414F)
          lineTo(17.672F, 11.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.447F, -1.0F, 1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(13.665F)
          lineTo(12.3F, 18.285F)
          curveToRelative(-0.394F, 0.387F, -0.398F, 1.02F, -0.01F, 1.414F)
          curveToRelative(0.387F, 0.393F, 1.02F, 0.398F, 1.413F, 0.01F)
          lineToRelative(6.925F, -6.822F)
          curveToRelative(0.497F, -0.49F, 0.497F, -1.291F, 0.0F, -1.78F)
          lineToRelative(-6.925F, -6.823F)
          close()        
      }
    }
    return _arrowRight24!!
  }

private var _arrowRight24: ImageVector? = null
