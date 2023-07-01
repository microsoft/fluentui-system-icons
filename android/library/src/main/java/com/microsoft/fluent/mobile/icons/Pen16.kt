package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pen16: ImageVector
  get() {
    if (_pen16 != null) {
      return _pen16!!
    }
    _pen16 = fluentIcon(name = "Filled.Pen16", 16f) {
      materialPath {
          moveTo(10.733F, 2.56F)
          curveToRelative(0.748F, -0.747F, 1.96F, -0.747F, 2.707F, 0.0F)
          curveToRelative(0.748F, 0.748F, 0.748F, 1.96F, 0.0F, 2.708F)
          lineTo(12.707F, 6.0F)
          lineToRelative(0.263F, 0.263F)
          curveToRelative(0.683F, 0.683F, 0.683F, 1.791F, 0.0F, 2.475F)
          lineToRelative(-1.116F, 1.116F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.117F, -1.117F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(12.0F, 6.708F)
          lineToRelative(-5.955F, 5.954F)
          curveToRelative(-0.18F, 0.181F, -0.401F, 0.317F, -0.644F, 0.398F)
          lineToRelative(-2.743F, 0.915F)
          curveToRelative(-0.18F, 0.06F, -0.378F, 0.013F, -0.511F, -0.121F)
          curveToRelative(-0.134F, -0.134F, -0.181F, -0.332F, -0.121F, -0.512F)
          lineTo(2.94F, 10.6F)
          curveToRelative(0.08F, -0.242F, 0.217F, -0.463F, 0.398F, -0.644F)
          lineToRelative(7.395F, -7.394F)
          close()        
      }
    }
    return _pen16!!
  }

private var _pen16: ImageVector? = null
