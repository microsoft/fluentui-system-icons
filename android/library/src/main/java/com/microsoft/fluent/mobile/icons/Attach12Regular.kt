package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Attach12: ImageVector
  get() {
    if (_attach12 != null) {
      return _attach12!!
    }
    _attach12 = fluentIcon(name = "Regular.Attach12", 12f) {
      materialPath {
          moveTo(9.01F, 2.582F)
          curveTo(8.23F, 1.804F, 6.967F, 1.8F, 6.18F, 2.572F)
          lineTo(2.85F, 5.844F)
          curveTo(2.655F, 6.037F, 2.338F, 6.035F, 2.144F, 5.84F)
          curveTo(1.95F, 5.644F, 1.952F, 5.329F, 2.15F, 5.135F)
          lineToRelative(3.329F, -3.271F)
          curveToRelative(1.176F, -1.157F, 3.07F, -1.151F, 4.24F, 0.013F)
          curveToRelative(1.175F, 1.17F, 1.175F, 3.067F, 0.0F, 4.237F)
          lineToRelative(-4.332F, 4.314F)
          curveToRelative(-0.765F, 0.763F, -2.007F, 0.763F, -2.772F, 0.0F)
          curveToRelative(-0.766F, -0.762F, -0.766F, -1.999F, 0.0F, -2.761F)
          lineToRelative(4.04F, -4.023F)
          curveToRelative(0.194F, -0.195F, 0.511F, -0.195F, 0.706F, 0.0F)
          curveToRelative(0.196F, 0.194F, 0.196F, 0.51F, 0.0F, 0.704F)
          lineTo(3.32F, 8.371F)
          curveToRelative(-0.374F, 0.374F, -0.374F, 0.98F, 0.0F, 1.353F)
          curveToRelative(0.376F, 0.373F, 0.984F, 0.373F, 1.36F, 0.0F)
          lineTo(9.01F, 5.41F)
          curveToRelative(0.785F, -0.78F, 0.785F, -2.047F, 0.0F, -2.828F)
          close()        
      }
    }
    return _attach12!!
  }

private var _attach12: ImageVector? = null
