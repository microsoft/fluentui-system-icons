package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Edit16: ImageVector
  get() {
    if (_edit16 != null) {
      return _edit16!!
    }
    _edit16 = fluentIcon(name = "Regular.Edit16", 16f) {
      materialPath {
          moveTo(13.44F, 2.56F)
          curveToRelative(-0.747F, -0.747F, -1.96F, -0.747F, -2.707F, 0.0F)
          lineTo(3.338F, 9.956F)
          curveToRelative(-0.18F, 0.18F, -0.317F, 0.402F, -0.398F, 0.644F)
          lineToRelative(-0.914F, 2.743F)
          curveToRelative(-0.06F, 0.18F, -0.013F, 0.378F, 0.12F, 0.512F)
          curveToRelative(0.134F, 0.134F, 0.333F, 0.18F, 0.512F, 0.12F)
          lineToRelative(2.743F, -0.914F)
          curveToRelative(0.243F, -0.08F, 0.463F, -0.217F, 0.644F, -0.398F)
          lineToRelative(7.395F, -7.394F)
          curveToRelative(0.748F, -0.748F, 0.748F, -1.96F, 0.0F, -2.707F)
          close()
          moveToRelative(-2.0F, 0.708F)
          curveToRelative(0.357F, -0.357F, 0.936F, -0.357F, 1.293F, 0.0F)
          curveToRelative(0.357F, 0.357F, 0.357F, 0.936F, 0.0F, 1.293F)
          lineTo(12.0F, 5.294F)
          lineToRelative(-1.293F, -1.292F)
          lineToRelative(0.734F, -0.734F)
          close()
          moveTo(10.0F, 4.708F)
          lineToRelative(1.292F, 1.293F)
          lineToRelative(-5.954F, 5.954F)
          curveToRelative(-0.071F, 0.071F, -0.158F, 0.125F, -0.253F, 0.157F)
          lineTo(3.29F, 12.71F)
          lineToRelative(0.598F, -1.794F)
          curveToRelative(0.031F, -0.096F, 0.085F, -0.183F, 0.156F, -0.254F)
          lineTo(10.0F, 4.708F)
          close()        
      }
    }
    return _edit16!!
  }

private var _edit16: ImageVector? = null
