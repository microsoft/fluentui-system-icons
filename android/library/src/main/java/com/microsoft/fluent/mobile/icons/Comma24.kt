package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comma24: ImageVector
  get() {
    if (_comma24 != null) {
      return _comma24!!
    }
    _comma24 = fluentIcon(name = "Filled.Comma24", 24f) {
      materialPath {
          moveTo(14.2F, 12.341F)
          curveTo(13.569F, 12.758F, 12.813F, 13.0F, 12.0F, 13.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          curveToRelative(2.029F, 0.0F, 3.705F, 1.51F, 3.965F, 3.469F)
          curveToRelative(0.365F, 1.792F, 0.507F, 3.947F, -0.207F, 5.898F)
          curveToRelative(-0.766F, 2.09F, -2.464F, 3.804F, -5.505F, 4.6F)
          curveToRelative(-0.534F, 0.14F, -1.08F, -0.18F, -1.22F, -0.714F)
          curveToRelative(-0.14F, -0.534F, 0.18F, -1.08F, 0.714F, -1.22F)
          curveToRelative(2.46F, -0.644F, 3.61F, -1.93F, 4.133F, -3.354F)
          curveToRelative(0.155F, -0.425F, 0.26F, -0.874F, 0.32F, -1.338F)
          close()        
      }
    }
    return _comma24!!
  }

private var _comma24: ImageVector? = null
