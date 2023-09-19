package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Edit16: ImageVector
  get() {
    if (_edit16 != null) {
      return _edit16!!
    }
    _edit16 = fluentIcon(name = "Filled.Edit16", 16f) {
      materialPath {
          moveTo(10.733F, 2.56F)
          curveToRelative(0.748F, -0.747F, 1.96F, -0.747F, 2.707F, 0.0F)
          curveToRelative(0.748F, 0.748F, 0.748F, 1.96F, 0.0F, 2.708F)
          lineToRelative(-0.733F, 0.734F)
          lineToRelative(-2.708F, -2.708F)
          lineToRelative(0.734F, -0.733F)
          close()
          moveToRelative(-1.44F, 1.442F)
          lineTo(3.337F, 9.954F)
          curveToRelative(-0.18F, 0.18F, -0.317F, 0.402F, -0.398F, 0.644F)
          lineToRelative(-0.914F, 2.743F)
          curveToRelative(-0.06F, 0.18F, -0.013F, 0.378F, 0.12F, 0.512F)
          curveToRelative(0.134F, 0.134F, 0.333F, 0.18F, 0.512F, 0.12F)
          lineTo(5.4F, 13.059F)
          curveToRelative(0.243F, -0.08F, 0.463F, -0.217F, 0.644F, -0.398F)
          lineTo(12.0F, 6.709F)
          lineTo(9.292F, 4.002F)
          close()        
      }
    }
    return _edit16!!
  }

private var _edit16: ImageVector? = null
