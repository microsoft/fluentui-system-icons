package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowLeft24: ImageVector
  get() {
    if (_arrowLeft24 != null) {
      return _arrowLeft24!!
    }
    _arrowLeft24 = fluentIcon(name = "Filled.ArrowLeft24", 24f) {
      materialPath {
          moveTo(10.295F, 19.715F)
          curveToRelative(0.393F, 0.388F, 1.027F, 0.383F, 1.414F, -0.01F)
          curveToRelative(0.388F, -0.394F, 0.383F, -1.027F, -0.01F, -1.414F)
          lineToRelative(-5.37F, -5.292F)
          horizontalLineToRelative(13.67F)
          curveToRelative(0.553F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.447F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.336F)
          lineTo(11.7F, 5.714F)
          curveToRelative(0.393F, -0.387F, 0.398F, -1.02F, 0.01F, -1.414F)
          curveToRelative(-0.387F, -0.393F, -1.02F, -0.398F, -1.414F, -0.01F)
          lineTo(3.37F, 11.112F)
          curveToRelative(-0.497F, 0.49F, -0.497F, 1.291F, 0.0F, 1.78F)
          lineToRelative(6.924F, 6.823F)
          close()        
      }
    }
    return _arrowLeft24!!
  }

private var _arrowLeft24: ImageVector? = null
