package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EditOff16: ImageVector
  get() {
    if (_editOff16 != null) {
      return _editOff16!!
    }
    _editOff16 = fluentIcon(name = "Filled.EditOff16", 16f) {
      materialPath {
          moveTo(9.0F, 9.707F)
          lineToRelative(5.146F, 5.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(6.293F, 7.0F)
          lineTo(3.338F, 9.955F)
          curveToRelative(-0.18F, 0.18F, -0.317F, 0.401F, -0.398F, 0.644F)
          lineToRelative(-0.914F, 2.743F)
          curveToRelative(-0.06F, 0.18F, -0.013F, 0.378F, 0.12F, 0.512F)
          curveToRelative(0.134F, 0.134F, 0.333F, 0.18F, 0.512F, 0.12F)
          lineToRelative(2.743F, -0.914F)
          curveToRelative(0.243F, -0.08F, 0.463F, -0.217F, 0.644F, -0.398F)
          lineTo(9.0F, 9.707F)
          close()
          moveToRelative(3.0F, -2.999F)
          lineToRelative(-1.586F, 1.585F)
          lineToRelative(-2.707F, -2.707F)
          lineToRelative(1.585F, -1.585F)
          lineTo(12.0F, 6.708F)
          close()
          moveTo(10.732F, 2.56F)
          curveToRelative(0.748F, -0.747F, 1.96F, -0.747F, 2.707F, 0.0F)
          curveToRelative(0.748F, 0.748F, 0.748F, 1.96F, 0.0F, 2.708F)
          lineTo(12.707F, 6.0F)
          lineTo(9.998F, 3.294F)
          lineToRelative(0.734F, -0.734F)
          close()        
      }
    }
    return _editOff16!!
  }

private var _editOff16: ImageVector? = null
