package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown24: ImageVector
  get() {
    if (_arrowDown24 != null) {
      return _arrowDown24!!
    }
    _arrowDown24 = fluentIcon(name = "Filled.ArrowDown24", 24f) {
      materialPath {
          moveTo(19.716F, 13.704F)
          curveToRelative(0.388F, -0.393F, 0.383F, -1.026F, -0.01F, -1.414F)
          curveToRelative(-0.394F, -0.387F, -1.027F, -0.383F, -1.415F, 0.01F)
          lineToRelative(-5.29F, 5.371F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(13.665F)
          lineTo(5.714F, 12.3F)
          curveToRelative(-0.387F, -0.394F, -1.02F, -0.398F, -1.414F, -0.01F)
          curveToRelative(-0.393F, 0.387F, -0.398F, 1.02F, -0.01F, 1.413F)
          lineToRelative(6.822F, 6.925F)
          curveToRelative(0.49F, 0.497F, 1.291F, 0.497F, 1.78F, 0.0F)
          lineToRelative(6.823F, -6.925F)
          close()        
      }
    }
    return _arrowDown24!!
  }

private var _arrowDown24: ImageVector? = null
