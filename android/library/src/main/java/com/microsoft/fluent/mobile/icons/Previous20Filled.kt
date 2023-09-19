package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Previous20: ImageVector
  get() {
    if (_previous20 != null) {
      return _previous20!!
    }
    _previous20 = fluentIcon(name = "Filled.Previous20", 20f) {
      materialPath {
          moveTo(17.0F, 4.252F)
          curveToRelative(0.0F, -1.0F, -1.116F, -1.595F, -1.947F, -1.038F)
          lineTo(6.554F, 8.921F)
          curveToRelative(-0.734F, 0.494F, -0.738F, 1.573F, -0.007F, 2.071F)
          lineToRelative(8.5F, 5.793F)
          curveTo(15.875F, 17.351F, 17.0F, 16.756F, 17.0F, 15.752F)
          verticalLineToRelative(-11.5F)
          close()
          moveTo(3.0F, 3.5F)
          curveTo(3.0F, 3.224F, 3.224F, 3.0F, 3.5F, 3.0F)
          reflectiveCurveTo(4.0F, 3.224F, 4.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(4.0F, 16.776F, 3.776F, 17.0F, 3.5F, 17.0F)
          reflectiveCurveTo(3.0F, 16.776F, 3.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          close()        
      }
    }
    return _previous20!!
  }

private var _previous20: ImageVector? = null
